import { Typography, Box, useMediaQuery } from '@mui/material';
export const Copyright = () => {
  const sm = useMediaQuery('(max-width: 660px)');
  return (
    <>
      <Box display="flex" gap={2} mb={3} alignItems="center">
        {/* {!sm && <img height="70px" src={cursor} alt="favicon" />} */}
        <Box display="flex" flexDirection="column" width={sm ? '110px' : 'auto'}>
          <Typography variant="caption">© 2022 INK Games™. All Rights Reserved.</Typography>
          <Typography variant="caption" mt={sm ? 0 : 1}>
            Reproduction without permission is prohibited.
          </Typography>
        </Box>
      </Box>
    </>
  );
};
