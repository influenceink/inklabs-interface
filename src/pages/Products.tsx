import { Box, Typography, useMediaQuery } from '@mui/material';
import { Helmet } from 'react-helmet';

import { PageContent } from '../components/PageContent';
import { APP_TITLE, PAGE_TITLE_PRODUCTS } from '../utils/constants';
import gamesImg from '../assets/img/games.jpg';
import productsImg from '../assets/img/products.jpg';
import { Divider, Image, Paragraph, RedButton } from './Components';
import { PurchaseFlowContext } from '../contexts';
import { useContext } from 'react';

export const Products = () => {
  const xl = useMediaQuery('(max-width: 1200px)');
  const { setShowModal } = useContext(PurchaseFlowContext);
  return (
    <>
      <Helmet>
        <title>
          {PAGE_TITLE_PRODUCTS} | {APP_TITLE}
        </title>
      </Helmet>
      <PageContent title={PAGE_TITLE_PRODUCTS} type="primary">
        <Box>
          <Box>
            <Box width="100%">
              <Box width={xl ? '100%' : '50%'} display="flex" justifyContent="center" sx={{ float: 'right' }}>
                <Image src={productsImg} alt="gray" />
              </Box>
              <Typography variant="h1">products</Typography>
              <Divider />
              <Typography variant="subtitle2" fontSize={xl ? '34px' : '40px'} fontWeight="bold" mb={2}>
                GAMING
              </Typography>

              <Paragraph paragraph>At INK GAMES, we don’t just build games, we redefine categories.</Paragraph>
              <Paragraph paragraph>
                For the last two years, our team has been pioneering a game model combining big-funnel, free-to-play
                with web3 play-to-earn. Within the F2E arena, we will develop AAA-quality, mobile games enabling users
                to earn real prizes, bonuses, or income for their participation.
              </Paragraph>
              <Paragraph paragraph>
                Prize Kingdoms is our flagship mobile game product integrating a traditional “big funnel, low-friction”
                approach of free-to-play gaming. We’ve improved the game experience with a revolutionary rewards system
                offering real prizes, cash, and tokens. Prize Kingdoms relies on our proprietary Prize Engine, a custom
                set of technology and APIs.
              </Paragraph>
            </Box>
            <Box flexGrow={1} width="100%" display="flex" flexDirection="column">
              <Typography variant="subtitle2" fontSize={xl ? '34px' : '40px'} fontWeight="bold" mb={2}>
                ZIP CODES &amp; POSTALS
              </Typography>
              <Paragraph paragraph mt="20px">
                Using an intelligent &lsquo;&lsquo;ZIP and Postal Code&rsquo;&rsquo; land allocation structure, we
                enable users to own property connected to the real-world. As the platform expands, users may monetize
                platform activities connected to their owned geographies. This blurs the boundary of virtual and
                real-world asset ownership.
              </Paragraph>
              <Paragraph paragraph>
                On our platform, every digital parcel maps to an actual location. Through this, we can support the only
                digital real-estate opportunity that both confers permanent ownership of NFT-based assets, and allows
                owners to participate in a web3 economy. A limited number of these ZIP and Postal codes are available –
                each purchasable and represented by a non-fungible, transferable, digital asset stored in a smart
                contract.
              </Paragraph>
              <Typography variant="subtitle2" fontSize={xl ? '34px' : '40px'} fontWeight="bold" mb={2}>
                CRYPTO CLUB
              </Typography>
              <Paragraph paragraph>
                To support global user onboarding to the web3 economy, our team is coordinating a series of
                crypto-related project offerings. Crypto Club–our first planned experience–is a subscription service
                providing monthly delivery of curated crypto assets, NFTs, and other digital goods. Each month, “packs”
                filled with valuable cryptocurrencies and NFTs will drop. These packs offer subscribers a chance to
                score rare, popular crypto collectibles: everything from bitcoin to a Bored Ape.
              </Paragraph>
              <Paragraph paragraph>
                This allows anyone, anywhere, to enjoy cryptocurrencies and NFTs safely – without education or technical
                expertise.
              </Paragraph>
              <Paragraph paragraph>
                Our team is constantly exploring new opportunities to incentivize subscribers with members-only NFT
                promotions, access to in-house gaming titles, and real world events.
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
