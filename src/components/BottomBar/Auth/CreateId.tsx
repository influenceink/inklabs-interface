import { useState, useEffect, useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { FormButton, FormTitle, Input, Divider } from '.';
import { passwordToHash } from '../../../utils';
import { AuthContext } from '../../../contexts';

export const CreateId = ({
  onNext,
  onSignIn,
  error,
}: {
  onNext: (_: any) => void;
  onSignIn: () => void;
  error: string;
}) => {
  const [username, setUsername] = useState<string>('');
  const [firstname, setFirstname] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirm, setConfirm] = useState<string>('');
  const [displayError, setDisplayError] = useState<boolean>(false);
  const { authVacancy, userVacancy } = useContext(AuthContext);
  const [isEmailValid, setEmailValidation] = useState<boolean>(true);
  const [isIdValid, setIdValidation] = useState<boolean>(true);
  const [IdError, setIdError] = useState<string>('');
  const [EmailError, setEmailError] = useState<string>('');
  // useEffect(() => {
  //   if (account !== null) {
  //     setEmail(account.email);
  //     setPassword(account.password);
  //     setUsername(account.ink_id);
  //     setFirstname((account.display_name || '').split(' ')[0]);
  //     setLastname((account.display_name || '').split(' ')[1]);
  //   }
  // }, [account]);
  const validation = () => {
    return (
      username === '' ||
      firstname === '' ||
      lastname === '' ||
      email === '' ||
      password === '' ||
      password !== confirm ||
      !isEmailValid ||
      !isIdValid
    );
  };
  const handleClick = () => {
    onNext({ email, password: passwordToHash(password), display_name: `${firstname} ${lastname}`, ink_id: username });
  };
  useEffect(() => {
    if (error !== '') {
      setDisplayError(true);
      setTimeout(() => setDisplayError(false), 3000);
    }
  }, [error]);
  const handleUsernameChange = async (inkId: string) => {
    setUsername(inkId);
    if ((await userVacancy({ ink_id: inkId })).status) {
      setIdError((await userVacancy({ ink_id: inkId })).error);
      setIdValidation(false);
    } else setIdValidation(true);
  };
  const handleEmailChange = async (email: string) => {
    setEmail(email);
    console.log(email);
    if ((await authVacancy({ email })).status) {
      setEmailError((await authVacancy({ email })).error);
      setEmailValidation(false);
    } else setEmailValidation(true);
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
        {displayError && (
          <Typography color="red" fontSize={15}>
            {error}
          </Typography>
        )}
        <Typography variant="subtitle2" fontWeight="bold">
          Enter Your Desired INK ID
        </Typography>
        <Input
          placeholder="username"
          value={username}
          onChange={(ev) => handleUsernameChange(ev.target.value)}
          onKeyUp={(e) => {
            if (!validation() && (e.key === 'Enter' || e.keyCode === 13)) handleClick();
          }}
        />
        {!isIdValid && (
          <Typography color="red" fontSize={15}>
            {IdError}
          </Typography>
        )}
        <Divider />
        <Input
          placeholder="first name"
          value={firstname}
          onChange={(ev) => setFirstname(ev.target.value)}
          onKeyUp={(e) => {
            if (!validation() && (e.key === 'Enter' || e.keyCode === 13)) handleClick();
          }}
        />
        <Input
          placeholder="last name"
          value={lastname}
          onChange={(ev) => setLastname(ev.target.value)}
          onKeyUp={(e) => {
            if (!validation() && (e.key === 'Enter' || e.keyCode === 13)) handleClick();
          }}
        />
        <Input
          placeholder="email"
          value={email}
          onChange={(ev) => handleEmailChange(ev.target.value)}
          onKeyUp={(e) => {
            if (!validation() && (e.key === 'Enter' || e.keyCode === 13)) handleClick();
          }}
        />
        {!isEmailValid && (
          <Typography color="red" fontSize={15}>
            {EmailError}
          </Typography>
        )}
        <Input
          type="password"
          placeholder="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          onKeyUp={(e) => {
            if (!validation() && (e.key === 'Enter' || e.keyCode === 13)) handleClick();
          }}
        />
        <Input
          type="password"
          placeholder="confirm password"
          value={confirm}
          onChange={(ev) => setConfirm(ev.target.value)}
          onKeyUp={(e) => {
            if (!validation() && (e.key === 'Enter' || e.keyCode === 13)) handleClick();
          }}
        />
        <Box my={1} width="100%">
          <FormButton onClick={handleClick} disabled={validation()}>
            create ink id
          </FormButton>
        </Box>
        <Typography variant="subtitle2" fontWeight="bold" py={0}>
          ALREADY HAVE AN INK ID?
        </Typography>
        <Typography
          variant="subtitle1"
          color="#2984FF"
          sx={{ cursor: 'pointer', ':hover': { textDecoration: 'underline' } }}
          onClick={onSignIn}
        >
          Sign-in
        </Typography>
      </Box>
    </>
  );
};
