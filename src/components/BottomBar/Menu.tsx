import { Link, useHistory } from 'react-router-dom';
import { Box, styled, Button, Slide, Typography, useMediaQuery } from '@mui/material';
import leftBar from '../../assets/img/left-border.png';
import cross from '../../assets/img/cross.png';
import logo from '../../assets/img/logo.png';
import { useEffect } from 'react';
import { Experiences } from './MenuAreas/Experiences';
import { Games } from './MenuAreas/Games';
import { Platform } from './MenuAreas/Platform';
import { Territories } from './MenuAreas/Territories';
import { Vision } from './MenuAreas/Vision';
import { Bridge } from './MenuAreas/Bridge';
import { Coin } from './MenuAreas/Coin';
interface Props {
  show: boolean;
  setShow: (value: boolean) => void;
}

export const Menu = ({ show, setShow }: Props) => {
  const mobile = useMediaQuery('(max-width: 1350px)');
  const history = useHistory();
  const goTo = (path: string) => {
    setShow(false);
    history.push(path);
  };
  return (
    <>
      <Slide direction="up" in={show} mountOnEnter unmountOnExit>
        <MenuWrapper>
          <Box
            position="relative"
            display="flex"
            flexDirection="column"
            maxWidth="2000px"
            width="100%"
            gap="12px"
            alignItems="center"
          >
            <LeftBorder src={leftBar} alt="border" />
            {!mobile ? (
              <MenuBar>
                <Experiences onMenuClick={goTo} />
                <Bridge onMenuClick={goTo} />
                <Games onMenuClick={goTo} />
                <Platform onMenuClick={goTo} />
                <Coin onMenuClick={goTo} />
                <Territories onMenuClick={goTo} />
                <Vision onMenuClick={goTo} />
              </MenuBar>
            ) : (
              <MenuBar>
                <Row>
                  <Experiences onMenuClick={goTo} />
                  <Games onMenuClick={goTo} />
                </Row>
                <Row>
                  <Bridge onMenuClick={goTo} />
                </Row>
                <Row>
                  <Platform onMenuClick={goTo} />
                  <Coin onMenuClick={goTo} />
                  <Territories onMenuClick={goTo} />
                </Row>
                <Row>
                  <Vision onMenuClick={goTo} />
                </Row>
              </MenuBar>
            )}
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography variant="subtitle1">CLICK ON EACH ITEM TO VIEW MORE DETAILS</Typography>
              <PageTitleText>MINDMaP</PageTitleText>
            </Box>
            <CloseButton onClick={() => setShow(false)}>
              <img src={cross} alt="cross" />
            </CloseButton>
          </Box>
        </MenuWrapper>
      </Slide>
    </>
  );
};
const CloseButton = styled(Button)`
  padding: 16px 22px;
  padding-bottom: 10px;
  border-radius: 10px 10px 0 0;
  z-index: 8888;
  background-color: white;
  img {
    filter: invert(1);
  }
`;

const MenuWrapper = styled('div')`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;
  & > div {
    background-color: black;
    border-radius: 15px 15px 0 0;
    padding: 4px 64px 0px 64px;
  }
  position: absolute;
  bottom: 0px;
  left: 0px;
  z-index: 8888;
  @media screen and (max-width: 1320px) {
    & > div {
      width: 100%;
      padding: 4px 24px 0px 24px;
    }
  }
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
  max-width: 1350px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: center;
  margin-top: 36px;
  border: 0px solid white;
  border-bottom-width: 2px;
  padding: 12px 0;
  @media screen and (max-width: 1351px) {
    max-width: 388px;
    min-width: 300px;
    gap: 9px;
    width: 100%;
    svg {
      width: 100%;
    }
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

const Row = styled('div')`
  display: flex;
  gap: 9px;
  // margin-top: 9px;
  width: 100%;
  justify-content: center;
`;
