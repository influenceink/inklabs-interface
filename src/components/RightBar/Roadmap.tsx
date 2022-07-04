import { Box, styled, Button, Slide, Typography, useMediaQuery } from '@mui/material';

import { ROADMAP } from '../../utils/constants';

import arrowRight from '../../assets/img/arrow-right.png';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';

export const Roadmap = ({ show, setShow }: { show: boolean; setShow: Function }) => {
  const sm = useMediaQuery('(max-width: 780px)');
  return (
    <>
      <Slide direction="left" in={show} mountOnEnter unmountOnExit>
        <RoadmapWrapper>
          <LogoWrapper>
            <Link to="/home" onClick={() => setShow(false)}>
              <img src={logo} alt="logo" />
            </Link>
          </LogoWrapper>
          <RotatedLargeText>roAdmAp</RotatedLargeText>
          <Box width={sm ? '100%' : '500px'} display="flex" flexDirection="column" justifyContent="center" gap="2">
            {ROADMAP.map((step: { status: string; lists: string[] }, index: number) => (
              <Box display="flex" alignItems="center" justifyContent="space-between" key={index}>
                <ul>
                  {step.lists.map((line: string) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                <RotatedBaseText>{step.status}</RotatedBaseText>
              </Box>
            ))}
          </Box>
          <RightBarWrapper>
            <RotatedSmallText variant="caption">ROADMAP</RotatedSmallText>
            <StyledButton onClick={() => setShow()}>
              <img src={arrowRight} alt="roadmap" />
            </StyledButton>
            <RotatedSmallText variant="caption">INKLABS</RotatedSmallText>
          </RightBarWrapper>
        </RoadmapWrapper>
      </Slide>
    </>
  );
};

const LogoWrapper = styled('div')`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  display: none;
  justify-content: center;
  padding-top: 46px;
  z-index: 10;
  @media screen and (max-width: 780px) {
    padding-top: 26px;
    display: flex;
  }
`;

const RoadmapWrapper = styled('div')`
  // box-sizing: border-box;
  height: 100vh;
  display: flex;
  position: absolute;
  top: 0px;
  right: -25px;
  background: black;
  z-index: 9999;
  li {
    font-size: 18px;
  }
  @media screen and (max-width: 780px) {
    li {
      font-size: 11px;
    }
    width: 100vw;
    position: fixed;
    left: 0px;
  }
`;

const RotatedLargeText = styled('p')`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
  text-align: center;
  font-size: 110px;
  margin: 0;
  color: black;
  // text-shadow: 0 0 2px rgba(255, 255, 255, 0.8);
  text-shadow: -1px -1px 0 rgba(255, 255, 255, 0.4), 1px -1px 0 rgba(255, 255, 255, 0.4),
    -1px 1px 0 rgba(255, 255, 255, 0.4), 1px 1px 0 rgba(255, 255, 255, 0.4);
  font-family: 'Brolink';
  @media screen and (max-width: 780px) {
    display: none;
  }
`;

const RotatedBaseText = styled(Typography)`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
  text-align: center;
  font-size: 17px;
  margin: 0;
  font-weight: bold;
  @media screen and (max-width: 780px) {
    font-size: 11px;
  }
`;

const RightBarWrapper = styled('div')`
  margin-right: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  align-items: flex-end;
  @media screen and (max-width: 780px) {
    margin-right: 8px;
  }
`;

const RotatedSmallText = styled(Typography)`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
`;

const StyledButton = styled(Button)`
  border: none;
  background: transparent;
  cursor: pointer;
  @media screen and (max-width: 780px) {
    img {
      width: 60px;
    }
  }
`;
