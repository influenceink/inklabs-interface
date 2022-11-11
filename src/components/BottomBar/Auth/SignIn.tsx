import { Box, Typography } from '@mui/material';
import React, { useState, useContext, useCallback } from 'react';
import { FormButton, FormTitle, Input, Divider } from '.';
import Loading from '../../../assets/img/loading.gif';
import { AuthContext } from '../../../contexts';
import { passwordToHash } from '../../../utils';

export const SignIn = ({ onPrev }: { onPrev: () => void }) => {
  const { signIn, resetPassword } = useContext(AuthContext);
  const [email, setEmail] = useState<string>('');
  const [loadingStatus, setLoading] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const [errorEmitted, setErrorEmitted] = useState<boolean>(false);
  const [forgot, setForgot] = useState<boolean>(false);
  const [resetSent, setReset] = useState<boolean>(false);
  const handleReset = async () => {
    setLoading(true);
    await resetPassword({ email });
    setReset(true);
    setLoading(false);
  };
  const handleForgot = async () => {
    setForgot(true);
  };
  const handleSignin = useCallback(async () => {
    setLoading(true);
    if (!(await signIn(email, passwordToHash(password)))) {
      setErrorEmitted(true);
      setTimeout(() => setErrorEmitted(false), 3000);
    }
    setLoading(false);
  }, [setLoading, email, password, signIn]);
  const handleEmailChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(ev.target.value);
  };
  const handlePasswordChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(ev.target.value);
  };
  return (
    <>
      <FormTitle>{forgot ? 'RESET PaSSWORD' : 'SIGN IN'}</FormTitle>
      <Box
        display="flex"
        flexDirection="column"
        width="100%"
        alignItems="center"
        justifyContent="center"
        flexGrow={1}
        gap="15px"
      >
        {!forgot ? (
          <>
            <Divider />
            <Box my={6} display="flex" flexDirection="column" alignItems="center" gap="20px" width="100%">
              <Input
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                onKeyUp={(e) => {
                  if (e.key === 'Enter' || e.keyCode === 13) handleSignin();
                }}
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                onKeyUp={(e) => {
                  if (e.key === 'Enter' || e.keyCode === 13) handleSignin();
                }}
              />
              <FormButton onClick={handleSignin} disabled={loadingStatus}>
                Sign In{loadingStatus && <img src={Loading} alt="" style={{ marginLeft: '10px' }} width="25px" />}
              </FormButton>
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
            <Typography
              sx={{ textDecorationLine: 'underline', cursor: 'pointer', ':hover': { color: '#2984FF' } }}
              onClick={handleForgot}
            >
              Forgot password?
            </Typography>
          </>
        ) : (
          <>
            {!resetSent ? (
              <>
                <Divider />
                <Box my={8} display="flex" flexDirection="column" alignItems="center" gap="20px" width="100%">
                  <Input placeholder="Email" value={email} onChange={handleEmailChange} />
                  <FormButton onClick={handleReset} disabled={loadingStatus}>
                    Send{loadingStatus && <img src={Loading} alt="" style={{ marginLeft: '10px' }} width="25px" />}
                  </FormButton>
                  <Typography sx={{ color: 'red' }} display={`${errorEmitted ? 'block' : 'none'}`}>
                    Reset is failed.
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
              </>
            ) : (
              <Typography>We&apos;ve just sent a rest link to your email address.</Typography>
            )}
          </>
        )}
      </Box>
    </>
  );
};
