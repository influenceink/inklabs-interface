import { Box, Typography } from '@mui/material';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts';
import { FormButton, FormTitle, Input, Divider } from '.';

export const AccessGranted = ({ onNext, onPrev }: { onNext: () => void; onPrev: () => void }) => {
  const { inkId } = useContext(AuthContext);
  const handleClick = () => {
    onNext();
  };
  return (
    <>
      <FormTitle>
        aCCESS <br />
        GRaNTED
      </FormTitle>
      <Box
        display="flex"
        flexDirection="column"
        width="100%"
        alignItems="center"
        justifyContent="center"
        flexGrow={1}
        gap="24px"
      >
        <Divider />
        <Box my={8} display="flex" flexDirection="column" alignItems="center" gap="4px" width="100%">
          <Typography variant="subtitle1" color="#ffffff88">
            YOUR USERNAME/INK ID
          </Typography>
          <Typography variant="subtitle2" fontWeight="semibold" fontSize="36px" lineHeight="36px">
            @{inkId}
          </Typography>
          <Box width="100%" mt={3}>
            <FormButton onClick={handleClick}>enter</FormButton>
          </Box>
        </Box>
        <Divider />
      </Box>
    </>
  );
};
