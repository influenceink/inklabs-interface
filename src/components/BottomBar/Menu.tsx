import { Link, useHistory } from 'react-router-dom';
import { Box, styled, Button, Slide, Typography, useMediaQuery } from '@mui/material';
import leftBar from '../../assets/img/left-border.png';
import cross from '../../assets/img/cross1.png';
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
            <MenuBar>
              <Box display="flex" flexDirection="column" gap={4}>
                <Row onClick={() => goTo('/woi')}>world of influence</Row>
                <Row onClick={() => goTo('/games')}>games</Row>
                <Row onClick={() => goTo('/platform')}>platform tech</Row>
                <Row onClick={() => goTo('/coin')}>ink token</Row>
                <Row onClick={() => goTo('/convergence')}>convergence</Row>
                <Row onClick={() => goTo('/vision')}>vision</Row>
              </Box>
            </MenuBar>
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
  @media screen and (max-width: 660px) {
    height: 100vh;
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
    max-width: 700px;
    min-width: 300px;
    gap: 9px;
    width: 100%;
    svg {
      width: 100%;
    }
  }
  @media screen and (max-width: 660px) {
    flex: 1 0 auto;
    align-items: center;
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
  width: 100%;
  font-size: 60px;
  line-height: 60px;
  text-transform: uppercase;
  font-family: 'Poppins';
  color: white;
  &:nth-child(2n + 1) {
    -webkit-text-fill-color: black;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: white;
  }
  cursor: pointer;
  @media screen and (max-width: 660px) {
    font-size: 40px;
    line-height: 40px;
  }
`;
