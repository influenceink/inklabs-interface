import { FC, useState } from 'react';
import { styled } from '@mui/material';

import { BottomBar } from '../BottomBar';
import { LeftBar } from '../LeftBar';
import { RightBar } from '../RightBar';

import background from '../../assets/img/background.png';
import logo from '../../assets/img/logo-large.png';
import { Link } from 'react-router-dom';
export const Layout: FC = ({ children }) => {
  const [lock, setLock] = useState<boolean>(false);
  return (
    <LayoutWrapper>
      {children}
      <LogoWrapper>
        <Link to="/home">
          <img src={logo} alt="logo" />
        </Link>
      </LogoWrapper>
      {!lock && <LeftBar />}
      {!lock && <RightBar />}
      <BottomBar lock={lock} setLock={setLock} />
    </LayoutWrapper>
  );
};
const LogoWrapper = styled('div')`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 46px;
  z-index: 10;
  @media screen and (max-width: 660px) {
    padding-top: 26px;
  }
`;
const LayoutWrapper = styled('div')`
  min-height: 100vh;
  background: url(${background}), rgba(0, 0, 0, 0.44);
  background-size: cover;
  position: relative;
  overflow: clip;
  background-blend-mode: multiply;
  // background-color: rgba(0, 0, 0, 0.44);
`;
