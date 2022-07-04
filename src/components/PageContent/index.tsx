import { Box, styled, Slide, useMediaQuery } from '@mui/material';
import { ReactNode } from 'react';
import logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';

interface PageProps {
  children?: ReactNode;
  title?: string;
}
export const PageContent = (props: PageProps) => {
  const { children, title } = props;
  const sm = useMediaQuery('(max-width: 660px)');
  return (
    <>
      <Slide timeout={{ appear: 1000 }} direction={'right'} in={true} mountOnEnter unmountOnExit>
        <Box display="flex" justifyContent="center">
          <PageWrapper>
            <Link to="/home">
              <img src={logo} alt="logo" />
            </Link>
            <Box width="100%" mt="24px" py={3} flexGrow={1} overflow="hidden auto">
              {children}
            </Box>
            <Divider />
            <PageTitleText>{title?.toLowerCase()}</PageTitleText>
          </PageWrapper>
        </Box>
      </Slide>
    </>
  );
};

const PageWrapper = styled('div')`
  padding: 46px 100px 40px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.92);
  max-width: 2000px;
  width: 100%;
  height: 100vh;
  z-index: 6666;
  -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% calc(100% - 100px), calc(100% - 100px) 100%, 0% 100%, 0% 0%);
  clip-path: polygon(0% 0%, 100% 0%, 100% calc(100% - 100px), calc(100% - 100px) 100%, 0% 100%, 0% 0%);
  & > div {
    ::-webkit-scrollbar {
      width: 0; /* Remove scrollbar space */
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background: #ff0000;
    }
  }
  @media screen and (max-width: 660px) {
    -webkit-clip-path: none;
    clip-path: none;
    padding: 26px 42px 40px 42px;
    position: fixed;
    left: 0;
  }
`;

const Divider = styled('div')`
  margin-top: 16px;
  width: 100%;
  height: 0;
  border: 0px dotted rgba(255, 255, 255, 0.3);
  border-top-width: 1px;
`;

const PageTitleText = styled('p')`
  text-align: center;
  font-size: 100px;
  color: rgba(0, 0, 0);
  // text-shadow: 0 0 2px rgba(255, 255, 255, 0.8);
  text-shadow: -1px -1px 0 rgba(255, 255, 255, 0.4), 1px -1px 0 rgba(255, 255, 255, 0.4),
    -1px 1px 0 rgba(255, 255, 255, 0.4), 1px 1px 0 rgba(255, 255, 255, 0.4);
  font-family: 'Brolink';
  margin: 14px 0;
  padding: 8px 0;
  line-height: 102px;
  @media screen and (max-width: 660px) {
    font-size: 50px;
    line-height: 52px;
    padding: 0;
  }
`;
