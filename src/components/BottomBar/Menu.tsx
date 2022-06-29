import { Link } from 'react-router-dom';
import { Box, styled, Button, Slide } from '@mui/material';
import leftBar from '../../assets/img/left-border.png';
import cross from '../../assets/img/cross.png';

export const Menu = ({ show, setShow }: { show: boolean; setShow: Function }) => {
  return (
    <>
      <Slide direction="up" in={show} mountOnEnter unmountOnExit>
        <MenuWrapper>
          <Box position="relative" display="flex" flexDirection="column" gap="12px" alignItems="center">
            <LeftBorder src={leftBar} alt="border" />
            <MenuBar>
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
  z-index: 3333;
`;

const LeftBorder = styled('img')`
  position: absolute;
  left: -22px;
  top: 0px;
`;

const MenuBar = styled('div')`
  border: 0px solid #d6d6d6;
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
  }
`;
