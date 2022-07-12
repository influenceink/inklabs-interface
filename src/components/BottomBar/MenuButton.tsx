import { ReactElement, useEffect, useState } from 'react';
import { styled, Button, Box, Collapse } from '@mui/material';

import { KeyPad } from './KeyPad';
import { Menu } from './Menu';

import arrowTop from '../../assets/img/arrow-up.png';
import unlock from '../../assets/img/unlock.png';
import dotLine from '../../assets/img/dot-line.png';
import open from '../../assets/img/open.png';
import { useLocation } from 'react-router-dom';

export const MenuButton = ({ lock, setLock }: { lock: boolean; setLock: Function }) => {
  const [showKeyPad, setShowKeyPad] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const { pathname } = useLocation();
  const [showLine, setShowLine] = useState(false);
  const handleClick = () => {
    if (lock) {
      setShowKeyPad(true);
    } else {
      setShowMenu(true);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setShowLine(!showLine);
    }, 2000);
  }, [showLine]);
  const Toggler = ({ children }: { children: ReactElement }) => {
    if (pathname === '/' || pathname === '/home') return <MenuToggler onClick={handleClick}>{children}</MenuToggler>;
    else return <LightToggler onClick={handleClick}>{children}</LightToggler>;
  };
  return (
    <MenuButtonWrapper>
      <Box display="flex" flexDirection="column" gap={0.5} alignItems="center">
        <Bounce>
          <img src={open} alt="open" />
        </Bounce>
        <Box minHeight={112}>
          <Collapse in={showLine} timeout={1000}>
            <img src={dotLine} alt="dotline" />
          </Collapse>
        </Box>
        <Toggler>{!lock ? <img src={arrowTop} alt="arrow" /> : <img src={unlock} alt="unlock" />}</Toggler>
      </Box>
      <KeyPad show={showKeyPad} setShow={setShowKeyPad} setLock={setLock} />
      <Menu show={showMenu} setShow={setShowMenu} />
    </MenuButtonWrapper>
  );
};

const MenuButtonWrapper = styled('div')`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const MenuToggler = styled(Button)`
  padding: 18px 22px;
  border-radius: 35px 35px 0 0;
  background-color: black;
  z-index: 8888;
`;
const LightToggler = styled(MenuToggler)`
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
