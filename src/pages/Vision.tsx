import { Box, Typography, useMediaQuery } from '@mui/material';
import { Helmet } from 'react-helmet';

import { PageContent } from '../components/PageContent';
import { APP_TITLE, PAGE_TITLE_VISION } from '../utils/constants';
import visionImg from '../assets/img/vision.png';
import { Divider, Image, Paragraph, RedButton } from './Components';

export const Vision = () => {
  const xl = useMediaQuery('(max-width: 1660px)');
  return (
    <>
      <Helmet>
        <title>
          {PAGE_TITLE_VISION} | {APP_TITLE}
        </title>
      </Helmet>
      <PageContent title={PAGE_TITLE_VISION} type="primary">
        <Box display="flex" flexDirection={xl ? 'column' : 'row'} gap={xl ? 2 : 6} alignItems="flex-start">
          <Box flexGrow={1} width={xl ? '100%' : 'auto'} display="flex" flexDirection="column">
            <Typography variant="h1">vision</Typography>
            <Divider />
            <Typography variant="subtitle2" fontSize={xl ? "34px" : "40px"} fontWeight="bold" my={3}>
              A PLATFORM REVOLUTION
            </Typography>
            <Paragraph paragraph>
              We started INK Games on the belief that every game or technology platform user should be able to “INK” a
              livelihood by monetizing their connectivity and viral reach.
            </Paragraph>
            <Paragraph paragraph>
              Although user engagement fuels growth across entertainment, gaming, and web3 – users rarely participate in
              the economic upside. This value hides behind closed algorithms and is harvested by major tech platforms.
            </Paragraph>
            <Paragraph paragraph>
              Today, no platform tracks and quantifies each user’s incremental value and compensates them continually
              for it. Until now. With World of Influence, our proprietary payment and tracking engine, we are building
              the only true web3 economy – one with the potential for unmatched user growth and retention.
            </Paragraph>
            <Box display="flex" gap="24px" justifyContent="start" mt={8} mb={4}>
              <RedButton>reserve ink</RedButton>
              <RedButton>read our litepaper</RedButton>
            </Box>
          </Box>
          <Box width="100%" display="flex" justifyContent="center">
            <Image src={visionImg} alt="gray" />
          </Box>
        </Box>
      </PageContent>
    </>
  );
};
