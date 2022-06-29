import React, { useState } from 'react';
import { Box, styled, TextField, Button, Slide, Snackbar, Alert, SlideProps } from '@mui/material';

import { KEYS } from '../../utils/constants';

import logo from '../../assets/img/logo.png';
import blueBtn from '../../assets/img/button.png';
import cross from '../../assets/img/cross.png';

type TransitionProps = Omit<SlideProps, 'direction'>;

const transition = (props: TransitionProps) => {
  return <Slide {...props} direction="left" />;
};

export const KeyPad = ({ show, setShow, setLock }: { show: boolean; setShow: Function; setLock: Function }) => {
  const [code, setCode] = useState('');

  const [toastState, setToastState] = useState({
    open: false,
    success: false,
  });

  const onKeyClicked = (value: string) => {
    if (value === 'backspace') {
      setCode((code) => code.slice(0, code.length - 1));
      return;
    }
    setCode((code) => `${code}${value}`);
  };

  const handleChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const valid = KEYS.some((key) => key.value === e.key);
    if (e.key !== 'Backspace' && !valid) {
      e.preventDefault();
      return;
    }
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setToastState({ open: false, success: false });
  };

  const handleEnter = () => {
    if (code === '123456') {
      setToastState({ open: true, success: true });
      setLock(false);
      setShow(false);
    } else {
      setToastState({ open: true, success: false });
    }
  };

  return (
    <>
      <Slide direction="up" in={show} mountOnEnter unmountOnExit>
        <KeyPadWrapper>
          <Box display="flex" flexDirection="column" gap="12px" alignItems="center">
            <img src={logo} alt="logo" />
            <KeyField
              id="standard-basic"
              variant="standard"
              onChange={(e) => setCode(e.target.value)}
              onKeyDown={handleChange}
              value={code}
            />
            <KeyBoard>
              {KEYS.map((key: { value: string; image: string }) => (
                <Key onClick={() => onKeyClicked(key.value)} key={key.value}>
                  <img src={key.image} alt="key" />
                </Key>
              ))}
            </KeyBoard>
            <StyledButton onClick={handleEnter}>ENTER</StyledButton>
            <Button onClick={() => setShow(false)}>
              <img src={cross} alt="cross" />
            </Button>
          </Box>
        </KeyPadWrapper>
      </Slide>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={toastState.open}
        autoHideDuration={4000}
        onClose={handleClose}
        key="topright"
        TransitionComponent={transition}
      >
        {toastState.success ? (
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Entered successfully!
          </Alert>
        ) : (
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            Invalid Code!
          </Alert>
        )}
      </Snackbar>
    </>
  );
};

const KeyPadWrapper = styled('div')`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;
  & > div {
    background-color: black;
    border-radius: 15px 15px 0 0;
    padding: 50px 32px 24px 32px;
  }
  position: absolute;
  bottom: -10px;
  left: 0px;
  z-index: 9999;
`;

const KeyBoard = styled('div')`
  display: flex;
  width: 340px;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
  padding: 24px;
`;

const Key = styled(Button)`
  padding: 0;
  min-width: 48px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  & > img {
    max-height: 28px;
    max-width: 28px;
  }
`;

const KeyField = styled(TextField)`
  width: 100%;
  input {
    font-size: 24px;
    padding: 14px;
    text-align: center;
  }
`;

const StyledButton = styled(Button)`
  background-image: url(${blueBtn});
  background-size: 100% 100%;
  width: 100%;
  font-size: 17px;
  padding: 16px 0;
`;
