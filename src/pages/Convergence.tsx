import { Box, Typography, useMediaQuery } from '@mui/material';
import { Helmet } from 'react-helmet';

import { PageContent } from '../components/PageContent';
import { APP_TITLE, PAGE_TITLE_CONVERGENCE } from '../utils/constants';
import convergenceImg from '../assets/img/convergence.png';
import { Divider, Image, Paragraph, RedButton } from './Components';

export const Convergence = () => {
  const xl = useMediaQuery('(max-width: 1660px)');
  return (
    <>
      <Helmet>
        <title>
          {PAGE_TITLE_CONVERGENCE} | {APP_TITLE}
        </title>
      </Helmet>
      <PageContent title={PAGE_TITLE_CONVERGENCE} type="primary">
        <Box display="flex" flexDirection={xl ? 'column' : 'row'} gap={xl ? 2 : 6} alignItems="flex-start">
          <Box flexGrow={1} width={xl ? '100%' : 'auto'} display="flex" flexDirection="column">
            <Typography variant="h1">convergence</Typography>
            <Divider />
            <Typography variant="subtitle2" fontSize={xl ? '34px' : '40px'} fontWeight="bold" my={3}>
              OVERVIEW
            </Typography>
            <Paragraph paragraph>
              Our team expects users to play, share, and participate simultaneously across our various F2E games, INK
              Land, and future projects. We call this: overlap by design.
            </Paragraph>
            <Paragraph paragraph>
              By crafting ways for platform projects or experiences to intersect – for instance, using multi-purpose
              assets or cross-functional rewards – we add platform “stickiness.” Importantly, this incentivizes new user
              onboarding and boosts opportunities for users to generate income.
            </Paragraph>
            <Paragraph paragraph>
              Consider two illustrative examples of how users may be incentivized to participate across the platform:
            </Paragraph>
            <ul>
              <li>
                <Paragraph paragraph>
                  A user may acquire ZIP and Postal territories to access connectivity outside of their existing social
                  reach. This could multiply earning potential from future game invites.
                </Paragraph>
              </li>
              <li>
                <Paragraph paragraph>
                  INK earned through “Prize Kingdoms” gameplay may be used to purchase digital assets (skin, avatar,
                  totem, etc) in a future platform game title.
                </Paragraph>
              </li>
            </ul>
            <Box display="flex" gap="24px" justifyContent="start" sx={{ marginTop: { md: '64px' } }} mb={4}>
              <RedButton>reserve ink</RedButton>
              <RedButton>read our litepaper</RedButton>
            </Box>
          </Box>
          <Box width="100%" display="flex" justifyContent="center">
            <Image src={convergenceImg} alt="gray" />
          </Box>
        </Box>
      </PageContent>
    </>
  );
};
