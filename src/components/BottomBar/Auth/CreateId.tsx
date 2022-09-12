import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { FormButton, FormTitle, Input, Divider } from '.';
import { passwordToHash } from '../../../utils';

export const CreateId = ({ onNext, onSignIn }: { onNext: (_: any) => void; onSignIn: () => void }) => {
  const [username, setUsername] = useState<string>('');
  const [firstname, setFirstname] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirm, setConfirm] = useState<string>('');
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
      username === '' || firstname === '' || lastname === '' || email === '' || password === '' || password !== confirm
    );
  };
  const handleClick = () => {
    onNext({ email, password: passwordToHash(password), display_name: `${firstname} ${lastname}`, ink_id: username });
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
        <Input placeholder="username" value={username} onChange={(ev) => setUsername(ev.target.value)} />
        <Divider />
        <Input placeholder="first name" value={firstname} onChange={(ev) => setFirstname(ev.target.value)} />
        <Input placeholder="last name" value={lastname} onChange={(ev) => setLastname(ev.target.value)} />
        <Input placeholder="email" value={email} onChange={(ev) => setEmail(ev.target.value)} />
        <Input
          type="password"
          placeholder="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <Input
          type="password"
          placeholder="confirm password"
          value={confirm}
          onChange={(ev) => setConfirm(ev.target.value)}
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
