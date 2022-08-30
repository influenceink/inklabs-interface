import { FC, useState } from 'react';
import { styled } from '@mui/material';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import { BottomBar } from '../BottomBar';
import { LeftBar } from '../LeftBar';
import { RightBar } from '../RightBar';

import background from '../../assets/img/background.png';
import logo from '../../assets/img/logo.png';
import { AuthContext } from '../../contexts';
export const Layout: FC = ({ children }) => {
  const { authorized, avatar } = useContext(AuthContext);
  const history = useHistory();
  return (
    <LayoutWrapper>
      {children}
      <LogoWrapper>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </LogoWrapper>
      {authorized && avatar !== '' && (
        <ProfileWrapper onClick={() => history.push('/profile')}>
          <img src={avatar} alt="profile logo" width="100%" height="100%" />
        </ProfileWrapper>
      )}
      <LeftBar />
      <RightBar />
      <BottomBar />
    </LayoutWrapper>
  );
};
const LogoWrapper = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  padding-top: 46px;
  padding-left: 120px;
  & img {
    width: 65%;
  }
  @media screen and (max-width: 660px) {
    padding-top: 26px;
    padding-left: 40px;
  }
`;
const ProfileWrapper = styled('div')`
  width: 45px;
  height: 45px;
  border-radius: 100%;
  background-color: black;
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 46px;
  margin-right: 120px;
  @media screen and (max-width: 660px) {
    margin-top: 26px;
    margin-right: 40px;
  }
  & img {
    border-radius: 100%;
  }
  &:after {
    content: '';
    width: 12px;
    height: 12px;
    background-color: #ff225e;
    position: absolute;
    border-radius: 100%;
    transform: translateX(-8px);
  }
  cursor: pointer;
`;
const LayoutWrapper = styled('div')`
  min-height: 100vh;
  background: url(${background}), rgba(0, 0, 0, 0.44);
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: clip;
  // background-blend-mode: multiply;
  // background-color: rgba(0, 0, 0, 0.44);
`;
