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
  min-width: 600px;
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
  background-color: white;
  -webkit-clip-path: polygon(0% 0%, 0% calc(100% - 20px), 20px 100%, 100% 100%, 100% 20px, calc(100% - 20px) 0%, 0% 0%);
  clip-path: polygon(0% 0%, 0% calc(100% - 20px), 20px 100%, 100% 100%, 100% 20px, calc(100% - 20px) 0%, 0% 0%);
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
  aspect-ratio: 4;
  transition: all 0.2s;
  &:hover {
    // background-position: left;
    -webkit-clip-path: polygon(0% 0%, 0% 100%, 20px 100%, 100% 100%, 100% 0%, calc(100% - 20px) 0%, 0% 0%);
    clip-path: polygon(0% 0%, 0% 100%, 20px 100%, 100% 100%, 100% 0%, calc(100% - 20px) 0%, 0% 0%);
    color: black;
    background-color: white;
  }
  &:before {
    --path: 2% 9%, 2% calc(100% - 22px), 20px 91%, 98% 91%, 98% 22px, calc(100% - 20px) 9%, 2% 9%;
    transition: all 0.2s;
    content: '';
    width: 100%;
    height: 100%;
    -webkit-clip-path: polygon(var(--path));
    clip-path: polygon(var(--path));
    position: absolute;
    background: linear-gradient(0.25turn, white 0% 50%, #ff225e 50% 100%);
    background-size: 200% 100% !important;
    background-position: right;
    z-index: -1;
  }
  &:hover:before {
    background-position: left;
  }
  &:after {
    --path: 1% 4%, 1% calc(100% - 20px), 20px 96%, 99% 96%, 99% 20px, calc(100% - 20px) 4%, 1% 4%;
    transition: all 0.2s;
    content: '';
    width: 100%;
    height: 100%;
    -webkit-clip-path: polygon(var(--path));
    clip-path: polygon(var(--path));
    position: absolute;
    background-color: black;
    background-size: 200% 100% !important;
    background-position: right;
    z-index: -2;
  }
  &:hover:after {
    --path: 1% 4%, 1% 96%, 20px 96%, 99% 96%, 99% 4%, calc(100% - 20px) 4%, 1% 4%;
    -webkit-clip-path: polygon(var(--path));
    clip-path: polygon(var(--path));
    background-position: left;
  }
`;
