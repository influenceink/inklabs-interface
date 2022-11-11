import { useState, useContext, useCallback, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { FormButton, FormTitle, Input, Divider } from '.';
import { AuthContext } from '../../../contexts';

export const CreateAccount = ({
  onNext,
  onSignIn,
}: {
  onNext: (_: any) => void;
  onSignIn: () => void;
}) => {
  const { referrerLookup } = useContext(AuthContext);
  const [referrer, setReferrer] = useState<string>('');
  const [isReferrerValid, setReferrerValidation] = useState<boolean>(true);
  const [ReferrerError, setReferrerError] = useState<string>('');
  const handleClick = useCallback(() => {
    const data = { referrer_id: referrer };
    onNext(data);
  }, [referrer, onNext]);
  const handleReferrerChange = async (referrer: string) => {
    setReferrer(referrer);
  };
  useEffect(() => {
    const referrerLookupWrapper = async () => {
      const res = await referrerLookup({ referrer_id: referrer });
      if (res.status) {
        setReferrerError(res.error);
        setReferrerValidation(false);
      } else setReferrerValidation(true);
    };
    referrerLookupWrapper();
  }, [referrer, referrerLookup]);
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
          <Input
            placeholder="enter ink id"
            value={referrer}
            onChange={(ev) => handleReferrerChange(ev.target.value)}
            onKeyUp={(e) => {
              if (referrer !== '' && (e.key === 'Enter' || e.keyCode === 13)) handleClick();
            }}
          />
          {!isReferrerValid && (
            <Typography color="red" fontSize={15} textAlign="center">
              {ReferrerError}
            </Typography>
          )}
          <FormButton onClick={handleClick} disabled={referrer === '' || !isReferrerValid}>
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
          onClick={() => onSignIn()}
        >
          Sign-in
        </Typography>
      </Box>
    </>
  );
};
