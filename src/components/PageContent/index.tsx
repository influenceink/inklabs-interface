import { Box, Button, styled, Slide, useMediaQuery } from '@mui/material';
import { ReactNode, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../assets/img/ink.png';
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
          <HeadWrapper>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
            <CloseButton onClick={() => history.push('/')}>
              <img src={cross} alt="cross" />
            </CloseButton>
          </HeadWrapper>
          {type === 'primary' ? (
            <PageWrapper>
              <Box maxWidth={2000} height={'100%'} display="flex" justifyContent="center" flexDirection="column">
                <Box width="100%" pb={3} overflow="hidden auto" position={'relative'}>
                  <Box sx={{ marginTop: { xs: '40px', md: '60px' } }} flexGrow={1} display="flex" alignItems="center">
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
const HeadWrapper = styled(Box)`
  display: flex;
  position: absolute;
  justify-content: space-between;
  width: 100%;
  z-index: 3;
  padding: 46px 8px 0px 16px;
  & > a > img {
    width: 50px;
    height: 50px;
  }
  @media screen and (max-width: 660px) {
    padding: 26px 8px 0px 8px;
    & > a > img {
      width: 30px;
      height: 30px;
    }
  }
`;
const CloseButton = styled(Button)`
  @media screen and (max-width: 660px) {
    padding: 0;
    width: fit-content;
    min-width: unset;
    & > div {
      width: 100%;
    }
    & > img {
      width: 26px;
      height: 26px;
    }
  }
`;
const PageWrapper = styled('div')`
  padding: 80px 120px 110px 120px;
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
    padding: 80px 24px 136px 24px;
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
