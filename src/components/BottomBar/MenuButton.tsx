import { useState } from 'react';
import { styled, Button } from '@mui/material';

import { KeyPad } from './KeyPad';
import { Menu } from './Menu';

import arrowTop from '../../assets/img/arrow-up.png';
import unlock from '../../assets/img/unlock.png';

export const MenuButton = ({ lock, setLock }: { lock: boolean; setLock: Function }) => {
  const [showKeyPad, setShowKeyPad] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    if (lock) {
      setShowKeyPad(true);
    } else {
      setShowMenu(true);
    }
  };

  return (
    <MenuButtonWrapper>
      <MenuToggler onClick={handleClick}>
        {!lock ? <img src={arrowTop} alt="arrow" /> : <img src={unlock} alt="unlock" />}
      </MenuToggler>
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
  border-radius: 30px 30px 0 0;
  background-color: black;
  z-index: 2222;
`;
