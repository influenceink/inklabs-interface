import { Link } from 'react-router-dom';
import { Box, styled, Button, Slide } from '@mui/material';
import leftBar from '../../assets/img/left-border.png';
import cross from '../../assets/img/cross.png';
import logo from '../../assets/img/logo-large.png';

export const Menu = ({ show, setShow }: { show: boolean; setShow: Function }) => {
  return (
    <>
      <Slide direction="up" in={show} mountOnEnter unmountOnExit>
        <MenuWrapper>
          <Box position="relative" display="flex" flexDirection="column" gap="12px" alignItems="center">
            <LeftBorder src={leftBar} alt="border" />
            <MenuBar>
              <LogoWrapper>
                <Link to="/" onClick={() => setShow(false)}>
                  <img src={logo} alt="logo" />
                </Link>
              </LogoWrapper>
              <Link to="/mindmap">
                <Button onClick={() => setShow(false)}>MINDMAP</Button>
              </Link>
              <Link to="/vision">
                <Button onClick={() => setShow(false)}>VISION</Button>
              </Link>
              <Link to="/platform">
                <Button onClick={() => setShow(false)}>PLATFORM</Button>
              </Link>
              <Link to="/inkcoin">
                <Button onClick={() => setShow(false)}>INK COIN</Button>
              </Link>
              <Link to="/cryptoclub">
                <Button onClick={() => setShow(false)}>CRYPTO CLUB</Button>
              </Link>
              <Link to="/games">
                <Button onClick={() => setShow(false)}>GAMES</Button>
              </Link>
              <Link to="/inkzips">
                <Button onClick={() => setShow(false)}>INK ZIPS</Button>
              </Link>
            </MenuBar>
            <Button onClick={() => setShow(false)}>
              <img src={cross} alt="cross" />
            </Button>
          </Box>
        </MenuWrapper>
      </Slide>
    </>
  );
};

const LogoWrapper = styled('div')`
  width: 100%;
  display: none;
  justify-content: center;
  padding-top: 46px;
  z-index: 9999;
  @media screen and (max-width: 1320px) {
    border: 0px dotted #a6a6a6;
    border-bottom-width: 2px;
    img {
      width: 110px;
    }
    padding: 12px 0;
    display: flex;
  }
`;

const MenuWrapper = styled('div')`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;
  & > div {
    background-color: black;
    border-radius: 15px 15px 0 0;
    padding: 4px 64px 24px 64px;
  }
  position: absolute;
  bottom: -10px;
  left: 0px;
  z-index: 8888;
  @media screen and (max-width: 1320px) {
    & > div {
      width: 100%;
    }
  }
`;

const LeftBorder = styled('img')`
  position: absolute;
  left: -22px;
  top: 0px;
  display: block;
  @media screen and (max-width: 1320px) {
    display: none;
  }
`;

const MenuBar = styled('div')`
  border: 0px solid #a6a6a6;
  border-bottom-width: 2px;
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  gap: 100px;
  button,
  a {
    text-decoration: none;
    color: white;
    font-size: 12px;
    width: 100%;
  }
  @media screen and (max-width: 1320px) {
    flex-direction: column;
    gap: 10px;
    width: 100%;
    border-bottom-width: 0px;
    button,
    a {
      text-align: center;
      font-size: 16px;
      font-weight: bold;
    }
  }
`;
