import { FC, useState } from 'react';
import { Button, styled } from '@mui/material';
import playBtn from '../../assets/img/play.png';
import pauseBtn from '../../assets/img/pause.png';
import audioBar from '../../assets/img/audio-bar.gif';
import audioBarStop from '../../assets/img/audio-bar-stop.png';

export const LeftBar: FC = () => {
  const [play, setPlay] = useState(false);
  const togglePlay = () => {
    setPlay((play) => !play);
  };
  return (
    <LeftBarWrapper>
      <Playing src={play ? audioBar : audioBarStop} alt="playing" />
      <StyledButton onClick={togglePlay}>
        <img src={play ? pauseBtn : playBtn} alt="play" />
      </StyledButton>
      <Line />
      <RotatedText>TURN ON SOUNDS</RotatedText>
    </LeftBarWrapper>
  );
};

const LeftBarWrapper = styled('div')`
  position: absolute;
  left: 25px;
  top: 0px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  align-items: center;
  width: 28px;
`;

const Line = styled('div')`
  max-height: 40px;
  height: 40px;
  width: 2px;
  background-color: white;
`;
const RotatedText = styled('p')`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
`;

const StyledButton = styled(Button)`
  border: none;
  background: transparent;
  cursor: pointer;
`;

const Playing = styled('img')`
  width: 28px;
`;
