import { Typography, Box } from '@mui/material';

export const Copyright = () => {
  return (
    <>
      <Box zIndex={10} mb={3}>
        <Typography fontSize={8}>© 2022 INK Games™. All Rights Reserved.</Typography>
        <Typography fontSize={8} mt={1}>
          Reproduction without permission is prohibited.
        </Typography>
      </Box>
    </>
  );
};
