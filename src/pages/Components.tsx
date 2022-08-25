import { Box, Button, styled, Typography } from '@mui/material';
import redBtn from '../assets/img/button-pink.png';

export const Divider = () => {
  return (
    <Box maxWidth={540} height="1px" display="flex" my={3}>
      <Box width={150} bgcolor="white" />
      <Box bgcolor="#707070" flexGrow={1} />
    </Box>
  );
};

export const Image = styled('img')`
  width: 100%;
  min-width: 850px;
  object-fit: cover;
  aspect-ratio: 1.4;
  border-radius: 12px;
  @media screen and (max-width: 1660px) {
    width: 100%;
    max-width: 850px;
    min-width: 0;
  }
`;

export const Paragraph = styled(Typography)`
  font-size: 13px;
`;

export const RedButton = styled(Button)`
  background-image: url(${redBtn});
  background-size: 100% 100%;
  width: 100%;
  font-size: 14px;
  padding: 16px 0;
  font-style: italic;
  font-weight: bold;
  max-width: 225px;
  color: white;
  padding: 4px 6px;
  line-height: 16px;
  aspect-ratio: 4
`;
