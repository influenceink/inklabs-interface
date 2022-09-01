import { Box, styled, Button, Slide, Typography, useMediaQuery, Fade } from '@mui/material';

import { ROADMAP } from '../../utils/constants';
import cross from '../../assets/img/cross.png';

import arrowRight from '../../assets/img/arrow-right.png';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';

interface Props {
  show: boolean;
  setShow: (value: boolean) => void;
}
export const Roadmap = ({ show, setShow }: Props) => {
  const sm = useMediaQuery('(max-width: 780px)');
  return (
    <>
      <Fade in={show} mountOnEnter unmountOnExit>
        <ModalWrapper>
          <RoadmapWrapper>
            {/* <LogoWrapper>
              <Link to="/" onClick={() => setShow(false)}>
                <img src={logo} alt="logo" />
              </Link>
            </LogoWrapper> */}
            <RotatedLargeText>ROaDMaP</RotatedLargeText>
            <RoadmapTextWrapper
              width={sm ? '100%' : 'auto'}
              display="flex"
              flexGrow={1}
              flexDirection="column"
              justifyContent="center"
              gap="2"
              overflow={'auto'}
            >
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
            </RoadmapTextWrapper>
            <CloseButton onClick={() => setShow(false)}>
              <img src={cross} alt="cross" />
            </CloseButton>
          </RoadmapWrapper>
        </ModalWrapper>
      </Fade>
    </>
  );
};

const RoadmapTextWrapper = styled(Box)`
  ::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: #ff0000;
  }
  @media screen and (max-width: 660px) {
    justify-content: normal;
  }
`;

const CloseButton = styled(Button)`
  position: absolute;
  top: 12px;
  right: 5px;
  z-index: 8888;
  @media screen and (max-width: 600px) {
    position: relative;
    right: 0px;
    margin-bottom: 32px;
  }
`;

const ModalWrapper = styled('div')`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  & > div {
    background-color: black;
    border-radius: 15px;
    padding: 60px 80px;
  }
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100vh;
  z-index: 5;
  @media screen and (max-width: 600px) {
    align-items: flex-start;
    & > div {
      width: 100%;
      padding: 40px 24px 24px 24px;
      height: 100vh;
      min-height: 0px;
      overflow-y: auto;
      border-radius: 0px;
    }
  }
`;

const RoadmapWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  background: black;
  position: relative;
  z-index: 9999;
  li {
    font-size: 18px;
  }
  max-width: 600px;
  min-height: 100vh;
  @media screen and (max-width: 780px) {
    li {
      font-size: 14px;
    }
  }
`;

const RotatedLargeText = styled('p')`
  text-align: center;
  font-size: 51px;
  color: rgba(0, 0, 0);
  text-shadow: -1px -1px 0 rgba(255, 255, 255, 0.4), 1px -1px 0 rgba(255, 255, 255, 0.4),
    -1px 1px 0 rgba(255, 255, 255, 0.4), 1px 1px 0 rgba(255, 255, 255, 0.4);
  font-family: 'Brolink';
  margin: 0;
  line-height: 51px;
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
