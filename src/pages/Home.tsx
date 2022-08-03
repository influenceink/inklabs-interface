import { Box, styled, Typography } from '@mui/material';
import { Helmet } from 'react-helmet';

import { APP_TITLE, PAGE_TITLE_HOME } from '../utils/constants';
import Typewriter from 'typewriter-effect';

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          {PAGE_TITLE_HOME} | {APP_TITLE}
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
              typewriter.typeString('WELCOME TO INKTOKEN').start();
            }}
            options={{
              autoStart: true,
              loop: false,
            }}
          />
        </TypeWrapper>
        <Typography px="80px" textAlign="center" variant="subtitle1">
          SUBTEXT HERE OR SOME OTHER WELCOME MESSAGE
        </Typography>
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
    line-height: 90px;
    font-weight: bold;
  }
  padding: 0 120px;
  text-align: center;
  @media (max-width: 600px) {
    span {
      font-size: 42px;
      line-height: 42px;
    }
    padding: 0 80px
  },
`;
