import { Box, Typography } from '@mui/material';
import React, { useState, useContext } from 'react';
import { FormButton, FormTitle, Input, Divider } from '.';
import { AuthContext } from '../../../contexts';
import { passwordToHash } from '../../../utils';

export const SignIn = ({ onPrev }: { onPrev: () => void }) => {
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorEmitted, setErrorEmitted] = useState<boolean>(false);
  const handleClick = async () => {
    if (!(await signIn(email, passwordToHash(password)))) {
      setErrorEmitted(true);
      setTimeout(() => setErrorEmitted(false), 3000);
    }
  };
  const handleEmailChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(ev.target.value);
  };
  const handlePasswordChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(ev.target.value);
  };
  return (
    <>
      <FormTitle>SIGN IN</FormTitle>
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
          <Input placeholder="Email" value={email} onChange={handleEmailChange} />
          <Input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
          <FormButton onClick={handleClick}>Sign In</FormButton>
          <Typography sx={{ color: 'red' }} display={`${errorEmitted ? 'block' : 'none'}`}>
            Email or password must be wrong.
          </Typography>
        </Box>
        <Divider />
        <Typography variant="subtitle2" fontWeight="bold" py={0} mt={2}>
          Not account yet?
        </Typography>
        <Typography
          variant="subtitle1"
          color="#2984FF"
          sx={{ cursor: 'pointer', ':hover': { textDecoration: 'underline' } }}
          onClick={onPrev}
        >
          Sign-up
        </Typography>
      </Box>
    </>
  );
};
