import { Typography, Box, styled, Button } from '@mui/material';
import arrowTop from '../../assets/img/arrow-up.png'
import unlock from '../../assets/img/unlock.png';
import { useState } from 'react';
import { KeyPad } from './KeyPad';

export const BottomMenu = ({lock, setLock}: {lock: boolean, setLock: Function}) => {
  const [showKeyPad, setShowKeyPad] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => {
    if(lock) {
      setShowKeyPad(true)
    }
    else {
      setShowMenu(true)
    }
  }
  return (
    <>
      <MenuToggler onClick={handleClick}>
        {!lock ? 
        <img src={arrowTop} alt='arrow' /> :
        <img src={unlock} alt='unlock' />
        }
      </MenuToggler>
      <KeyPad show={showKeyPad} setShow={setShowKeyPad} setLock={setLock} />
    </>
  );
};
const MenuToggler = styled(Button)`
  padding: 18px 22px;
  border-radius: 30px 30px 0 0; 
  background-color: black;
`;
