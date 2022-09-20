import { Box, FormControl, MenuItem, Select, styled, Typography } from '@mui/material';
import { useState, useContext, createRef, ChangeEvent, useEffect, useCallback } from 'react';
import NumberFormat from 'react-number-format';
import BigNumber from 'bignumber.js';
import { FormButton, FormTitle, Divider, DividerContent } from '.';
import { ContractContext, Web3Context } from '../../../contexts';
import InkIcon from '../../../assets/img/ink.png';
import { getTopTokensList } from '../../../utils';
import Web3 from 'web3';
import INKPURCHASE_ABI from '../../../utils/abis/inkpurchase.json';

export const ReserveInk = ({ onNext, onPrev }: { onNext: Function; onPrev: () => void }) => {
  const { contracts, getTokenDecimals } = useContext(ContractContext);
  const { account, connected, connect, chainId, switchNetwork } = useContext(Web3Context);
  const [currency, setCurrency] = useState<number>(0);
  const [network, setNetwork] = useState<string>('ether');
  const [focusStatus, setFocusStatus] = useState<number>(0);
  const [minAmount, setMinAmount] = useState<number>(0);
  const handleCurrencyChange = (ev: any) => {
    setCurrency(Number(ev.target.value));
  };
  const [tokensList, setTokensList] = useState<Array<any>>([]);
  const chainValidation = useCallback(() => {
    const reservedChain = network === 'ether' ? 4 : 80001;
    return chainId === reservedChain;
  }, [chainId, network]);
  useEffect(() => {
    const topTokensListWrapper = async () => {
      setTokensList(await getTopTokensList(chainId === null ? 1 : chainId));
    };
    if (connected && chainValidation()) topTokensListWrapper();
  }, [chainId, connected, chainValidation]);
  useEffect(() => {
    if (contracts !== null) {
      const minAmountWrapper = async () => {
        console.log(contracts);
        await contracts['inkpurchase'].call('minAmount').then((res: any) => {
          setMinAmount(res);
        });
      };
      minAmountWrapper();
    }
  }, [contracts]);
  const [USDCAmount, setUSDCAmount] = useState<string>('0');
  const handleUSDCAmountChange = (ev: any) => {
    const USDCAmount = ev.target.value.replaceAll(',', '').replaceAll('$', '').replaceAll(' ', '');
    setFocusStatus(1);
    setUSDCAmount(USDCAmount);
    const quoterWrapper = async () => {
      if (contracts !== null)
        contracts.quoter
          .call(
            'quoteExactOutputSingle',
            tokensList[currency].address,
            tokensList[0].address,
            3000,
            new BigNumber(USDCAmount).times(new BigNumber(10).pow(6)).toString(),
            0
          )
          .then((res: any) => {
            setTokenAmount(new BigNumber(res).dividedBy(new BigNumber(10).pow(tokenDecimals)).toFixed(3));
          });
    };
    if (currency === 0) setTokenAmount(ev.target.value.replaceAll(',', ''));
    else quoterWrapper();
  };
  const [tokenAmount, setTokenAmount] = useState<string>('0');
  const handleTokenAmountChange = (ev: any) => {
    setFocusStatus(2);
    setTokenAmount(ev.target.value.replaceAll(',', ''));
  };
  const [reservedInk, setReservedInk] = useState<number>(0);
  const handleClick = () => {
    onNext({ tokenAmount, token: tokensList[currency], inkAmount: reservedInk, usdcAmount: USDCAmount });
  };
  const [tokenDecimals, setTokenDecimals] = useState<number>(18);
  const handleNetworkChange = (ev: any) => {
    setNetwork(ev.target.value);
  };
  const handleWalletConnect = async () => {
    await connect!();
    if (!chainValidation()) {
      const reservedChain = network === 'ether' ? 4 : 80001;
      switchNetwork(reservedChain);
    }
  };
  useEffect(() => {
    if (focusStatus === 2 && tokensList.length > 0 && contracts !== null) {
      if (Number(tokenAmount) === 0) {
        setUSDCAmount('0');
      } else if (tokensList[currency].symbol === 'USDC') {
        setUSDCAmount(tokenAmount);
      } else {
        const quoterWrapper = async () => {
          const tokenDecimals = await getTokenDecimals(tokensList[currency].address);
          setTokenDecimals(tokenDecimals);
          contracts.quoter
            .call(
              'quoteExactInputSingle',
              tokensList[currency].address,
              tokensList[0].address,
              3000,
              new BigNumber(tokenAmount).times(new BigNumber(10).pow(tokenDecimals)).toString(),
              0
            )
            .then((res: any) => {
              setUSDCAmount(new BigNumber(res).dividedBy(1000000).toFixed(3));
            });
        };
        quoterWrapper();
      }
    }
  }, [currency, tokenAmount, tokensList, contracts, getTokenDecimals, focusStatus]);
  useEffect(() => {
    setReservedInk(Number(USDCAmount) * 500);
  }, [USDCAmount]);
  return (
    <>
      <FormTitle>
        RESERVE <br />
        INK
      </FormTitle>
      {(account === null && connected === false) || !chainValidation() ? (
        <Box
          display="flex"
          flexDirection="column"
          width="100%"
          alignItems="center"
          justifyContent="center"
          flexGrow={1}
          gap="24px"
        >
          <Typography fontWeight="bold" color="#ffffff88" textAlign="center">
            INK TOKEN CONTRACT IS NOT YET LIVE, BUT YOU CAN RESERVE AN ALLOCATION TODAY AT THE PRE-PUBLIC PRICE OF
            $0.002 / $INK
          </Typography>
          <FormControl sx={{ width: '100%' }}>
            <CustomSelect id="networkSelector" defaultValue="ether" value={network} onChange={handleNetworkChange}>
              <MenuItem value="ether">
                <Box width="100%" display="flex" gap={1} justifyContent="flex-start">
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                    width="22px"
                    height="22px"
                    style={{ borderRadius: 24 }}
                    onError={(ev) => (ev.currentTarget.style.visibility = 'hidden')}
                  />
                  ETHEREUM
                </Box>
              </MenuItem>
              <MenuItem value="poly">
                <Box width="100%" display="flex" gap={1} justifyContent="flex-start">
                  <img
                    src="https://app.uniswap.org/static/media/polygon-matic-logo.97ff139c.svg"
                    alt=""
                    width="22px"
                    height="22px"
                    style={{ borderRadius: 24 }}
                    onError={(ev) => (ev.currentTarget.style.visibility = 'hidden')}
                  />
                  POLYGON
                </Box>
              </MenuItem>
            </CustomSelect>
          </FormControl>
          <Box width="100%" mt={3}>
            <FormButton onClick={handleWalletConnect}>connect wallet</FormButton>
          </Box>
          <Typography variant="subtitle2" fontWeight="600" color="#ffffff88">
            Minimum Investment $5,000
          </Typography>
          <Box width="100%" mt={1} display="flex" justifyContent="center">
            <Divider>
              <DividerContent>OR</DividerContent>
            </Divider>{' '}
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center" gap="12px" width="100%">
            <Typography variant="subtitle2" fontWeight="bold" fontSize="24px" lineHeight="24px">
              SEND A WIRE
            </Typography>
            <Typography variant="subtitle1" color="#ffffff88">
              FOR INSTRUCTIONS:
            </Typography>
            <Box width="100%" mt={3}>
              <FormButton>INVEST@INKCOIN.COM</FormButton>
            </Box>
            <Typography variant="subtitle2" fontWeight="600" color="#ffffff88">
              Minimum Investment $100k
            </Typography>
          </Box>
        </Box>
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          width="100%"
          alignItems="center"
          justifyContent="center"
          flexGrow={1}
          gap="12px"
        >
          <Typography fontWeight="bold" color="#ffffff88" textAlign="center">
            WHAT CURRENCY WOULD YOU LIKE TO SWAP?
          </Typography>
          <CustomSelect id="tokenSelector" value={currency} onChange={handleCurrencyChange}>
            {chainId &&
              tokensList.map((token, index) => (
                <MenuItem value={index} key={token.address}>
                  <Box width="100%" display="flex" gap={1} justifyContent="flex-start">
                    <img
                      src={token.logoURI}
                      alt={token.symbol}
                      width="22px"
                      height="22px"
                      style={{ borderRadius: 24 }}
                      onError={(ev) => (ev.currentTarget.style.visibility = 'hidden')}
                    />
                    {`${token.name} (${token.symbol})`}
                  </Box>
                </MenuItem>
              ))}
          </CustomSelect>
          <Typography mt={3} fontWeight="bold" color="#ffffff88" textAlign="center">
            HOW MUCH WOULD YOU LIKE TO CONVERT TO INK?
          </Typography>
          <Typography sx={{ color: 'red' }} display={`${Number(USDCAmount) < minAmount ? 'block' : 'none'}`}>
            Please enter a value of minimum $5,000
          </Typography>
          <CustomInputWrapper>
            <Box width="100%" display="flex" justifyContent="center">
              $
              <AmountInput value={USDCAmount.toString()} onChange={handleUSDCAmountChange} thousandSeparator={true} />
            </Box>
            <Typography>/</Typography>
            <Box width="100%" display="flex" gap={1} justifyContent="center">
              {tokensList.length > 0 && (
                <img
                  src={tokensList[currency].logoURI}
                  alt=""
                  width="22px"
                  height="22px"
                  style={{ borderRadius: 24 }}
                />
              )}
              <AmountInput value={tokenAmount.toString()} onChange={handleTokenAmountChange} thousandSeparator={true} />
            </Box>
          </CustomInputWrapper>
          <Box width="100%" mt={1} display="flex" justifyContent="center">
            <Divider sx={{ marginTop: 3, marginBottom: 3 }}>
              <DividerContent sx={{ color: 'white', fontSize: 22, fontWeight: 'bold' }}>=</DividerContent>
            </Divider>{' '}
          </Box>
          <Typography variant="subtitle2" fontWeight="bold" fontSize="14px" lineHeight="14px">
            YOU ARE RESERVING
          </Typography>
          <Box display="flex" flexDirection="column" alignItems="center" gap="12px" width="100%">
            <Box display="flex" alignItems="center" gap={2}>
              <img src={InkIcon} alt="ink" />
              <Typography variant="subtitle2" color="#BAFF31" fontWeight="bold" fontSize="30px" lineHeight="30px">
                {reservedInk.toLocaleString()}
              </Typography>
            </Box>
            <Box width="100%" mt={3}>
              <FormButton onClick={handleClick} disabled={Number(USDCAmount) < minAmount}>
                PREVIEW SWAP
              </FormButton>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

const AmountInput = styled(NumberFormat)`
  background-color: transparent;
  width: 120px;
  font-size: 16px;
  border: none;
  color: white;
  font-family: 'Montserrat';
  font-weight: bold;
  outline: none;
`;

const CustomSelect = styled(Select)`
  border-radius: 15px;
  border: 1px solid #b8b8b8;
  background-color: rgba(255, 255, 255, 0.06);
  padding: 14px;
  width: 100%;
  font-family: 'Montserrat';
  text-align: center;
  color: white;
  font-size: 16px;
  font-weight: bold;
  ::placeholder {
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.15);
  }
  & > div {
    padding: 0;
  }
`;

const CustomInputWrapper = styled('div')`
  display: flex;
  align-items: center;
  border-radius: 15px;
  border: 1px solid #b8b8b8;
  background-color: rgba(255, 255, 255, 0.06);
  padding: 14px;
  width: 100%;
  font-family: 'Montserrat';
  text-align: center;
  color: white;
  font-size: 16px;
  font-weight: bold;
  ::placeholder {
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.15);
  }
  [contenteditable] {
    outline: 0px solid transparent;
  }
`;
