import { FC, useState } from 'react';
import { Button, styled, Typography } from '@mui/material';
import { SocialButtonGroup } from './SocialButtonGroup';

export const RightBar: FC = () => {
  return (
    <RightBarWrapper>
      <SocialButtonGroup />
    </RightBarWrapper>
  );
};

const RightBarWrapper = styled('div')`
  position: absolute;
  right: 0px;
  top: 0px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  align-items: flex-end;
`;
