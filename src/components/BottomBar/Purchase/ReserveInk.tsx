import { Box, FormControl, MenuItem, Select, styled, Typography } from '@mui/material';
import { useState, useContext } from 'react';
import { FormButton, FormTitle, Input, Divider, DividerContent } from '.';
import { Web3Context } from '../../../contexts';
import SushiIcon from '../../../assets/img/sushi.png';
import InkIcon from '../../../assets/img/ink.png';

export const ReserveInk = () => {
  const [currency, setCurrency] = useState('sushi');
  const { connected, account, connect } = useContext(Web3Context);
  const handleCurrencyChange = (e: any) => {
    setCurrency(e.target.value);
  };
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
            <CustomSelect value={currency} onChange={handleCurrencyChange} displayEmpty>
              <MenuItem value={'shshi'}>
                <Box width="100%" display="flex" gap={1} justifyContent="fles-start">
                  <img src={SushiIcon} alt="sushi" />
                  SUSHI
                </Box>
              </MenuItem>
              <MenuItem value={'cake'}>
                <Box width="100%" display="flex" gap={1} justifyContent="fles-start">
                  <img src={SushiIcon} alt="sushi" />
                  CAKE
                </Box>
              </MenuItem>
              <MenuItem value={'uni'}>
                <Box width="100%" display="flex" gap={1} justifyContent="fles-start">
                  <img src={SushiIcon} alt="sushi" />
                  UNI
                </Box>
              </MenuItem>
            </CustomSelect>
          </FormControl>
          <Typography mt={3} fontWeight="bold" color="#ffffff88" textAlign="center">
            HOW MUCH WOULD YOU KIKE TO CONVERT TO INK?
          </Typography>
          <CustomInputWrapper>
            <Box width="100%" display="flex" justifyContent="center">
              $5,143.00
            </Box>
            <Typography>/</Typography>
            <Box width="100%" display="flex" gap={1} justifyContent="center">
              <img src={SushiIcon} alt="sushi" />
              6.005
            </Box>
          </CustomInputWrapper>
          <Box width="100%" mt={1} display="flex" justifyContent="center">
            <Divider sx={{ marginTop: 3, marginBottom: 3 }}>
              <DividerContent sx={{ fontSize: 22, fontWeight: 'bold' }}>=</DividerContent>
            </Divider>{' '}
          </Box>
          <Typography variant="subtitle2" fontWeight="bold" fontSize="14px" lineHeight="14px">
            YOU ARE RESERVING
          </Typography>
          <Box display="flex" flexDirection="column" alignItems="center" gap="12px" width="100%">
            <Box display="flex" alignItems="center" gap={2}>
              <img src={InkIcon} alt="ink" />
              <Typography variant="subtitle2" color="#BAFF31" fontWeight="bold" fontSize="30px" lineHeight="30px">
                2,674,934
              </Typography>
            </Box>
            <Box width="100%" mt={3}>
              <FormButton>PREVIEW SWAP</FormButton>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

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
`;
