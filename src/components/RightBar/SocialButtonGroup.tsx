import { Typography, Box, styled, useMediaQuery } from '@mui/material';

import twitter from '../../assets/img/twitter.png';
import facebook from '../../assets/img/facebook.png';
import instagram from '../../assets/img/instagram.png';
import youtube from '../../assets/img/youtube.png';

export const SocialButtonGroup = () => {
  const sm = useMediaQuery('(max-width: 660px)');
  return (
    <>
      <SocialWrapper>
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
      </SocialWrapper>
    </>
  );
};
const SocialWrapper = styled(Box)`
  display: flex;
  flex-direction: column-reverse;
  background-color: black;
  border-radius: 20px 0 0 20px;
  align-items: center;
  gap: 20px;
  padding: 40px 20px;
  @media screen and (max-width: 660px) {
    padding: 20px 10px;
    border-radius: 10px 0 0 10px;
    background-color: rgba(0, 0, 0, 0.8);
  }
`;
const SocialButton = styled('a')`
  transform: rotate(-90deg);
  display: flex;
  margin: 0 1px;
  @media screen and (max-width: 660px) {
    img {
      width: 16px;
    }
  }
`;
