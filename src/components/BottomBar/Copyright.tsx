import { Typography, Box, useMediaQuery } from '@mui/material';

export const Copyright = () => {
  const sm = useMediaQuery('(max-width: 660px)');
  return (
    <>
      <Box zIndex={10} mb={3} width={sm ? '110px' : 'auto'}>
        <Typography fontSize={sm ? 6 : 8}>© 2022 INK Games™. All Rights Reserved.</Typography>
        <Typography fontSize={sm ? 6 : 8} mt={sm ? 0 : 1}>
          Reproduction without permission is prohibited.
        </Typography>
      </Box>
    </>
  );
};
