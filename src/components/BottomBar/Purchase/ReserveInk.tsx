import { Box, FormControl, MenuItem, Select, styled, Typography } from '@mui/material';
import { useState, useContext, useEffect, useCallback, useRef } from 'react';
import NumberFormat from 'react-number-format';
import { FormButton, FormTitle, Divider, DividerContent } from '.';
import { ContractContext, Web3Context } from '../../../contexts';
import InkIcon from '../../../assets/img/ink.png';
import { SUPPORTED_NETWORKS } from '../../../utils/constants';
import { useTopTokenDatas } from '../../../data/topTokens';
import { TokenLogo } from '../../Logo';
import { SwapRouter } from '../../../data/swap-router';
import { formPath } from '../../../utils';
import Loading from '../../../assets/img/loading.gif';

export const ReserveInk = ({ onNext, onPrev }: { onNext: Function; onPrev: () => void }) => {
  const { contracts, getTokenDecimals } = useContext(ContractContext);
  const { account, connected, connect, chainId, switchNetwork } = useContext(Web3Context);
  const [currency, setCurrency] = useState<number>(0);
  const [network, setNetwork] = useState<string>(SUPPORTED_NETWORKS[0].name);
  const [USDCAmount, setUSDCAmount] = useState<string>('0');
  const [tokenAmount, setTokenAmount] = useState<string>('0');
  const [reservedInk, setReservedInk] = useState<number>(0);
  const { tokenDatas: tokensList } = useTopTokenDatas();
  const [fetchingPath, setFetchingPath] = useState<boolean>(false);
  const [swapPath, setSwapPath] = useState<string>('');
  const timer = useRef<number>();

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
    const _USDCAmount = ev.target.value
      .replaceAll(',', '')
      .replaceAll('$', '')
      .replaceAll(' ', '')
      .replaceAll('USD', '')
      .replaceAll(' ', '');
    if (Number(USDCAmount) === Number(_USDCAmount)) return;
    setUSDCAmount(_USDCAmount);
    const quoterWrapper = async () => {
      if (contracts !== null && Number(_USDCAmount) !== 0) {
        clearTimeout(timer.current);
        timer.current = window.setTimeout(async () => {
          setFetchingPath(true);
          const tokenDecimals = await getTokenDecimals(tokensList![currency].id);
          const route = await SwapRouter(
            chainId!,
            { decimals: Number(tokenDecimals), ...tokensList![currency] },
            { decimals: 6, ...tokensList![0] },
            _USDCAmount,
            1
          );
          const _path = formPath(route);
          if (_path !== null) {
            setSwapPath(_path);
            setTokenAmount(route!.quote.toExact());
          }
          setFetchingPath(false);
        }, 600);
      }
    };
    if (currency === 0) setTokenAmount(_USDCAmount);
    else quoterWrapper();
  };
  const handleTokenAmountChange = (ev: any) => {
    setTokenAmount(ev.target.value.replaceAll(',', ''));
    const _tokenAmount = ev.target.value.replaceAll(',', '');
    if (Number(_tokenAmount) === 0) {
      setUSDCAmount('0');
    } else if (tokensList![currency].symbol === 'USDC') {
      setUSDCAmount(_tokenAmount);
    } else if (Number(_tokenAmount) !== Number(tokenAmount)) {
      const quoterWrapper = async () => {
        if (contracts !== null) {
          clearTimeout(timer.current);
          timer.current = window.setTimeout(async () => {
            setFetchingPath(true);
            const tokenDecimals = await getTokenDecimals(tokensList![currency].id);
            const route = await SwapRouter(
              chainId!,
              { decimals: Number(tokenDecimals), ...tokensList![currency] },
              { decimals: 6, ...tokensList![0] },
              Number(_tokenAmount),
              0
            );
            const _path = formPath(route);
            if (_path !== null) {
              setSwapPath(_path);
              setUSDCAmount(route!.quote.toExact());
            }
            setFetchingPath(false);
          }, 600);
        }
      };
      quoterWrapper();
    }
  };
  const handleClick = () => {
    onNext({ tokenAmount, token: tokensList![currency], inkAmount: reservedInk, usdcAmount: USDCAmount, swapPath });
  };
  const handleNetworkChange = (ev: any) => {
    setNetwork(ev.target.value);
  };
  const handleWalletConnect = async () => {
    if ((await connect!()) && !chainValidation()) {
      const reservedChain = SUPPORTED_NETWORKS.find((value) => value.name === network && value.enabled === true)
        ?.chainId;
      await switchNetwork(reservedChain);
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
            $0.002 USD / INK
          </Typography>
          <FormControl sx={{ width: '100%' }}>
            <CustomSelect
              id="networkSelector"
              defaultValue={SUPPORTED_NETWORKS.find((network) => network.enabled === true)!.name}
              value={network}
              onChange={handleNetworkChange}
            >
              {SUPPORTED_NETWORKS.filter((network) => network.enabled === true).map((network) => (
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
              Minimum amount ${Number(process.env.REACT_APP_MIN_AMOUNT || '5000').toLocaleString()} USD
              Minimum amount ${Number(process.env.REACT_APP_MIN_AMOUNT || '5000').toLocaleString()} USD
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
            <Typography align="center" variant="subtitle1" color="#ffffff88">
              TO INQUIRE ABOUT WIRE TRANSFERS AND OTHER METHODS OF PAYMENT EMAIL US AT:
            </Typography>
            <Box width="100%" mt={3} display="flex" flexDirection="column" alignItems="center">
              <FormButton>
                <Link href="mailto: support@inktoken.com">support@inktoken.com</Link>
              </FormButton>
              <Typography variant="subtitle2" fontWeight="600" color="#ffffff88" mt={2}>
                Minimum wire amount $50k USD
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
          <CustomSelect id="tokenSelector" value={currency} onChange={handleCurrencyChange} disabled={fetchingPath}>
            {tokensList &&
              tokensList.length > 0 &&
              tokensList!.map((token, index) => (
                <MenuItem value={index} key={token.id}>
                  <Box width="100%" display="flex" gap={1} justifyContent="flex-start">
                    <TokenLogo token={token} />
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
              display={`${Number(USDCAmount) < Number(process.env.REACT_APP_MIN_AMOUNT || '5000') ? 'block' : 'none'}`}
            >
              Please enter a value of minimum ${Number(process.env.REACT_APP_MIN_AMOUNT || '5000').toLocaleString()} USD
            </Typography>
          </Box>
          <CustomInputWrapper>
            <Box width="100%" display="flex" justifyContent="center" alignItems="center" gap={1}>
              $
              <AmountInput
                value={Number(USDCAmount).toFixed(3)}
                onChange={handleUSDCAmountChange}
                thousandSeparator={true}
                suffix=" USD"
              />
            </Box>
            <Typography>/</Typography>
            <Box width="100%" display="flex" gap={1} justifyContent="center" alignItems="center">
              {tokensList && tokensList.length > 0 && <TokenLogo token={tokensList![currency]} />}
              <AmountInput
                value={Number(tokenAmount).toFixed(3)}
                onChange={handleTokenAmountChange}
                thousandSeparator={true}
              />
            </Box>
          </CustomInputWrapper>
          {fetchingPath && (
            <Box display="flex" alignItems="center">
              <img src={Loading} alt="" width="22px" height="22px" style={{ marginRight: '10px' }} />
              Fetching best price...
            </Box>
          )}
          <Box width="100%" mt={1} display="flex" justifyContent="center">
            <Divider sx={{ marginTop: 3, marginBottom: 3 }}>
              <DividerContent sx={{ color: 'white', fontSize: 22, fontWeight: 'bold' }}>=</DividerContent>
            </Divider>{' '}
          </Box>
          <Typography variant="subtitle2" fontWeight="bold" fontSize="14px" lineHeight="14px">
            YOU ARE RESERVING
          </Typography>
          <Box display="flex" flexDirection="column" alignItems="center" gap="12px" width="100%">
            <Box display="flex" alignItems="center" gap={2} fontWeight="bold" fontSize="24px">
              <img src={InkIcon} alt="ink" width="45px" />
              <Typography variant="subtitle2" color="#BAFF31" fontWeight="bold" fontSize="30px" lineHeight="30px">
                {reservedInk.toLocaleString()}
              </Typography>
              INK
            </Box>
            <Box width="100%" mt={3}>
              <FormButton
                onClick={handleClick}
                disabled={Number(USDCAmount) < Number(process.env.REACT_APP_MIN_AMOUNT || '5000') || fetchingPath}
              >
                PREVIEW SWAP
              </FormButton>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

const Link = styled('a')`
  text-decoration: none;
  color: white;
`;

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
