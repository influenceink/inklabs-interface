import { Box, FormControl, MenuItem, Select, styled, Typography } from '@mui/material';
import { useState } from 'react';
import { FormButton, FormTitle, Input, Divider, DividerContent } from '.';
import SushiIcon from '../../../assets/img/sushi.png';
import InkIcon from '../../../assets/img/ink.png';

export const Preview = () => {
  return (
    <>
      <FormTitle>
        RESERVE <br />
        INK
      </FormTitle>
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
        <Typography fontWeight="bold" color="#ffffff88" textAlign="center">
          HOW MUCH WOULD YOU KIKE TO CONVERT TO INK?
        </Typography>
        <Typography variant="subtitle2" fontWeight="bold" fontSize="14px" lineHeight="14px">
          YOU ARE SENDING
        </Typography>
        <Box display="flex" flexDirection="column" alignItems="center" gap="12px" width="100%">
          <Box display="flex" alignItems="center" gap={2}>
            <img src={SushiIcon} alt="sushi" />
            <Typography variant="subtitle2" color="#fff" fontWeight="bold" fontSize="25px" lineHeight="25px">
              1.045
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ marginTop: 3, marginBottom: 3 }} />
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

          <Typography mt={3} fontWeight="bold" color="#ffffff88" textAlign="center">
            WHEN THE CONTRACT GOES LIVE YOU WILL RECIEVE THE INK TOKEN @WALLET
          </Typography>
          <Typography mt={4} fontWeight="bold" color="#ffffff88" textAlign="center">
            WE WILL EMAIL YOU WITH PROJECT AND LAUNCH UPDATES.
          </Typography>
          <Box width="100%" mt={1}>
            <FormButton>confirm</FormButton>
          </Box>
        </Box>
      </Box>
    </>
  );
};
