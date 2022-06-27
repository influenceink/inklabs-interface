import { FC } from 'react';
import { styled } from '@mui/material';

import background from '../../assets/img/background.png'

export const Layout: FC = ({ children }) => {

  return (
    <LayoutWrapper>
      {children}
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled('div')`
  min-height: 100vh;
  background: url(${background});
  background-size: cover;
`;
