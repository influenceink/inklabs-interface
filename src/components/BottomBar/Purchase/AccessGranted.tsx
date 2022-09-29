import { Box, Typography } from '@mui/material';
import { useContext, createRef, useEffect } from 'react';
import { AuthContext } from '../../../contexts';
import { FormButton, FormTitle, Input, Divider } from '.';

export const AccessGranted = ({ onNext, onPrev }: { onNext: () => void; onPrev: () => void }) => {
  const { inkId } = useContext(AuthContext);
  const idRef = createRef<HTMLElement>();
  const handleClick = () => {
    onNext();
  };
  useEffect(() => {
    if (idRef.current && (idRef.current?.parentElement?.clientWidth as number) < (idRef.current?.clientWidth as number))
      idRef.current.style.scale = (
        (idRef.current?.parentElement?.clientWidth as number) / (idRef.current?.clientWidth as number)
      ).toString();
  }, [inkId, idRef]);
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
          <Typography ref={idRef} variant="subtitle2" fontWeight="semibold" fontSize="36px" lineHeight="36px">
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
