import { Box, styled, Button, Slide, Typography } from '@mui/material';
import arrowRight from '../../assets/img/arrow-right.png';
import { ROADMAP } from '../../utils/constants';

export const Roadmap = ({ show, setShow }: { show: boolean; setShow: Function }) => {
  return (
    <>
      <Slide direction="left" in={show} mountOnEnter unmountOnExit>
        <RoadmapWrapper>
          <RotatedLargeText>roadmap</RotatedLargeText>
          <Box width='500px' display="flex" flexDirection="column" justifyContent="center" gap='2'>
            {ROADMAP.map((step: { status: string; lists: string[] }, index: number) => (
              <Box display="flex" alignItems="center" justifyContent='space-between' key={index}>
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
            <RotatedSmallText>ROADMAP</RotatedSmallText>
            <StyledButton onClick={() => setShow()}>
              <img src={arrowRight} alt="roadmap" />
            </StyledButton>
            <RotatedSmallText>INKLABS</RotatedSmallText>
          </RightBarWrapper>
        </RoadmapWrapper>
      </Slide>
    </>
  );
};

const RoadmapWrapper = styled('div')`
  box-sizing: border-box;
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
`;

const RotatedLargeText = styled('p')`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
  text-align: center;
  font-size: 110px;
  margin: 0;
  color: black;
  text-shadow: 0 0 2px rgba(255, 255, 255, 0.8);
  font-family: 'Brolink';
`;

const RotatedBaseText = styled(Typography)`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
  text-align: center;
  font-size: 17px;
  margin: 0;
`;

const RightBarWrapper = styled('div')`
  margin-right: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  align-items: flex-end;
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
`;
