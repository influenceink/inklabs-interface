import { styled, Typography } from '@mui/material';
import { Helmet } from 'react-helmet';

import logo from '../logo.svg';
import { APP_TITLE, PAGE_TITLE_HOME } from '../utils/constants';

export const Home = () => {

  return (
    <>
      <Helmet>
        <title>
          {PAGE_TITLE_HOME} | {APP_TITLE}
        </title>
      </Helmet>
      <LogoWrapper>
        <StyledLogo src={logo} alt="logo" />
      </LogoWrapper>
    </>
  );
};

const LogoWrapper = styled('div')`
  text-align: center;
  // margin-top: 6rem;
`;

const StyledLogo = styled('img')`
  height: 40vmin;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 15s linear;
  }
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
