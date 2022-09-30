import { ReactElement, useEffect, useState, useContext } from 'react';
import { styled, Button, Box, Collapse, useMediaQuery } from '@mui/material';

// import { KeyPad } from './KeyPad';
import { Menu } from './Menu';

import { PurchaseFlowContext, AuthContext } from '../../contexts';
import menuImg from '../../assets/img/menu.png';
// import unlock from '../../assets/img/unlock.png';
import dotLine from '../../assets/img/dot-line.png';
import open from '../../assets/img/open.png';
import cross from '../../assets/img/cross.png';
import { useLocation, useHistory } from 'react-router-dom';
import { Purchase } from './Purchase';
import { Roadmap } from './Roadmap';
import { Auth } from './Auth';

export const MenuButton = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showRoadmap, setShowRoadmap] = useState(false);
  const { showModal: showAuth, setShowModal: setAuth, authorized } = useContext(AuthContext);
  const { showModal: showPurchase, setShowModal: setPurchase } = useContext(PurchaseFlowContext);
  const history = useHistory();
  const toggleShowRoadmap = () => {
    setShowMenu(false);
    setShowRoadmap((show) => !show);
    setPurchase(false);
    setAuth(false);
  };
  type visibilityType = 'hidden' | 'visible' | 'collapse';
  const { pathname } = useLocation();
  const [showLine, setShowLine] = useState(false);
  const handleClick = () => {
    if (showMenu || (sm && showRoadmap) || (sm && showPurchase) || (sm && showAuth)) {
      setShowMenu(false);
      setShowRoadmap(false);
      setPurchase(false);
      setAuth(false);
    } else setShowMenu(true);
  };
  const toggleShowPurchaseFlow = () => {
    history.push('/');
    setShowRoadmap(false);
    setShowMenu(false);
    setPurchase((value: boolean) => !value);
    setAuth(false);
  };
  useEffect(() => {
    setTimeout(() => {
      setShowLine(!showLine);
    }, 2000);
  }, [showLine]);
  const sm = useMediaQuery('(max-width: 660px)');
  return (
    <MenuButtonWrapper>
      <Box display="flex" flexDirection="column" gap={0.5} alignItems="center">
        {/* <Bounce>
          <img src={open} alt="open" />
        </Bounce>
        <Box minHeight={112} mb={sm ? '110px' : '100px'}>
          <Collapse in={showLine} timeout={1000}>
            <img src={dotLine} alt="dotline" />
          </Collapse>
        </Box> */}
        <Box
          left={'50%'}
          style={{ transform: 'translateX(-50%)' }}
          position="fixed"
          display="flex"
          alignItems="flex-end"
          mb={2}
          bottom={0}
          gap={2}
          zIndex={9999}
        >
          <StyledButton sx={{ minWidth: 110 }} onClick={toggleShowPurchaseFlow}>
            <span>buy ink</span>
          </StyledButton>
          <StyledButton
            onClick={handleClick}
            className={showMenu || (sm && showRoadmap) || (sm && showPurchase) || (sm && showAuth) ? 'close' : ''}
          >
            <img
              src={showMenu || (sm && showRoadmap) || (sm && showPurchase) || (sm && showAuth) ? cross : menuImg}
              className={
                showMenu || (sm && showRoadmap) || (sm && showPurchase) || (sm && showAuth) ? 'closeBtnAnimation' : ''
              }
              alt="arrow"
            />
          </StyledButton>
          <StyledButton onClick={toggleShowRoadmap} sx={{ minWidth: 110 }}>
            <span>roadmap</span>
          </StyledButton>
        </Box>
      </Box>
      {/* <KeyPad show={showKeyPad} setShow={setShowKeyPad} setLock={setLock} /> */}
      <Menu show={showMenu} setShow={setShowMenu} />
      <Purchase show={showPurchase} setShow={setPurchase} />
      <Roadmap show={showRoadmap} setShow={toggleShowRoadmap} />
      <Auth show={showAuth} setShow={setAuth} />
    </MenuButtonWrapper>
  );
};

const MenuButtonWrapper = styled('div')`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0px;
  align-items: flex-end;
  left: 0;
`;

const StyledButton = styled(Button)`
  position: relative;
  padding: 14px 18px;
  border-radius: 11px;
  background-color: rgb(0, 0, 0);
  border: 3px solid white;
  z-index: 9999;
  color: white;
  font-size: 11px;
  font-weight: bold;
  img {
    margin: 8px 0;
  }
  @media screen and (max-width: 400px) {
    padding: 14px 18px;
  }
  &:hover > span:nth-of-type(odd) {
    background: linear-gradient(0.25turn, rgb(255, 53, 93) 0%, rgb(255, 191, 53) 150%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  :hover:before {
    content: '';
    position: absolute;
    top: -3px;
    bottom: -3px;
    left: -3px;
    right: -3px;
    z-index: -1;
    border-radius: 11px;
    background: linear-gradient(0.25turn, rgb(255, 53, 93) 0%, rgb(255, 191, 53) 150%);
  }
  :hover:after {
    content: '';
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    z-index: -1;
    border-radius: 9px;
    background-color: rgb(0, 0, 0);
  }
  &.close {
    padding: 8px 18px;
    img {
      width: 38.99px;
      height: 36.79px;
      filter: invert(1);
    }
    :hover {
      opacity: 0.6;
    }
    :hover:after {
      display: none;
    }
    :hover:before {
      display: none;
    }
    background-color: white;
  }
`;
const LightToggler = styled(StyledButton)`
  background-color: white;
  img {
    filter: invert(1);
  }
`;
const Bounce = styled('div')`
  // @keyframes bounce2 {
  //   0%,
  //   20%,
  //   50%,
  //   80%,
  //   100% {
  //     transform: translateY(0);
  //   }
  //   40% {
  //     transform: translateY(20px);
  //   }
  //   60% {
  //     transform: translateY(10px);
  //   }
  // }
  // animation: bounce2 2s ease infinite;
`;
