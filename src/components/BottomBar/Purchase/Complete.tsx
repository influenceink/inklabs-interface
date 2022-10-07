import { Box, Typography } from '@mui/material';
import { FormButton, FormTitle, Divider } from '.';
import InkIcon from '../../../assets/img/ink.png';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts';

export const Complete = ({ preview, onPrev }: { preview: any; onPrev: () => void }) => {
  const history = useHistory();
  const { inkId } = useContext(AuthContext);
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
          <Box display="flex" alignItems="center" gap={2} fontWeight="bold" fontSize="24px">
            <img src={InkIcon} alt="ink" width="85px" />
            <Typography variant="subtitle2" color="#BAFF31" fontWeight="bold" fontSize="30px" lineHeight="30px">
              {preview.inkAmount.toLocaleString()}
            </Typography>
            INK
          </Box>
          <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
          <Typography fontWeight="bold" color="#ffffff88" textAlign="center">
            CONGRATS @{inkId}!
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
            <FormButton onClick={() => history.push('/profile')}>my profile</FormButton>
          </Box>
        </Box>
      </Box>
    </>
  );
};
