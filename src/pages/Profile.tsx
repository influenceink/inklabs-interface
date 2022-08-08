import { Box, styled, Typography, useMediaQuery } from '@mui/material';
import { Helmet } from 'react-helmet';

import { PageContent } from '../components/PageContent';
import { APP_TITLE, PAGE_TITLE_PROFILE } from '../utils/constants';

const Divider = () => {
  return (
    <Box maxWidth={520} height="1px" display="flex" my={3}>
      <Box width={100} bgcolor="white" />
      <Box bgcolor="#707070" flexGrow={1} />
    </Box>
  );
};

export const Profile = () => {
  const xl = useMediaQuery('(max-width: 1660px)');
  return (
    <>
      <Helmet>
        <title>
          {PAGE_TITLE_PROFILE} | {APP_TITLE}
        </title>
      </Helmet>
      <PageContent title={PAGE_TITLE_PROFILE} type="secondary">
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
