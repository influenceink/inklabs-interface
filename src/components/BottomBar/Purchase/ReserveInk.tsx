import { Box, FormControl, MenuItem, Select, styled, Typography } from '@mui/material';
import { useState, useContext, createRef, ChangeEvent, useEffect, useCallback } from 'react';
import NumberFormat from 'react-number-format';
import BigNumber from 'bignumber.js';
import { FormButton, FormTitle, Divider, DividerContent } from '.';
import { ContractContext, Web3Context } from '../../../contexts';
import InkIcon from '../../../assets/img/ink.png';
import { getTopTokensList } from '../../../utils';
import { SUPPORTED_NETWORKS } from '../../../utils/constants';
import { useTopTokenDatas } from '../../../data/topTokens';
import { TokenLogo } from '../../Logo';

export const ReserveInk = ({ onNext, onPrev }: { onNext: Function; onPrev: () => void }) => {
  const { contracts, getTokenDecimals } = useContext(ContractContext);
  const { account, connected, connect, chainId, switchNetwork } = useContext(Web3Context);
  const [currency, setCurrency] = useState<number>(0);
  const [network, setNetwork] = useState<string>(SUPPORTED_NETWORKS[0].name);
  const [USDCAmount, setUSDCAmount] = useState<string>('0');
  const [tokenAmount, setTokenAmount] = useState<string>('0');
  const [reservedInk, setReservedInk] = useState<number>(0);
  const [tokenDecimals, setTokenDecimals] = useState<number>(18);
  const { loading, error, tokenDatas: tokensList } = useTopTokenDatas();

  // Validate chainId
  const chainValidation = useCallback(() => {
    const reservedChain = SUPPORTED_NETWORKS.find((value) => value.name === network)?.chainId;
    return chainId === reservedChain;
  }, [chainId, network]);

  // Action handlers
  const handleCurrencyChange = (ev: any) => {
    setCurrency(Number(ev.target.value));
  };
  const handleUSDCAmountChange = (ev: any) => {
    const USDCAmount = ev.target.value.replaceAll(',', '').replaceAll('$', '').replaceAll(' ', '');
    setUSDCAmount(USDCAmount);
    const quoterWrapper = async () => {
      if (contracts !== null && Number(USDCAmount) !== 0)
        contracts.quoter
          .call(
            'quoteExactOutputSingle',
            tokensList![currency].id,
            tokensList![0].id,
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
  const handleTokenAmountChange = (ev: any) => {
    setTokenAmount(ev.target.value.replaceAll(',', ''));
    const tokenAmount = ev.target.value.replaceAll(',', '');
    if (Number(tokenAmount) === 0) {
      setUSDCAmount('0');
    } else if (tokensList![currency].symbol === 'USDC') {
      setUSDCAmount(tokenAmount);
    } else {
      const quoterWrapper = async () => {
        if (contracts !== null) {
          const tokenDecimals = await getTokenDecimals(tokensList![currency].id);
          setTokenDecimals(tokenDecimals);
          contracts.quoter
            .call(
              'quoteExactInputSingle',
              tokensList![currency].id,
              tokensList![0].id,
              3000,
              new BigNumber(tokenAmount).times(new BigNumber(10).pow(tokenDecimals)).toString(),
              0
            )
            .then((res: any) => {
              setUSDCAmount(new BigNumber(res).dividedBy(1000000).toFixed(3));
            });
        }
      };
      quoterWrapper();
    }
  };
  const handleClick = () => {
    onNext({ tokenAmount, token: tokensList![currency], inkAmount: reservedInk, usdcAmount: USDCAmount });
  };
  const handleNetworkChange = (ev: any) => {
    setNetwork(ev.target.value);
  };
  const handleWalletConnect = async () => {
    await connect!();
    if (!chainValidation()) {
      const reservedChain = SUPPORTED_NETWORKS.find((value) => value.name === network)?.chainId;
      switchNetwork(reservedChain);
    }
  };

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
            <CustomSelect
              id="networkSelector"
              defaultValue={SUPPORTED_NETWORKS[0].name}
              value={network}
              onChange={handleNetworkChange}
            >
              {SUPPORTED_NETWORKS.map((network) => (
                <MenuItem value={network.name} key={network.name}>
                  <Box display="flex" alignItems="center" gap={1} sx={{ textTransform: 'uppercase' }}>
                    <img
                      src={network.logoURI}
                      alt=""
                      width="22px"
                      height="22px"
                      style={{ borderRadius: 24 }}
                      onError={(ev) => (ev.currentTarget.style.visibility = 'hidden')}
                    />
                    {network.name}
                  </Box>
                </MenuItem>
              ))}
            </CustomSelect>
          </FormControl>
          <Box width="100%" mt={3} display="flex" flexDirection="column" alignItems="center">
            <FormButton onClick={handleWalletConnect}>connect wallet</FormButton>
            <Typography variant="subtitle2" fontWeight="600" color="#ffffff88" mt={2}>
              Minimum Investment $5,000
            </Typography>
          </Box>
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
            <Box width="100%" mt={3} display="flex" flexDirection="column" alignItems="center">
              <FormButton>INVEST@INKCOIN.COM</FormButton>
              <Typography variant="subtitle2" fontWeight="600" color="#ffffff88" mt={2}>
                Minimum Investment $100k
              </Typography>
            </Box>
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
            {tokensList &&
              tokensList.length > 0 &&
              tokensList!.map((token, index) => (
                <MenuItem value={index} key={token.id}>
                  <Box width="100%" display="flex" gap={1} justifyContent="flex-start">
                    <TokenLogo address={token.id} symbol={token.symbol} />
                    {`${token.name} (${token.symbol})`}
                  </Box>
                </MenuItem>
              ))}
          </CustomSelect>
          <Box textAlign="center">
            <Typography mt={3} fontWeight="bold" color="#ffffff88" textAlign="center">
              HOW MUCH WOULD YOU LIKE TO CONVERT TO INK?
            </Typography>
            <Typography
              sx={{ color: 'red' }}
              fontWeight="300"
              display={`${Number(USDCAmount) < 5000 ? 'block' : 'none'}`}
            >
              Please enter a value of minimum $5,000
            </Typography>
          </Box>
          <CustomInputWrapper>
            <Box width="100%" display="flex" justifyContent="center">
              $
              <AmountInput value={USDCAmount.toString()} onChange={handleUSDCAmountChange} thousandSeparator={true} />
            </Box>
            <Typography>/</Typography>
            <Box width="100%" display="flex" gap={1} justifyContent="center">
              {tokensList && tokensList.length > 0 && (
                <TokenLogo address={tokensList![currency].id} symbol={tokensList![currency].symbol} />
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
              <FormButton onClick={handleClick} disabled={Number(USDCAmount) < 1}>
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
