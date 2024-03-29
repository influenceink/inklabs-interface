import { useHistory } from 'react-router-dom';
import { Box, styled, Button, Slide, useMediaQuery, Typography, Link } from '@mui/material';
import { useContext } from 'react';
import cross from '../../assets/img/cross.png';
import instagram from '../../assets/img/instagram.png';
import twitter from '../../assets/img/twitter.png';
import facebook from '../../assets/img/facebook.png';
import youtube from '../../assets/img/youtube.png';
import referral from '../../assets/img/referral-button-2.png';
import { Copyright } from './Copyright';
import { PurchaseFlowContext, AuthContext } from '../../contexts';

interface Props {
  show: boolean;
  setShow: (value: boolean) => void;
}

export const Menu = ({ show, setShow }: Props) => {
  const { setShowModal: setAuth } = useContext(AuthContext);
  const { setShowModal: setPurchase } = useContext(PurchaseFlowContext);
  const mobile = useMediaQuery('(max-width: 600px)');
  const history = useHistory();
  const goTo = (path: string) => {
    setShow(false);
    setAuth(false);
    setPurchase(false);
    history.push(path);
  };
  const toggleShowPurchaseFlow = () => {
    history.push('/');
    setShow(false);
    setAuth(false);
    setPurchase((value: boolean) => !value);
  };
  return (
    <>
      <Slide direction="up" in={show} mountOnEnter unmountOnExit>
        <MenuWrapper>
          <MenuBar>
            <Box
              overflow="hidden auto"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              sx={{ gap: { xs: '24px', md: '32px' } }}
            >
              <MenuItem onClick={() => goTo('/vision')}>vision</MenuItem>
              <MenuItem onClick={() => goTo('/platform')}>platform</MenuItem>
              <MenuItem onClick={() => goTo('/products')}>products</MenuItem>
              {/* <MenuItem onClick={() => goTo('/woi')}>world of influence</MenuItem> */}
              <MenuItem onClick={() => goTo('/convergence')}>convergence</MenuItem>
              <MenuItem onClick={() => goTo('/coin')}>ink token</MenuItem>
              <MenuItemImage onClick={toggleShowPurchaseFlow}>
                <img style={{width: '100%'}} alt="Referral Program" src={referral}/>
              </MenuItemImage>
              {mobile && (
                <Box display="flex" justifyContent="space-between" alignItems="center" mt={2} px={2}>
                  <img src={twitter} alt="twitter" />
                  <img src={facebook} alt="facebook" />
                  <img src={instagram} alt="instagram" />
                  <img src={youtube} alt="youtube" />
                </Box>
              )}
            </Box>
          </MenuBar>
          <Box
            display='flex'
            gap={2}
            style={!mobile?{
              position: 'absolute',
              right: 0,
              bottom: 0,
            }:{
              margin: 'auto',
              marginTop: '-200px',
              width: 'fit-content'
            }}
            mb={!mobile?2:0}
            mr={!mobile?2:0}
            color={'#a0a0a0'}
          >
            <Typography onClick={() => goTo('/terms')} sx={{ ':hover': { color: '#ff225e' } }}>
              TERMS OF <span style={{display: mobile?'table':'contents'}}>SERVICE</span>
            </Typography>
            |
            <Typography onClick={() => goTo('/policy')} sx={{ ':hover': { color: '#ff225e' } }}>
              PRIVACY <span style={{display: mobile?'table':'contents'}}>POLICY</span>
            </Typography>
            |
            <Typography onClick={() => goTo('/faq')} sx={{ ':hover': { color: '#ff225e' } }}>
              FAQ&apos;s
            </Typography>
            |
            <Link
              href="mailto: support@inktoken.com"
              sx={{ textDecoration: 'none', color: '#a0a0a0', ':hover': { color: '#ff225e' } }}
            >
              SUPPORT
            </Link>
          </Box>
          {!mobile && (
            <Box position="fixed" ml="16px" left={0} bottom={0}>
              <Copyright />
            </Box>
          )}
        </MenuWrapper>
      </Slide>
    </>
  );
};
const CloseButton = styled(Button)`
  padding: 16px 22px;
  padding-bottom: 10px;
  z-index: 8888;
  flex: 0 1 auto;
  margin-bottom: 16px;
  border-radius: 15px 15px 0 0;
  background-color: white;
  img {
    filter: invert(1);
  }
  @media screen and (max-width: 660px) {
    & > div {
      width: 100%;
      padding: 4px 24px 0px 24px;
    }
    margin-bottom: 40px;
  }
`;

const MenuWrapper = styled('div')`
  box-sizing: border-box;
  width: 100%;
  position: fixed;
  bottom: 0px;
  left: 0px;
  z-index: 8888;
  height: 100%;
  background-color: black;
`;

const LeftBorder = styled('img')`
  position: absolute;
  left: -22px;
  bottom: -290px;
  display: block;
  @media screen and (max-width: 1320px) {
    display: none;
  }
`;

const MenuBar = styled('div')`
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  background-color: black;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  align-items: flex-center;
  justify-content: center;
  margin-top: 36px;
  padding: 12px 0;
  & > div {
    ::-webkit-scrollbar {
      width: 0; /* Remove scrollbar space */
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background: #ff0000;
    }
  }
  padding-bottom: 130px;
  @media screen and (max-width: 1351px) {
    max-width: 700px;
    min-width: 300px;
    gap: 9px;
    width: 100%;
    svg {
      width: 100%;
    }
    padding-bottom: 140px;
  }
  @media screen and (max-width: 660px) {
    flex: 1 0 auto;
    align-items: center;
    padding-bottom: 160px;
  }
`;

const PageTitleText = styled('span')`
  text-align: center;
  font-size: 90px;
  color: rgba(0, 0, 0);
  // text-shadow: 0 0 2px rgba(255, 255, 255, 0.8);
  text-shadow: -1px -1px 0 rgba(255, 255, 255, 0.4), 1px -1px 0 rgba(255, 255, 255, 0.4),
    -1px 1px 0 rgba(255, 255, 255, 0.4), 1px 1px 0 rgba(255, 255, 255, 0.4);
  font-family: 'Brolink';
  margin: 0;
  line-height: 90px;
  padding-top: 10px;
  @media screen and (max-width: 660px) {
    font-size: 42px;
    line-height: 52px;
    padding-top: 6px;
  }
`;

const MenuItem = styled('div')`
  width: 100%;
  font-size: 50px;
  line-height: 50px;
  text-transform: uppercase;
  font-family: 'Poppins';
  font-weight: bolder;
  color: white;
  &:nth-of-type(2n + 1) {
    -webkit-text-fill-color: black;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: white;
  }
  cursor: pointer;
  :hover {
    -webkit-text-stroke-width: 4px;
    -webkit-text-stroke-color: #ff225e;
    color: #ff225e;
  }
  @media screen and (max-width: 660px) {
    font-size: 25px;
    line-height: 25px;
  }
`;

const MenuItemImage = styled('div')`
  width: 400px;
  cursor: pointer;
  @media screen and (max-width: 660px) {
    width: 200px;
  }
`;