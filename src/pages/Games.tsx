import { Box, Typography, useMediaQuery } from '@mui/material';
import { Helmet } from 'react-helmet';

import { PageContent } from '../components/PageContent';
import { APP_TITLE, PAGE_TITLE_GAMES } from '../utils/constants';
import gamesImg from '../assets/img/games.jpg';
import { Divider, Image, Paragraph, RedButton } from './Components';
import { PurchaseFlowContext } from '../contexts';
import { useContext } from 'react';

export const Games = () => {
  const xl = useMediaQuery('(max-width: 1200px)');
  const { setShowModal } = useContext(PurchaseFlowContext);
  return (
    <>
      <Helmet>
        <title>
          {PAGE_TITLE_GAMES} | {APP_TITLE}
        </title>
      </Helmet>
      <PageContent title={PAGE_TITLE_GAMES} type="primary">
        <Box display="flex" flexDirection={xl ? 'column' : 'row'} gap={xl ? 2 : 6} alignItems="center">
          <Box flexGrow={1} width="100%" display="flex" flexDirection="column">
            <Typography variant="h1">Games</Typography>
            <Divider />
            <Typography
              variant="subtitle2"
              fontSize={xl ? '34px' : '40px'}
              fontWeight="bold"
              my={3}
              lineHeight={xl ? '32px' : '38px'}
            >
              Free-to-earn (F2E)
              <br />
              mobile game development & curation
            </Typography>

            <Paragraph paragraph>At INK GAMES, we don’t just build games, we redefine categories.</Paragraph>
            <Paragraph paragraph>
              For the last two years, our team has been pioneering a game model combining big-funnel, free-to-play with
              web3 play-to-earn. Within the F2E arena, we will develop AAA-quality, mobile games enabling users to earn
              real prizes, bonuses, or income for their participation.
            </Paragraph>
            <Paragraph paragraph>
              Prize Kingdoms is our flagship mobile game product integrating a traditional “big funnel, low-friction”
              approach of free-to-play gaming. We’ve improved the game experience with a revolutionary rewards system
              offering real prizes, cash, and tokens. Prize Kingdoms relies on our proprietary Prize Engine, a custom
              set of technology and APIs. Our platform, including payment and tracking capabilities, will eventually be
              licensable or available to other game developers.
            </Paragraph>

            <Box display="flex" gap="24px" justifyContent="start" sx={{ marginTop: { md: '64px' } }} mb={4}>
              <RedButton onClick={() => setShowModal(true)}>reserve ink</RedButton>
              <RedButton
                onClick={() => window.open('https://ink-games.gitbook.io/ink-games-litepaper/y1oSbwlz4PSu8kIHeuHp/')}
              >
                read our litepaper
              </RedButton>
            </Box>
          </Box>
          <Box width="100%" display="flex" justifyContent="center">
            <Image src={gamesImg} alt="gray" />
          </Box>
        </Box>
      </PageContent>
    </>
  );
};
