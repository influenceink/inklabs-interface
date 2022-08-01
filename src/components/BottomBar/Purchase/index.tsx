import { Link, useHistory } from 'react-router-dom';
import { Box, styled, Button, Fade, Typography, useMediaQuery } from '@mui/material';
import cross from '../../../assets/img/cross.png';
import logo from '../../../assets/img/logo.png';
import { useEffect } from 'react';
import { CreateId } from './CreateId';
import { CreateAccount } from './CreateAccount';
import { AccessGranted } from './AccessGranted';
import { ReserveInk } from './ReserveInk';
import { Preview } from './Preview';
import { Complete } from './Complete';
interface Props {
  show: boolean;
  setShow: (value: boolean) => void;
}

export const Purchase = ({ show, setShow }: Props) => {
  const mobile = useMediaQuery('(max-width: 1350px)');
  const history = useHistory();
  const goTo = (path: string) => {
    setShow(false);
    history.push(path);
  };
  return (
    <>
      <Fade in={show} mountOnEnter unmountOnExit>
        <ModalWrapper>
          <Box
            position="relative"
            display="flex"
            flexDirection="column"
            maxWidth="600px"
            width="100%"
            alignItems="center"
            minHeight="820px"
          >
            {/* <CreateId /> */}
            {/* <CreateAccount /> */}
            {/* <AccessGranted /> */}
            {/* <ReserveInk /> */}
            {/* <Preview /> */}
            <Complete />
            {/* <CloseButton onClick={() => setShow(false)}>
              <img src={cross} alt="cross" />
            </CloseButton> */}
          </Box>
        </ModalWrapper>
      </Fade>
    </>
  );
};
const CloseButton = styled(Button)`
  padding: 16px 22px;
  padding-bottom: 10px;
  border-radius: 35px 35px 0 0;
  z-index: 8888;
  background-color: white;
  img {
    filter: invert(1);
  }
`;

const ModalWrapper = styled('div')`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  & > div {
    background-color: black;
    border-radius: 15px;
    padding: 60px 115px;
  }
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100vh;
  // z-index: 8888;
  @media screen and (max-width: 1320px) {
    & > div {
      width: 100%;
      padding: 4px 32px 0px 32px;
    }
  }
`;

export const FormTitle = styled('span')`
  text-align: center;
  font-size: 51px;
  color: rgba(0, 0, 0);
  // text-shadow: 0 0 2px rgba(255, 255, 255, 0.8);
  text-shadow: -1px -1px 0 rgba(255, 255, 255, 0.4), 1px -1px 0 rgba(255, 255, 255, 0.4),
    -1px 1px 0 rgba(255, 255, 255, 0.4), 1px 1px 0 rgba(255, 255, 255, 0.4);
  font-family: 'Brolink';
  margin: 0;
  line-height: 51px;
  @media screen and (max-width: 660px) {
    font-size: 36px;
    line-height: 36px;
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
  font-weight: bold;
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
