import { Box, styled, Slide, useMediaQuery } from '@mui/material';
import { ReactNode } from 'react';
import logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';

interface PageProps {
  children?: ReactNode;
  title?: string;
  type?: string;
}
export const PageContent = (props: PageProps) => {
  const { children, title, type } = props;
  const sm = useMediaQuery('(max-width: 660px)');
  return (
    <>
      <Slide timeout={{ appear: 1000 }} direction={'right'} in={true} mountOnEnter unmountOnExit>
        <Box display="flex" justifyContent="center">
          {type === 'primary' ? (
            <PageWrapper>
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
              <Box width="100%" mt="24px" py={3} flexGrow={1} overflow="hidden auto">
                {children}
              </Box>
              <Divider />
              <PageTitleText>{title?.toUpperCase().replaceAll('A', 'a')}</PageTitleText>
            </PageWrapper>
          ) : (
            <PageWrapperFluid>
              <Box width="100%" flexGrow={1} overflow="hidden auto">
                {children}
              </Box>
            </PageWrapperFluid>
          )}
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
    padding: 26px 24px 40px 24px;
    position: fixed;
    left: 0;
  }
`;
const PageWrapperFluid = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.72);
  max-width: 2000px;
  width: 100%;
  height: 100vh;
  z-index: 1;
  -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% calc(100% - 100px), calc(100% - 100px) 100%, 0% 100%, 0% 0%);
  clip-path: polygon(0% 0%, 100% 0%, 100% calc(100% - 100px), calc(100% - 100px) 100%, 0% 100%, 0% 0%);
  // & > div {
  //   ::-webkit-scrollbar {
  //     width: 0; /* Remove scrollbar space */
  //     background: transparent;
  //   }
  //   ::-webkit-scrollbar-thumb {
  //     background: #ff0000;
  //   }
  // }
  @media screen and (max-width: 660px) {
    -webkit-clip-path: none;
    clip-path: none;
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
  font-size: 90px;
  color: rgba(0, 0, 0);
  // text-shadow: 0 0 2px rgba(255, 255, 255, 0.8);
  text-shadow: -1px -1px 0 rgba(255, 255, 255, 0.4), 1px -1px 0 rgba(255, 255, 255, 0.4),
    -1px 1px 0 rgba(255, 255, 255, 0.4), 1px 1px 0 rgba(255, 255, 255, 0.4);
  font-family: 'Brolink';
  margin: 14px 0;
  padding: 8px 0;
  line-height: 90px;
  @media screen and (max-width: 660px) {
    font-size: 42px;
    line-height: 52px;
    padding: 0;
  }
`;
