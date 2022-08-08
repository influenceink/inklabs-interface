import { Box, Typography } from '@mui/material';
import { FormButton, FormTitle, Input, Divider } from '.';

export const CreateId = ({ onNext }: { onNext: () => void }) => {
  const handleClick = () => {
    onNext();
  };
  return (
    <>
      <FormTitle>
        CREaTE <br />
        INK ID
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
        <Typography variant="subtitle2" fontWeight="bold">
          Enter Your Desired INK ID
        </Typography>
        <Input placeholder="username" />
        <Divider />
        <Input placeholder="first name" />
        <Input placeholder="last name" />
        <Input placeholder="email" />
        <Input type="password" placeholder="password" />
        <Input type="password" placeholder="confirm password" />
        <Box my={1} width="100%">
          <FormButton onClick={handleClick}>create ink id</FormButton>
        </Box>
        <Typography variant="subtitle2" fontWeight="bold" py={0}>
          ALREADY HAVE AN INK ID?
        </Typography>
        <Typography variant="subtitle1" color="#2984FF">
          Sign-in
        </Typography>
      </Box>
    </>
  );
};
