import { Box, Typography, Checkbox, FormControlLabel, Link } from '@mui/material';
import React, { useState, useContext } from 'react';
import { FormButton, FormTitle, Input, Divider, DividerContent } from '.';
import { ContractContext, AuthContext, Web3Context } from '../../../contexts';
import Loading from '../../../assets/img/loading.gif';
import InkIcon from '../../../assets/img/ink.png';
import { TokenLogo } from '../../Logo';
import { tokenToWei } from '../../../utils';

export const Preview = ({ onNext, onPrev, preview }: { onNext: () => void; onPrev: () => void; preview: any }) => {
  const { contracts, getTokenDecimals, tokenApprove } = useContext(ContractContext);
  const { chainId } = useContext(Web3Context);
  const { purchase } = useContext(AuthContext);
  const [loadingStatus, setLoading] = useState<boolean>(false);
  const [accepted, setAccepted] = useState<boolean>(false);
  const [mustAccept, setMustAccept] = useState<boolean>(false);
  const handleClick = async () => {
    if (contracts !== null) {
      if (!accepted) {
        setMustAccept(true);
        setTimeout(() => setMustAccept(false), 3000);
        return;
      }
      setLoading(true);
      const getGovernToken = () => {
        if (chainId === 137 || chainId === 80001) return 'MATIC';
        return 'ETH';
      };
      const decimals = await getTokenDecimals(preview.token.id);
      if (preview.token.symbol === 'USDC') {
        if (await tokenApprove(preview.token.id, tokenToWei(preview.tokenAmount, decimals))) {
          try {
            const tx: any = await contracts['inkpurchase'].send(
              'purchaseForUSDC',
              null,
              tokenToWei(preview.tokenAmount, decimals)
            );
            await purchase({
              transaction_id: tx.transactionHash,
              usd_amount: preview.usdcAmount,
              reserved_ink: preview.inkAmount,
              paid_coin: preview.token.symbol,
              paid_network: 'Metamask',
            });
          } catch (err) {
            console.log(err);
            setLoading(false);
            onPrev();
            return;
          }
        } else {
          setLoading(false);
          onPrev();
          return;
        }
      } else if (preview.token.symbol === getGovernToken()) {
        try {
          const tx: any = await contracts['inkpurchase'].send(
            'purchaseForETH',
            {
              value: tokenToWei(preview.tokenAmount, decimals),
            },
            preview.swapPath
          );
          await purchase({
            transaction_id: tx.transactionHash,
            usd_amount: tx.events.Purchased.returnValues.amount,
            reserved_ink: preview.inkAmount,
            paid_coin: preview.token.symbol,
            paid_network: 'Metamask',
          });
        } catch (err) {
          console.log(err);
          setLoading(false);
          onPrev();
          return;
        }
      } else {
        if (await tokenApprove(preview.token.id, tokenToWei(preview.tokenAmount, decimals))) {
          try {
            const tx: any = await contracts['inkpurchase'].send(
              'purchaseForToken',
              null,
              preview.token.id,
              tokenToWei(preview.tokenAmount, decimals),
              preview.swapPath //Web3.utils.toUtf8(preview.swapPath)
            );
            await purchase({
              transaction_id: tx.transactionHash,
              usd_amount: tx.events.Purchased.returnValues.amount,
              reserved_ink: preview.inkAmount,
              paid_coin: preview.token.symbol,
              paid_network: 'Metamask',
            });
          } catch (err) {
            console.log(err);
            setLoading(false);
            onPrev();
            return;
          }
        } else {
          setLoading(false);
          onPrev();
          return;
        }
      }
      setLoading(false);
    }
    onNext();
  };

  const handleAcceptChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setAccepted(ev.target.checked);
    setMustAccept(false);
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
          <Box
            display="flex"
            alignItems="center"
            gap={1}
            sx={{ textTransform: 'uppercase' }}
            fontWeight="bold"
            fontSize="20px"
          >
            <TokenLogo token={preview.token} />
            <Typography variant="subtitle2" color="#fff" fontWeight="bold" fontSize="25px" lineHeight="25px">
              {Number(preview.tokenAmount).toLocaleString()}
            </Typography>
            {preview.token.symbol}
          </Box>
        </Box>
        <Divider sx={{ marginTop: 3, marginBottom: 3 }} />
        <Typography variant="subtitle2" fontWeight="bold" fontSize="14px" lineHeight="14px">
          YOU ARE RESERVING
        </Typography>
        <Box display="flex" flexDirection="column" alignItems="center" gap="12px" width="100%">
          <Box display="flex" alignItems="center" gap={2} fontWeight="bold" fontSize="24px">
            <img src={InkIcon} alt="ink" width="85px" />
            <Typography variant="subtitle2" color="#BAFF31" fontWeight="bold" fontSize="30px" lineHeight="30px">
              {preview.inkAmount.toLocaleString()}
            </Typography>
            INK
          </Box>

          <Typography mt={3} fontWeight="bold" color="#ffffff88" textAlign="center">
            WHEN THE TOKEN CONTRACT GOES LIVE YOU WILL BE ABLE TO CLAIM YOUR INK TOKEN USING THIS WALLET
          </Typography>
          <Typography mt={4} fontWeight="bold" color="#ffffff88" textAlign="center">
            WE WILL EMAIL YOU WITH PROJECT AND LAUNCH UPDATES.
          </Typography>
          <FormControlLabel 
            control={<Checkbox checked={accepted} onChange={handleAcceptChange}/>} 
            label={<div>Accept&nbsp;<Link href="/terms" target='_blank' sx={{ color: 'white', ':hover': { color: '#ff225e' } }}>Terms</Link></div>} 
          />
          <Typography sx={{ color: 'red' }} display={`${mustAccept ? 'block' : 'none'}`}>
            You must accept Terms before entering.
          </Typography>
          <Box width="100%" mt={1}>
            <FormButton onClick={handleClick} disabled={loadingStatus}>
              confirm
              {loadingStatus && <img src={Loading} alt="" width="22px" height="22px" style={{ marginLeft: '10px' }} />}
            </FormButton>
          </Box>
        </Box>
      </Box>
    </>
  );
};
