import { Box, Typography, useMediaQuery } from '@mui/material';
import { Helmet } from 'react-helmet';

import { PageContent } from '../components/PageContent';
import { APP_TITLE, PAGE_TITLE_FAQ, FAQS } from '../utils/constants';
import { Divider, Image, Paragraph, RedButton } from './Components';
import { PurchaseFlowContext } from '../contexts';
import { useContext } from 'react';

export const FAQ = () => {
  const xl = useMediaQuery('(max-width: 1200px)');
  const { setShowModal } = useContext(PurchaseFlowContext);
  return (
    <>
      <Helmet>
        <title>
          {PAGE_TITLE_FAQ} | {APP_TITLE}
        </title>
      </Helmet>
      <PageContent title={PAGE_TITLE_FAQ} type="primary">
        <Box display="flex" flexDirection={xl ? 'column' : 'row'} gap={xl ? 2 : 6} alignItems="center">
          <Box flexGrow={1} width="100%" display="flex" flexDirection="column">
            <Typography variant="h1">FAQ</Typography>
            <Divider />
            {FAQS.map((faq, index) => (
              <Box mt={2} key={index}>
                <Typography variant="subtitle2" fontSize={xl ? '22px' : '24px'} fontWeight="bold" mt={3} mb={2}>
                  {faq.question}
                </Typography>
                {faq.answer.split('%%').map((answer, _index) => (
                  <Paragraph key={_index}>{answer}</Paragraph>
                ))}
              </Box>
            ))}

            <Box display="flex" gap="24px" justifyContent="start" sx={{ marginTop: { md: '64px', xs: '32px' } }} mb={4}>
              <RedButton onClick={() => setShowModal(true)}>reserve ink</RedButton>
              <RedButton
                onClick={() => window.open('https://ink-games.gitbook.io/ink-games-litepaper/y1oSbwlz4PSu8kIHeuHp/')}
              >
                read our litepaper
              </RedButton>
            </Box>
          </Box>
        </Box>
      </PageContent>
    </>
  );
};
