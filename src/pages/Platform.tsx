import { Box, Typography, useMediaQuery } from '@mui/material';
import { Helmet } from 'react-helmet';

import { PageContent } from '../components/PageContent';
import { APP_TITLE, PAGE_TITLE_PLATFORM } from '../utils/constants';
import platformImg from '../assets/img/platform.png';
import grayRect from '../assets/img/gray-rect.png';
import { Divider, Image, Paragraph, RedButton } from './Components';
import { PurchaseFlowContext } from '../contexts';
import { useContext } from 'react';

export const Platform = () => {
  const xl = useMediaQuery('(max-width: 1200px)');
  const { setShowModal } = useContext(PurchaseFlowContext);
  return (
    <>
      <Helmet>
        <title>
          {PAGE_TITLE_PLATFORM} | {APP_TITLE}
        </title>
      </Helmet>
      <PageContent title={PAGE_TITLE_PLATFORM} type="primary">
        <Box>
          <Box display="flex" flexDirection={xl ? 'column' : 'row'} gap={xl ? 2 : 6} alignItems="center">
            <Box flexGrow={1} width="100%" display="flex" flexDirection="column">
              <Typography variant="h1">platform</Typography>
              <Paragraph paragraph mt="40px">
                On World of Influence, users get paid for bringing their connections and social following into game and
                entertainment experiences. To enable this in a user-friendly, profitable, and entertaining way, we’ve
                engineered unique capabilities.
              </Paragraph>
              <Paragraph paragraph>
                Social sharing is a deeply human experience. A New York Times study on the psychology of sharing
                highlights key reasons compelling users to share content:
              </Paragraph>
              <Paragraph paragraph>
                bringing value to others, growing and nourishing relationships, to market causes or brands, and for
                self-fulfillment. We capitalize on these with enriching games and projects. Then, we supercharge sharing
                potential with real value creation.
              </Paragraph>
              <Divider />
              <Typography variant="subtitle2" fontSize={xl ? '34px' : '40px'} fontWeight="bold" mb={2}>
                INK ID
              </Typography>
              <Paragraph paragraph>
                At signup on our free-to-use platform, every user receives an INK ID. The unique ID is akin to a Google
                login, and is a user’s gateway to the World of Influence. Using this ID, we track user activity and
                compensate users for their platform invites, connections, game activities, and viral reach.
              </Paragraph>
              <Paragraph paragraph>
                No user can join without first being referred – and new users must link to at least one existing user
                via their INK ID at signup, guaranteeing 100% attribution. As such, the INK ID is both a user’s unique
                identifier, as well as their permanent referral code. Importantly, users may invite an unlimited number
                of users, expanding their earning potential.
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
              <Image src={platformImg} alt="gray" />
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection={xl ? 'column-reverse' : 'row'}
            gap={xl ? 2 : 6}
            alignItems="center"
            mt={12}
          >
            <Box width="100%" display="flex" justifyContent="center">
              <Image src={grayRect} alt="gray" />
            </Box>
            <Box flexGrow={1} width="100%" display="flex" flexDirection="column">
              <Divider />
              <Typography variant="subtitle2" fontSize={xl ? '34px' : '40px'} fontWeight="bold" mb={2}>
                PAYMENT &amp; TRACKING
              </Typography>
              <Paragraph paragraph mt="20px">
                Our technology tracks and algorithmically scores the economic value of each user’s social connectivity
                (“impact radius”). The engine then fractionalizes every dollar of revenue generated through the platform
                and distributes it back to the user base. Because connections and activities are permanently and
                limitlessly tracked, every user is incentivized to maximize their impact radius.
              </Paragraph>
              <Paragraph paragraph>
                This infrastructure layer is purpose-built for connectivity and underpins every platform experience. And
                because activities and payments map to a user’s unique INK ID, as the platform grows, users will earn
                simultaneously across our growing set of products or services.
              </Paragraph>
              <Typography variant="subtitle2" fontSize={xl ? '34px' : '40px'} fontWeight="bold" mb={2}>
                DASHBOARDS
              </Typography>
              <Paragraph paragraph>
                Our rich dashboarding experience provides users a window into their influence. For the first time, users
                can visualize their viral footprint and watch its value grow as they expand platform connections and
                engage their audiences.
              </Paragraph>
              <Paragraph paragraph>
                Our polished mobile experience lets users view connections and earnings, while accessing performance
                reporting, network analytics, and withdrawal functionality. Dashboarding capabilities also let users
                quickly share products and services with their unique INK IDs automatically embedded. We quickly turn
                web3 projects, games, and other platform experiences into monetizable campaigns.
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
          </Box>
        </Box>
      </PageContent>
    </>
  );
};
