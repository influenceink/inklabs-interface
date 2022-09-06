import { Box, FormControl, MenuItem, Select, styled, Typography } from '@mui/material';
import { useState, useContext, createRef, ChangeEvent, useEffect, useCallback } from 'react';
import NumberFormat from 'react-number-format';
import BigNumber from 'bignumber.js';
import { FormButton, FormTitle, Divider, DividerContent } from '.';
import { ContractContext, Web3Context } from '../../../contexts';
import SushiIcon from '../../../assets/img/sushi.png';
import InkIcon from '../../../assets/img/ink.png';
import { getTopTokensList } from '../../../utils';
import { USDC_ADDRESS } from '../../../utils/constants';

export const ReserveInk = ({ onNext, onPrev }: { onNext: Function; onPrev: () => void }) => {
  const [tokenAmount, setTokenAmount] = useState<number>(0);
  const { contracts, getTokenDecimals } = useContext(ContractContext);
  const { account, connected, connect, chainId } = useContext(Web3Context);
  const [currency, setCurrency] = useState<number>(0);
  const [tokensList, setTokensList] = useState<Array<any>>([]);
  const [tokenDecimals, setTokenDecimals] = useState<number>(18);
  const [usdcAddr, setUsdcAddr] = useState<string>(USDC_ADDRESS[1]);
  const [reservedInk, setReservedInk] = useState<BigNumber>(BigNumber(0));
  const handleCurrencyChange = async (e: any) => {
    setCurrency(e.target.value);
    setTokenDecimals(await getTokenDecimals(tokensList[e.target.value].address));
  };
  const handleClick = () => {
    onNext({ tokenAmount, token: tokensList[currency], inkAmount: reservedInk });
  };
  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const amount = ev.target.value.replaceAll(',', '');
    setTokenAmount(Number(amount));
  };
  useEffect(() => {
    const topTokensWrapper = async () => {
      setTokensList(await getTopTokensList(chainId || 4));
    };
    if (connected && chainId) {
      topTokensWrapper();
      setUsdcAddr(USDC_ADDRESS[chainId]);
    }
  }, [connected, chainId]);
  useEffect(() => {
    if (connected && tokenAmount && contracts && usdcAddr !== tokensList[currency].address) {
      contracts.quoter
        .call(
          'quoteExactInputSingle',
          tokensList[currency].address,
          usdcAddr,
          3000,
          BigNumber(tokenAmount).times(BigNumber(10).pow(tokenDecimals)),
          0
        )
        .then((res: any) => {
          setReservedInk(BigNumber(res).times(BigNumber(6.05)).dividedBy(1000000));
        });
    }
    if (connected && tokenAmount && usdcAddr === tokensList[currency].address) {
      setReservedInk(BigNumber(tokenAmount).times(BigNumber(6.05)));
    }
    if (tokenAmount === 0) setReservedInk(BigNumber(0));
  }, [currency, contracts, connected, tokenAmount, usdcAddr, tokenDecimals]);
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
            HOW MUCH WOULD YOU KIKE TO CONVERT TO INK?
          </Typography>
          <CustomInputWrapper>
            <Box width="100%" display="flex" justifyContent="center">
              <AmountInput value={tokenAmount} onChange={handleChange} thousandSeparator={true} />
            </Box>
            <Typography>/</Typography>
            <Box width="100%" display="flex" gap={1} justifyContent="center">
              <img src={SushiIcon} alt="sushi" />
              6.005
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
                {reservedInk.toFixed(4)}
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
