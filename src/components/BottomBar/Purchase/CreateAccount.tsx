import { Box, Typography } from '@mui/material';
import { FormButton, FormTitle, Input, Divider } from '.';

export const CreateAccount = ({ onNext, onPrev }: { onNext: () => void; onPrev: () => void }) => {
  const handleClick = () => {
    onNext();
  };
  return (
    <>
      <FormTitle>
        CREaTE <br />
        aCCOUNT
      </FormTitle>
      <Box
        display="flex"
        flexDirection="column"
        width="100%"
        alignItems="center"
        justifyContent="center"
        flexGrow={1}
        gap="15px"
      >
        <Divider />
        <Box my={8} display="flex" flexDirection="column" alignItems="center" gap="20px" width="100%">
          <Typography variant="subtitle2" fontWeight="bold" fontSize={16}>
            Who Sent You?
          </Typography>
          <Input placeholder="enter ink id" />
          <FormButton onClick={handleClick}>enter</FormButton>
        </Box>
        <Divider />
        <Typography variant="subtitle2" fontWeight="bold" py={0} mt={2}>
          ALREADY HAVE AN INK ID?
        </Typography>
        <Typography variant="subtitle1" color="#2984FF">
          Sign-in
        </Typography>
      </Box>
    </>
  );
};
