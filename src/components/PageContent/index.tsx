import { Box, styled, Slide, useMediaQuery } from '@mui/material';
import { ReactNode, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts';

interface PageProps {
  children?: ReactNode;
  title?: string;
  type?: string;
}
export const PageContent = (props: PageProps) => {
  const { children, title, type } = props;
  const sm = useMediaQuery('(max-width: 660px)');
  const { authorized, avatar } = useContext(AuthContext);
  const history = useHistory();
  return (
    <>
      <Slide timeout={{ appear: 1000 }} direction={'right'} in={true} mountOnEnter unmountOnExit>
        <Box display="flex" justifyContent="center">
          {type === 'primary' ? (
            <PageWrapper>
              <Box width="100%" pb={3} flexGrow={1} overflow="hidden auto" position={'relative'}>
                <Box position={'absolute'}>
                  <Link to="/">
                    <img src={logo} alt="logo" />
                  </Link>
                </Box>
                {authorized && avatar !== '' && (
                  <ProfileWrapper onClick={() => history.push('/profile')}>
                    <img src={avatar} alt="profile logo" width="100%" height="100%" />
                  </ProfileWrapper>
                )}
                <Box mt="160px" flexGrow={1} display="flex" alignItems="center">
                  {children}
                </Box>
              </Box>
              <Divider />
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
const ProfileWrapper = styled('div')`
  width: 45px;
  height: 45px;
  border-radius: 100%;
  background-color: black;
  position: absolute;
  top: 0;
  right: 5px;
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
const PageWrapper = styled('div')`
  padding: 46px 100px 110px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(0, 0, 0);
  width: 100%;
  height: 100vh;
  z-index: 1;
  & > div {
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
    padding: 26px 24px 136px 24px;
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
const Divider = styled('div')`
  margin-top: 16px;
  width: 100%;
  height: 0;
  border: 0px dotted rgba(255, 255, 255, 0.3);
  border-top-width: 1px;
`;
