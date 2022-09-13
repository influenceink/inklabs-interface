import { Box, FormControl, MenuItem, Select, styled, Typography } from '@mui/material';
import { useState, useContext, createRef, ChangeEvent, useEffect, useCallback } from 'react';
import NumberFormat from 'react-number-format';
import BigNumber from 'bignumber.js';
import { FormButton, FormTitle, Divider, DividerContent } from '.';
import { ContractContext, Web3Context } from '../../../contexts';
import InkIcon from '../../../assets/img/ink.png';
import { getTopTokensList } from '../../../utils';

export const ReserveInk = ({ onNext, onPrev }: { onNext: Function; onPrev: () => void }) => {
  const { contracts, getTokenDecimals } = useContext(ContractContext);
  const { account, connected, connect, chainId } = useContext(Web3Context);
  const [currency, setCurrency] = useState<number>(0);
  const handleCurrencyChange = (ev: any) => {
    setCurrency(Number(ev.target.value));
  };
  const [tokensList, setTokensList] = useState<Array<any>>([]);
  useEffect(() => {
    const topTokensListWrapper = async () => {
      setTokensList(await getTopTokensList(chainId || 1));
    };
    if (connected) topTokensListWrapper();
  }, [chainId, connected]);
  const [USDCAmount, setUSDCAmount] = useState<string>('0');
  const handleUSDCChange = (ev: any) => {
    const USDCAmount = ev.target.value.replaceAll(',', '').replaceAll('$', '').replaceAll(' ', '');
    setUSDCAmount(USDCAmount);
    const quoterWrapper = async () => {
      if (contracts !== null)
        contracts.quoter
          .call(
            'quoteExactInputSingle',
            tokensList[0].address,
            tokensList[currency].address,
            3000,
            BigNumber(USDCAmount).times(BigNumber(10).pow(6)),
            0
          )
          .then((res: any) => {
            setTokenAmount(BigNumber(res).dividedBy(BigNumber(10).pow(tokenDecimals)).toFixed(3));
          });
    };
    if (currency === 0) setTokenAmount(ev.target.value.replaceAll(',', ''));
    else quoterWrapper();
  };
  const [tokenAmount, setTokenAmount] = useState<string>('0');
  const handleTokenChange = (ev: any) => {
    setTokenAmount(ev.target.value);
  };
  const [reservedInk, setReservedInk] = useState<number>(0);
  const handleClick = () => {
    onNext({ tokenAmount, token: tokensList[currency], inkAmount: reservedInk, usdcAmount: USDCAmount });
  };
  const [tokenDecimals, setTokenDecimals] = useState<number>(18);
  useEffect(() => {
    if (tokensList.length > 0 && contracts !== null) {
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
              BigNumber(tokenAmount).times(BigNumber(10).pow(tokenDecimals)),
              0
            )
            .then((res: any) => {
              setUSDCAmount(BigNumber(res).dividedBy(1000000).toFixed(3));
            });
        };
        quoterWrapper();
      }
    }
  }, [currency, tokenAmount, tokensList, contracts, getTokenDecimals]);
  useEffect(() => {
    console.log(USDCAmount);
    setReservedInk(Number(USDCAmount) * 3);
  }, [USDCAmount]);
  return (
    <>
      <FormTitle>
        RESERVE <br />
        INK
      </FormTitle>
      {account === null && connected === false ? (
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
          <Box width="100%" mt={3}>
            <FormButton onClick={() => connect!()}>connect wallet</FormButton>
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
          <FormControl sx={{ width: '100%' }}>
            <CustomSelect value={currency} onChange={handleCurrencyChange}>
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
          </FormControl>
          <Typography mt={3} fontWeight="bold" color="#ffffff88" textAlign="center">
            HOW MUCH WOULD YOU LIKE TO CONVERT TO INK?
          </Typography>
          <CustomInputWrapper>
            <Box width="100%" display="flex" justifyContent="center">
              <AmountInput
                value={USDCAmount.toString()}
                onChange={handleUSDCChange}
                thousandSeparator={true}
                prefix="$  "
              />
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
              <AmountInput value={tokenAmount.toString()} onChange={handleTokenChange} thousandSeparator={true} />
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
              <FormButton onClick={handleClick}>PREVIEW SWAP</FormButton>
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
