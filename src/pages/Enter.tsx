import { Box, styled, Typography } from '@mui/material';
import { Helmet } from 'react-helmet';

import { APP_TITLE, PAGE_TITLE_ENTER } from '../utils/constants';
import Typewriter from 'typewriter-effect';

export const Enter = () => {
  return (
    <>
      <Helmet>
        <title>
          {PAGE_TITLE_ENTER} | {APP_TITLE}
        </title>
      </Helmet>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="100vh"
      >
        <TypeWrapper>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('ENTER THE LAB').pauseFor(3000).deleteAll().start();
            }}
            options={{
              autoStart: true,
              loop: true,
            }}
          />
        </TypeWrapper>
        <Typography variant="subtitle1">SUBTEXT HERE OR SOME OTHER WELCOME MESSAGE</Typography>
      </Box>
    </>
  );
};
const TypeWrapper = styled('div')`
  & > div {
    display: flex;
  }
  span {
    font-size: 90px;
    font-family: 'SuiGeneris';
    line-height: 90px;
    font-weight: bold;
  }
  padding: 0 120px;
  text-align: center;
  @media (max-width: 600px) {
    span {
      font-size: 24px;
      font-family: 'SuiGeneris';
      line-height: 24px;
    }
    padding: 0 96px
  },
`;
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
