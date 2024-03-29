import { Typography, Box, useMediaQuery } from '@mui/material';
export const Copyright = () => {
  const sm = useMediaQuery('(max-width: 660px)');
  return (
    <>
      <Box display="flex" gap={2} mb={sm ? 0 : 3} alignItems="center" width={sm ? '100%' : 'auto'} zIndex={sm ? 2 : 0}>
        {/* {!sm && <img height="70px" src={cursor} alt="favicon" />} */}
        <Box display="flex" flexDirection="column" width={sm ? '100%' : 'auto'}>
          <Typography
            bgcolor={sm ? 'black' : 'none'}
            py={sm ? '4px' : 0}
            textAlign={sm ? 'center' : 'left'}
            variant="caption"
            color="GrayText"
          >
            © 2022 INK Games™. All Rights Reserved.
          </Typography>
          {!sm && (
            <Typography variant="caption" mt={sm ? 0 : 1} color="GrayText">
              Reproduction without permission is prohibited.
            </Typography>
          )}
        </Box>
      </Box>
    </>
  );
};
