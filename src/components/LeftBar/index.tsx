import { FC, useState, useEffect, useMemo } from 'react';
import { Button, styled, Typography } from '@mui/material';

import playBtn from '../../assets/img/play.png';
import pauseBtn from '../../assets/img/pause.png';
import audioBarStop from '../../assets/img/audio-bar-stop-mobile.png';
import audioBar from '../../assets/img/audio-bar.gif';
import backSound from '../../assets/audio/atmospheric-tech.mp3';

export const LeftBar: FC = () => {
  const [play, setPlay] = useState(false);
  const audio = useMemo(() => new Audio(backSound), []);
  const togglePlay = () => {
    setPlay((play) => !play);
  };
  useEffect(() => {
    play ? audio.play() : audio.pause();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [play]);

  return (
    <LeftBarWrapper>
      <StyledButton onClick={togglePlay}>
        <Playing src={play ? audioBar : audioBarStop} alt="playing" />
        <StyledImg>
          <img src={play ? pauseBtn : playBtn} alt="play" />
        </StyledImg>
        <Line />
        <RotatedText variant="caption">TURN {!play ? 'ON' : 'OFF'} SOUNDS</RotatedText>
      </StyledButton>
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
  gap: 8px;
  align-items: center;
  width: 28px;
  @media screen and (max-width: 660px) {
    left: 8px;
    width: 20px;
  }
`;
const StyledButton = styled(Button)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  align-items: center;
  padding: 24px 0;
  color: white;
`;
const Line = styled('div')`
  max-height: 40px;
  height: 40px;
  width: 2px;
  background-color: white;
`;

const RotatedText = styled(Typography)`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
`;

const StyledImg = styled('div')`
  padding-top: 0;
  padding-bottom: 0;
  border: none;
  background: transparent;
  // cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 660px) {
    transform: rotate(-90deg);
  }
`;

const Playing = styled('img')`
  width: 22px;
  @media screen and (max-width: 660px) {
    transform: rotate(-90deg);
  }
`;
