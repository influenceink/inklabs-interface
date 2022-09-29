import { FC, useCallback, useState } from 'react';
import { styled } from '@mui/material';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import { BottomBar } from '../BottomBar';
import { LeftBar } from '../LeftBar';
import { RightBar } from '../RightBar';

import background from '../../assets/img/background.jpg';
import logo from '../../assets/img/logo.png';
import profileLogo from '../../assets/img/profile-logo-default.png';
import { AuthContext } from '../../contexts';
export const Layout: FC = ({ children }) => {
  const { authorized, avatar, setShowModal } = useContext(AuthContext);
  const history = useHistory();
  const handleProfileClick = () => {
    if (authorized) {
      history.push('/profile');
    } else {
      setShowModal(true);
    }
  };
  return (
    <LayoutWrapper>
      {children}
      <LogoWrapper>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </LogoWrapper>
      <ProfileWrapper onClick={handleProfileClick}>
        <img src={avatar === '' ? profileLogo : avatar} alt="profile logo" width="100%" height="100%" />
      </ProfileWrapper>
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
  padding-left: 16px;
  & img {
    width: 65%;
  }
  @media screen and (max-width: 660px) {
    padding-top: 26px;
    padding-left: 8px;
    & img {
      width: 35%;
    }
  }
  z-index: 1;
`;
const ProfileWrapper = styled('div')`
  width: 45px;
  height: 45px;
  border-radius: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 46px;
  margin-right: 8px;
  // &:before {
  //   right: 0;
  //   content: '';
  //   width: 12px;
  //   height: 12px;
  //   background-color: #ff225e;
  //   position: absolute;
  //   border-radius: 100%;
  //   transform: translate(0px, -2px);
  // }
  @media screen and (max-width: 660px) {
    margin-top: 26px;
    margin-right: 8px;
    width: 30px;
    height: 30px;
    &:before {
      transform: translate(6px, -2px);
    }
  }
  & img {
    border-radius: 100%;
  }
  z-index: 1;
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
