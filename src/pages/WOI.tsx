import { Box, Typography, useMediaQuery, styled } from '@mui/material';
import { Helmet } from 'react-helmet';
import { PageContent } from '../components/PageContent';
import { APP_TITLE, PAGE_TITLE_INFLUENCE } from '../utils/constants';
import influenceImg from '../assets/img/influence.png';
import { Divider, Image, Paragraph, RedButton } from './Components';
import { PurchaseFlowContext } from '../contexts';
import { useContext } from 'react';

export const WOI = () => {
  const xl = useMediaQuery('(max-width: 1200px)');
  const { setShowModal } = useContext(PurchaseFlowContext);
  return (
    <>
      <Helmet>
        <title>
          {PAGE_TITLE_INFLUENCE} | {APP_TITLE}
        </title>
      </Helmet>
      <PageContent title={PAGE_TITLE_INFLUENCE} type="primary">
        <Box display="flex" flexDirection={xl ? 'column' : 'row'} gap={xl ? 2 : 6} alignItems="center">
          <Box flexGrow={1} width="100%" display="flex" flexDirection="column" justifyContent="center">
            <Headline variant="h1">world of influence</Headline>
            <Divider />
            <Paragraph paragraph>
              Starting this fall, users can join and invite others into a world of shareable social gaming projects.
              With revolutionary payment technology, we’ve unlocked limitless attribution, tracking, and revenue sharing
              based on connectivity and viral reach. No game or social platform incentivizes users like we do. The more
              that users participate and invite others into games and projects, the more they earn.
            </Paragraph>
            <Paragraph paragraph>
              As we develop AAA-quality games, we will become the first game or social platform to reward the full
              extent of users’ connections and followers.
            </Paragraph>
            <Paragraph paragraph>
              Within the World of Influence we are incorporating web3 principles to enhance economic value and usability
              for users. Enabling this innovation is INK – our native platform token and currency.
            </Paragraph>
            <Paragraph paragraph>
              We’re living in a world where users create all the value. INK ensures they’re now paid for it.
            </Paragraph>
            <Box display="flex" gap="24px" justifyContent="start" mb={4} sx={{ marginTop: { md: '64px' } }}>
              <RedButton onClick={() => setShowModal(true)}>reserve ink</RedButton>
              <RedButton
                onClick={() => window.open('https://ink-games.gitbook.io/ink-games-litepaper/y1oSbwlz4PSu8kIHeuHp/')}
              >
                read our litepaper
              </RedButton>
            </Box>
          </Box>
          <Box width="100%" display="flex" justifyContent="center">
            <Image src={influenceImg} alt="gray" />
          </Box>
        </Box>
      </PageContent>
    </>
  );
};

const Headline = styled(Typography)`
  @media screen and (max-width: 1375px) {
    font-size: 75px;
  }
  @media screen and (max-width: 1200px) {
    font-size: 90px;
  }
  @media screen and (max-width: 790px) {
    font-size: 72px;
  }
  @media screen and (max-width: 670px) {
    font-size: 42px;
  }
`;
