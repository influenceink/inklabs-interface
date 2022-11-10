import { Box, Typography, useMediaQuery, styled } from '@mui/material';
import { Helmet } from 'react-helmet';

import { PageContent } from '../components/PageContent';
import { APP_TITLE, PAGE_TITLE_VISION } from '../utils/constants';
import visionImg from '../assets/img/vision.jpg';
import stepImg1 from '../assets/img/step1.png';
import stepImg2 from '../assets/img/step2.png';
import stepImg3 from '../assets/img/step3.png';
import { Divider, Image, Paragraph, RedButton } from './Components';
import { PurchaseFlowContext } from '../contexts';
import { useContext } from 'react';

export const Vision = () => {
  const xl = useMediaQuery('(max-width: 1200px)');
  const { setShowModal } = useContext(PurchaseFlowContext);
  return (
    <>
      <Helmet>
        <title>
          {PAGE_TITLE_VISION} | {APP_TITLE}
        </title>
      </Helmet>
      <PageContent title={PAGE_TITLE_VISION} type="primary">
        <Box display="flex" flexDirection="column" width="100%">
          <Box display="flex" width="100%" flexDirection={xl ? 'column' : 'row'} gap={xl ? 2 : 6} alignItems="center">
            <Box flexGrow={1} width="100%" display="flex" flexDirection="column">
              <Typography variant="h1">vision</Typography>
              <Divider />
              <Typography variant="subtitle2" fontSize={xl ? '34px' : '40px'} fontWeight="bold" my={3}>
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
              <Box
                display="flex"
                gap="24px"
                justifyContent="start"
                mt={8}
                mb={4}
                sx={{ marginTop: { xs: '16px', md: '64px' } }}
              >
                <RedButton onClick={() => setShowModal(true)}>reserve ink</RedButton>
                <RedButton
                  onClick={() => window.open('https://ink-games.gitbook.io/ink-games-litepaper/y1oSbwlz4PSu8kIHeuHp/')}
                >
                  read our litepaper
                </RedButton>
              </Box>
            </Box>
            <Box width="100%" display="flex" justifyContent="center">
              <Image src={visionImg} alt="gray" />
            </Box>
          </Box>
          <Box width="100%" mt={3} mb={3}>
            <Box bgcolor="#707070" width="100%" height="1px" />
            <Box width="100%" mt={2}>
              <StepBox>
                <img alt="" src={stepImg1}/>
                <div>
                  <ul>
                    <li>Payment & tracking engine build out</li>
                    <li>INK white paper</li>
                    <li>INK ZIPs NFTs private pre-sale</li>
                    <li>INK token private offering</li>
                    <li>Prize Kingdoms (P2E) soft launch</li>
                  </ul>
                </div>
              </StepBox>
              <StepBox>
                <img alt="" src={stepImg2}/>
                <div>
                  <ul>
                    <li>INK Platform Dashboard + INK Mastercard</li>
                    <li>INK token public offering</li>
                    <li>INK token staking and swapping functionality</li>
                    <li>INK Crypto Club (alpha)</li>
                    <li>Prize Kingdoms (P2E) worldwide launch</li>
                    <li>In-house NFT collections development</li>
                    <li>NFT project partnerships</li>
                  </ul>
                </div>
              </StepBox>
              <StepBox>
                <img alt="" src={stepImg3}/>
                <div>
                  <ul>
                    <li>INK ZIPs functionality expansion</li>
                    <li>New game prject (TBA)</li>
                    <li>Advanced platform analytics & gamfication</li>
                  </ul>
                </div>
              </StepBox>
            </Box>
          </Box>
        </Box>
      </PageContent>
    </>
  );
};

const StepBox = styled(Box)`
  width: 33%;
  display: inline-grid;
  padding: 5px 10px;

  & img {
    width: 100%;
  }

  @media screen and (max-width: 1200px) {
    width: 50%
  }

  @media screen and (max-width: 900px) {
    width: 100%
  }
`;
