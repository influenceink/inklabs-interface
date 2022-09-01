import { useHistory } from 'react-router-dom';
import { Box, styled, Button, useMediaQuery, Dialog, DialogContent } from '@mui/material';
import cross from '../../../assets/img/cross.png';
import React, { useEffect, useState, useContext } from 'react';
import { CreateId } from './CreateId';
import { CreateAccount } from './CreateAccount';
import { SignIn } from './SignIn';
import { AuthContext } from '../../../contexts';

interface Props {
  show: boolean;
  setShow: Function;
}

export const Auth = ({ show, setShow }: Props) => {
  const { authorized, setShowModal } = useContext(AuthContext);
  const mobile = useMediaQuery('(max-width: 1350px)');
  const history = useHistory();
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (show) {
      if (authorized) setIndex(3);
      else setIndex(0);
    }
  }, [show, authorized]);

  const handleClose = (event: React.SyntheticEvent<unknown>, reason?: string) => {
    if (reason !== 'backdropClick') {
      setShow(false);
    }
  };
  return (
    <>
      {/* <Fade in={show} mountOnEnter unmountOnExit> */}
      <ModalWrapper open={show} onClose={handleClose}>
        <DialogContent>
          <Box
            position="relative"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between"
            maxHeight="100vh"
          >
            <ContentWrapper>
              {index == 0 && <SignIn onPrev={() => setIndex((value) => value + 1)} />}
              {index === 1 && (
                <CreateId
                  onNext={() => setIndex((value) => value + 1)}
                  onSignIn={() => setIndex((value) => value - 1)}
                />
              )}
              {index === 2 && (
                <CreateAccount onNext={() => setShowModal(false)} onPrev={() => setIndex((value) => value - 1)} />
              )}
            </ContentWrapper>
            <CloseButton onClick={() => setShow(false)}>
              <img src={cross} alt="cross" />
            </CloseButton>
          </Box>
        </DialogContent>
      </ModalWrapper>
      {/* </Fade> */}
    </>
  );
};
const ContentWrapper = styled(Box)`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  overflow: hidden auto;
  align-items: center;
  ::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: #ff0000;
  }
`;
const CloseButton = styled(Button)`
  position: absolute;
  top: 12px;
  right: 5px;
  z-index: 8888;
  @media screen and (max-width: 600px) {
    position: relative;
    right: 0px;
    margin-bottom: 32px;
  }
`;

const ModalWrapper = styled(Dialog)`
  .MuiDialog-container {
    & > div {
      background: transparent;
      margin: 0;
      & > div {
        padding: 0;
        display: flex;
        & > div {
          border-radius: 20px;
          min-height: 825px;
          background: black;
          padding: 60px 115px;
          max-width: 600px;
          min-width: 600px;
          flex-grow: 1;
        }
      }
    }
  }
  @media screen and (max-width: 600px) {
    .MuiDialog-container {
      background: black;
      width: 100%;
      height: 100vh;
      display: flex;
      align-items: flex-start;
      & > div {
        max-height: 100vh;
        width: 100%;
        & > div {
          height: 100vh;
          width: 100%;
          & > div {
            min-width: 0px;
            max-width: 100%;
            min-height: unset;
            padding: 40px 24px 24px 24px;
          }
        }
      }
    }
  }
`;

export const FormTitle = styled('span')`
  text-align: center;
  font-size: 51px;
  // width: 100%;
  color: rgba(0, 0, 0);
  // text-shadow: 0 0 2px rgba(255, 255, 255, 0.8);
  text-shadow: -1px -1px 0 rgba(255, 255, 255, 0.4), 1px -1px 0 rgba(255, 255, 255, 0.4),
    -1px 1px 0 rgba(255, 255, 255, 0.4), 1px 1px 0 rgba(255, 255, 255, 0.4);
  font-family: 'Brolink';
  margin: 0;
  line-height: 51px;
  @media screen and (max-width: 600px) {
    font-size: 44px;
  }
`;

export const Input = styled('input')`
  border-radius: 15px;
  border: 1px solid #b8b8b8;
  background-color: rgba(255, 255, 255, 0.06);
  padding: 14px;
  width: 100%;
  font-family: 'Montserrat';
  text-align: center;
  color: white;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.08rem;
  ::placeholder {
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.15);
  }
`;

export const FormButton = styled(Button)`
  border-radius: 15px;
  background-color: #293eff;
  padding: 14px;
  width: 100%;
  font-family: 'Montserrat';
  font-size: 16px;
  font-weight: bold;
  color: white;
  :hover {
    background-color: #314fff;
  }
`;

export const Divider = styled('div')`
  box-sizing: border-box;
  width: calc(100% - 54px);
  background-color: #707070;
  height: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DividerContent = styled('p')`
  font-size: 11px;
  font-weight: bold;
  color: #ffffff88;
  text-align: center;
  padding: 0 16px;
  background: #000;
`;
