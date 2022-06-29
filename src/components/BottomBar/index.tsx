import { styled } from '@mui/material';

import { SocialButtonGroup } from './SocialButtonGroup';
import { MenuButton } from './MenuButton';
import { Copyright } from './Copyright';

export const BottomBar = ({ lock, setLock }: { lock: boolean; setLock: Function }) => {
  return (
    <FootWrapper>
      <SocialButtonGroup />
      <MenuButton lock={lock} setLock={setLock} />
      <Copyright />
    </FootWrapper>
  );
};

const FootWrapper = styled('div')`
  position: absolute;
  bottom: 0px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 35px;
  @media screen and (max-width: 660px) {
    padding: 0 8px;
  }
`;
