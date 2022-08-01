import { Box, FormControl, MenuItem, Select, styled, Typography } from '@mui/material';
import { useState } from 'react';
import { FormButton, FormTitle, Input, Divider, DividerContent } from '.';
import SushiIcon from '../../../assets/img/sushi.png';
import InkIcon from '../../../assets/img/ink.png';

export const Complete = () => {
  return (
    <>
      <FormTitle>
        SWaP <br />
        COMPLETE
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
        <Typography variant="subtitle2" fontWeight="bold" fontSize="14px" lineHeight="14px">
          RESERVED INK TOKEN TOTAL
        </Typography>
        <Box display="flex" flexDirection="column" alignItems="center" gap="12px" width="100%">
          <Box display="flex" alignItems="center" gap={2}>
            <img src={InkIcon} alt="ink" />
            <Typography variant="subtitle2" color="#BAFF31" fontWeight="bold" fontSize="30px" lineHeight="30px">
              2,674,934
            </Typography>
          </Box>
          <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
          <Typography fontWeight="bold" color="#ffffff88" textAlign="center">
            CONGRATS @SKYBURN!
            <br />
            YOUR TOKENS ARE NOW RESERVED.
          </Typography>
          <Typography my={1} fontWeight="bold" color="#ffffff88" textAlign="center">
            CHECK YOUR EMAIL FOR UPDATES AND DETAILS.
          </Typography>
          <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
          <Typography mb={2} fontWeight="bold" color="#ffffff88" textAlign="center">
            WHATS NEXT?
          </Typography>
          <Box width="100%">
            <FormButton>visit our faq&lsquo;s</FormButton>
          </Box>
        </Box>
      </Box>
    </>
  );
};
