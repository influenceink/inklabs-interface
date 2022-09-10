import { useState, useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { FormButton, FormTitle, Input, Divider } from '.';
import { AuthContext } from '../../../contexts';

export const CreateAccount = ({
  onNext,
  onPrev,
  account,
}: {
  account: any;
  onNext: () => void;
  onPrev: () => void;
}) => {
  const { signUp } = useContext(AuthContext);
  const [referrer, setReferrer] = useState<string>('');
  const handleClick = async () => {
    const status = await signUp({ ...account, referrer_id: referrer });
    if (status !== 0) {
      onPrev();
    }
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
          <Input placeholder="enter ink id" value={referrer} onChange={(ev) => setReferrer(ev.target.value)} />
          <FormButton onClick={handleClick} disabled={referrer === ''}>
            enter
          </FormButton>
        </Box>
        <Divider />
        <Typography variant="subtitle2" fontWeight="bold" py={0} mt={2}>
          ALREADY HAVE AN INK ID?
        </Typography>
        <Typography
          variant="subtitle1"
          color="#2984FF"
          sx={{ cursor: 'pointer', ':hover': { textDecoration: 'underline' } }}
          onClick={onPrev}
        >
          Sign-in
        </Typography>
      </Box>
    </>
  );
};
