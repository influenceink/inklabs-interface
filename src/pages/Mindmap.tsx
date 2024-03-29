import { Box, styled, Typography, useMediaQuery } from '@mui/material';
import { Helmet } from 'react-helmet';

import { PageContent } from '../components/PageContent';
import { APP_TITLE, PAGE_TITLE_MINDMAP } from '../utils/constants';
import mindmap from '../assets/img/mindmap.png';
import grayRect from '../assets/img/gray-rect.png';

const Divider = () => {
  return (
    <Box maxWidth={520} height="1px" display="flex" my={3}>
      <Box width={100} bgcolor="white" />
      <Box bgcolor="#707070" flexGrow={1} />
    </Box>
  );
};

export const Mindmap = () => {
  const xl = useMediaQuery('(max-width: 1660px)');
  return (
    <>
      <Helmet>
        <title>
          {PAGE_TITLE_MINDMAP} | {APP_TITLE}
        </title>
      </Helmet>
      <PageContent title={PAGE_TITLE_MINDMAP}>
        <Box display="flex" flexDirection={xl ? 'column' : 'row'} gap={xl ? 2 : 6} alignItems="flex-start">
          <Box flexGrow={1}>
            <Typography variant="h3">OVERVIEW</Typography>
            <Typography variant="subtitle1">SUB TEXT HERE OR SOME OTHER SUBTITLE</Typography>
            <Divider />
            <Paragraph paragraph>
              The most valuable assets a user can bring to any platform are their personal engagement followed by their
              viral connectivity. Harvesting this value has enabled tech platforms across entertainment, gaming and web3
              to dominate the landscape.
            </Paragraph>
            <Paragraph paragraph>
              While users are inherently responsible for this platform growth, they historically haven’t participated
              economically. No platform has ever endeavored to track and quantify each user’s marginal value, and then
              compensate them perpetually for that value. Until now. Until INK Labs.
            </Paragraph>
            <Paragraph paragraph>
              INK was founded in 2018 on the premise that every user should be able to “INK” a livelihood by monetizing
              their owned connectivity and viral reach. This value has traditionally been hidden behind closed
              algorithms, and harvested exclusively by the major tech platforms.
            </Paragraph>
            <Paragraph paragraph>
              For years, we have been developing a revolutionary Payment &amp; Tracking engine that will, for the first
              time, unmask a user’s true connectivity and viral reach. Once unmasked, this value can be shared back to
              the user on a perpetual basis. The INK platform will mark the first shift toward community-incentivized
              platform growth, while unlocking new income opportunities for 6.6B smartphone users globally.
            </Paragraph>
            <Paragraph paragraph>
              While we have been developing our technology for years, the recent advent of web3 has allowed us to
              augment our model. We’ve taken a responsible approach to web3 development, only implementing aspects that
              improve the user experience on the INK platform and provide true value, such as asset liquidity and crypto
              payouts.
            </Paragraph>
            <Paragraph paragraph>
              We’re already living in a present where users create all the value. INK is building a future where they’re
              paid for it.
            </Paragraph>
          </Box>
          <Box width="100%" display="flex" justifyContent="center">
            <Image src={mindmap} alt="mindmap" />
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection={xl ? 'column-reverse' : 'row'}
          gap={xl ? 2 : 6}
          alignItems="flex-start"
          mt={8}
        >
          <Box width="100%" display="flex" justifyContent="center">
            <Image src={grayRect} alt="gray" />
          </Box>
          <Box flexGrow={1}>
            <Typography variant="h3">NEXT HEADER</Typography>
            <Typography variant="subtitle1">SUB TEXT HERE OR SOME OTHER SUBTITLE</Typography>
            <Divider />
            <Paragraph paragraph>
              The most valuable assets a user can bring to any platform are their personal engagement followed by their
              viral connectivity. Harvesting this value has enabled tech platforms across entertainment, gaming and web3
              to dominate the landscape.
            </Paragraph>
            <Paragraph paragraph>
              While users are inherently responsible for this platform growth, they historically haven’t participated
              economically. No platform has ever endeavored to track and quantify each user’s marginal value, and then
              compensate them perpetually for that value. Until now. Until INK Labs.
            </Paragraph>
            <Paragraph paragraph>
              INK was founded in 2018 on the premise that ev ery user should be able to “INK” a livelihood by monetizing
              their owned connectivity and viral reach. This value has traditionally been hidden behind closed
              algorithms, and harvested exclusively by the major tech platforms.
            </Paragraph>
            <Paragraph paragraph>
              For years, we have been developing a revolutionary Payment &amp; Tracking engine that will, for the first
              time, unmask a user’s true connectivity and viral reach. Once unmasked, this value can be shared back to
              the user on a perpetual basis. The INK platform will mark the first shift toward community-incentivized
              platform growth, while unlocking new income opportunities for 6.6B smartphone users globally.
            </Paragraph>
            <Paragraph paragraph>
              While we have been developing our technology for years, the recent advent of web3 has allowed us to
              augment our model. We’ve taken a responsible approach to web3 development, only implementing aspects that
              improve the user experience on the INK platform and provide true value, such as asset liquidity and crypto
              payouts.
            </Paragraph>
            <Paragraph paragraph>
              We’re already living in a present where users create all the value. INK is building a future where they’re
              paid for it.
            </Paragraph>
          </Box>
        </Box>
      </PageContent>
    </>
  );
};

const Image = styled('img')`
  width: 100%;
  min-width: 850px;
  @media screen and (max-width: 1660px) {
    width: 100%;
    max-width: 850px;
    min-width: 0;
  }
`;

const Paragraph = styled(Typography)`
  font-size: 13px;
`;
