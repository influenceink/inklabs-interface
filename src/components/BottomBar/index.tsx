import { styled } from '@mui/material';

import { MenuButton } from './MenuButton';
import { Copyright } from './Copyright';

export const BottomBar = () => {
  return (
    <FootWrapper>
      <MenuButton />
      <Copyright />
    </FootWrapper>
  );
};

const FootWrapper = styled('div')`
  position: absolute;
  bottom: 0px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 0 35px;
  @media screen and (max-width: 660px) {
    padding: 0;
  }
`;
