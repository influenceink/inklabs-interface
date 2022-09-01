import { Box, Button, styled, Slide, useMediaQuery } from '@mui/material';
import { ReactNode, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';
import cross from '../../assets/img/cross.png';

interface PageProps {
  children?: ReactNode;
  title?: string;
  type?: string;
}
export const PageContent = (props: PageProps) => {
  const { children, title, type } = props;
  const sm = useMediaQuery('(max-width: 660px)');
  const history = useHistory();
  return (
    <>
      <Slide timeout={{ appear: 1000 }} direction={'right'} in={true} mountOnEnter unmountOnExit>
        <Box display="flex" justifyContent="center">
          {type === 'primary' ? (
            <PageWrapper>
              <Box maxWidth={2000} height={'100%'} display="flex" alignItems="space-between" flexDirection="column">
                <Box width="100%" pb={3} flexGrow={1} overflow="hidden auto" position={'relative'}>
                  <Box position={'absolute'}>
                    <Link to="/">
                      <img src={logo} alt="logo" />
                    </Link>
                  </Box>
                  <CloseButton onClick={() => history.push('/')}>
                    <img src={cross} alt="cross" />
                  </CloseButton>
                  <Box sx={{ marginTop: { xs: '80px', md: '120px' } }} flexGrow={1} display="flex" alignItems="center">
                    {children}
                  </Box>
                </Box>
              </Box>
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
const CloseButton = styled(Button)`
  position: absolute;
  right: 0;
  z-index: 8888;
  flex: 0 1 auto;
  margin-bottom: 8px;
  @media screen and (max-width: 660px) {
    & > div {
      width: 100%;
      padding: 4px 24px 0px 24px;
    }
    margin-bottom: 30px;
  }
`;
const PageWrapper = styled('div')`
  padding: 120px 150px 110px 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(0, 0, 0);
  width: 100%;
  height: 100vh;
  z-index: 2;
  & > div > div {
    ::-webkit-scrollbar {
      width: 0; /* Remove scrollbar space */
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background: #ff0000;
    }
  }
  & a > img {
    width: 65%;
  }
  @media screen and (max-width: 660px) {
    -webkit-clip-path: none;
    clip-path: none;
    padding: 60px 24px 136px 24px;
    position: fixed;
    left: 0;
  }
`;
const PageWrapperFluid = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.72);
  width: 100%;
  height: 100vh;
  z-index: 3;
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
// const Divider = styled('div')`
//   margin-top: 16px;
//   width: 100%;
//   height: 0;
//   border: 0px dotted rgba(255, 255, 255, 0.3);
//   border-top-width: 1px;
// `;
