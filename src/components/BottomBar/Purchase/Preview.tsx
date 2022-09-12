import { Box, FormControl, MenuItem, Select, styled, Typography } from '@mui/material';
import { useState, useContext } from 'react';
import BigNumber from 'bignumber.js';
import { FormButton, FormTitle, Input, Divider, DividerContent } from '.';
import { ContractContext, AuthContext } from '../../../contexts';
import SushiIcon from '../../../assets/img/sushi.png';
import InkIcon from '../../../assets/img/ink.png';

export const Preview = ({ onNext, onPrev, preview }: { onNext: () => void; onPrev: () => void; preview: any }) => {
  const { contracts, getTokenDecimals, tokenApprove } = useContext(ContractContext);
  const { purchase } = useContext(AuthContext);
  const handleClick = async () => {
    if (contracts !== null) {
      const decimals = await getTokenDecimals(preview.token.address);
      if (preview.token.symbol === 'USDC') {
        await tokenApprove(preview.token.address, BigNumber(preview.tokenAmount).times(BigNumber(10).pow(decimals)));
        const tx: any = await contracts['inkpurchase'].send(
          'purchaseForUSDC',
          null,
          BigNumber(preview.tokenAmount).times(BigNumber(10).pow(decimals))
        );
        console.log(
          await purchase({
            transaction_id: tx.transactionHash,
            usd_amount: BigNumber(preview.inkAmount).dividedBy(6.05),
            reserved_ink: preview.inkAmount,
            paid_coin: preview.token.symbol,
            paid_network: 'Metamask',
          })
        );
      } else if (preview.token.symbol === 'WETH') {
        await contracts['inkpurchase'].send('purchaseForETH', {
          value: BigNumber(preview.tokenAmount).times(BigNumber(10).pow(decimals)),
        });
      } else {
        await tokenApprove(preview.token.address, BigNumber(preview.tokenAmount).times(BigNumber(10).pow(decimals)));
        const tx:any = await contracts['inkpurchase'].send(
          'purchaseForToken',
          null,
          preview.token.address,
          BigNumber(preview.tokenAmount).times(BigNumber(10).pow(decimals))
        );
        await purchase({
          transaction_id: tx.transactionHash,
          usd_amount: tx.events.Purchased.returnValues.amount,
          reserved_ink: preview.inkAmount,
          paid_coin: preview.token.symbol,
          paid_network: 'Metamask'
        })
      }
    }
    onNext();
  };
  return (
    <>
      <FormTitle>
        PREVIEW <br />
        SWaP
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
          YOU ARE SENDING
        </Typography>
        <Box display="flex" flexDirection="column" alignItems="center" gap="12px" width="100%">
          <Box display="flex" alignItems="center" gap={2}>
            <img src={SushiIcon} alt="sushi" />
            <Typography variant="subtitle2" color="#fff" fontWeight="bold" fontSize="25px" lineHeight="25px">
              {preview.tokenAmount}
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
              {preview.inkAmount.toFixed(4)}
            </Typography>
          </Box>

          <Typography mt={3} fontWeight="bold" color="#ffffff88" textAlign="center">
            WHEN THE CONTRACT GOES LIVE YOU WILL RECIEVE THE INK TOKEN @WALLET
          </Typography>
          <Typography mt={4} fontWeight="bold" color="#ffffff88" textAlign="center">
            WE WILL EMAIL YOU WITH PROJECT AND LAUNCH UPDATES.
          </Typography>
          <Box width="100%" mt={1}>
            <FormButton onClick={handleClick}>confirm</FormButton>
          </Box>
        </Box>
      </Box>
    </>
  );
};
