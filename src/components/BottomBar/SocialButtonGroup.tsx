import { Typography, Box, styled } from '@mui/material';

import twitter from '../../assets/img/twitter.png';
import facebook from '../../assets/img/facebook.png';
import instagram from '../../assets/img/instagram.png';
import youtube from '../../assets/img/youtube.png';

export const SocialButtonGroup = () => {
  return (
    <>
      <Box display="flex" flexDirection="column" gap={1} mb={3}>
        <Box display="flex" gap={2} mx={1} alignItems="center">
          <Typography paragraph fontSize={8} mb={0}>
            FOLLOW US
          </Typography>
          <Underline />
        </Box>
        <Box display="flex" gap={3} alignItems="center">
          <SocialButton href="https://twitter.com" target="_blank" rel="noreferrer">
            <img src={twitter} alt="twitter" />
          </SocialButton>
          <SocialButton href="https://facebook.com" target="_blank" rel="noreferrer">
            <img src={facebook} alt="facebook" />
          </SocialButton>
          <SocialButton href="https://instagram.com" target="_blank" rel="noreferrer">
            <img src={instagram} alt="instagram" />
          </SocialButton>
          <SocialButton href="https://youtube.com" target="_blank" rel="noreferrer">
            <img src={youtube} alt="youtube" />
          </SocialButton>
        </Box>
      </Box>
    </>
  );
};

const Underline = styled('div')`
  height: 2px;
  background-color: white;
  flex-grow: 1;
`;

const SocialButton = styled('a')`
  display: flex;
  margin: 0 1px;
`;
