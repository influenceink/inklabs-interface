import { FC, useState } from 'react';
import { styled } from '@mui/material';

import background from '../../assets/img/background.png';
import { BottomBar } from '../BottomBar';
import { LeftBar } from '../LeftBar';
import { RightBar } from '../RightBar';

export const Layout: FC = ({ children }) => {
  const [lock, setLock] = useState<boolean>(true);
  return (
    <LayoutWrapper>
      {children}
      {!lock && <LeftBar />}
      {!lock && <RightBar />}
      <BottomBar lock={lock} setLock={setLock} />
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled('div')`
  min-height: 100vh;
  background: url(${background});
  background-size: cover;
  position: relative;
  overflow: clip;
`;
