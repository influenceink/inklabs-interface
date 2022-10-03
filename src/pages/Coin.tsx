import { Box, Typography, useMediaQuery, styled, Grid } from '@mui/material';
import { Helmet } from 'react-helmet';
import { useContext } from 'react';
import { PageContent } from '../components/PageContent';
import { APP_TITLE, PAGE_TITLE_COIN } from '../utils/constants';
import coinImg from '../assets/img/coin.png';
import coin2 from '../assets/img/coin1.jpg';
import symbolImg from '../assets/img/ink.png';
import completeImg from '../assets/img/complete.png';
import hereImg from '../assets/img/here.png';
import { Divider, Image, Paragraph, RedButton } from './Components';
import { PurchaseFlowContext } from '../contexts';

export const Coin = () => {
  const xl = useMediaQuery('(max-width: 1200px)');
  const { setShowModal } = useContext(PurchaseFlowContext);
  return (
    <>
      <Helmet>
        <title>
          {PAGE_TITLE_COIN} | {APP_TITLE}
        </title>
      </Helmet>
      <PageContent title={PAGE_TITLE_COIN} type="primary">
        <Box width="100%">
          <Box width="100%">
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{ float: 'right' }}
              width={!xl ? '30%' : '100%'}
            >
              <CustomImage src={coinImg} alt="gray" height="100%" width="100%" />
            </Box>
            <Typography variant="h1">ink token</Typography>
            <Divider />
            <Box display="flex" justifyContent="space-between" flexWrap="wrap">
              <TokenWrapper>
                <Typography variant="h6">TOKEN NAME:</Typography>
                <Typography variant="h6">INK</Typography>
              </TokenWrapper>
              <TokenWrapper>
                <Typography variant="h6">TOKEN SUPPLY:</Typography>
                <Typography variant="h6">350,000,000,000</Typography>
              </TokenWrapper>
              <TokenWrapper>
                <Typography variant="h6">NETWORK:</Typography>
                <Typography variant="h6">POLYGON &amp; ETHEREUM</Typography>
              </TokenWrapper>
              <TokenWrapper>
                <Typography variant="h6">PRIVATE OFFERING PRICE:</Typography>
                <Typography variant="h6">$0.002 USD/INK</Typography>
              </TokenWrapper>
            </Box>
            <Divider />
            <Box width={!xl ? '70%' : 'auto'} maxWidth="100%">
              <Grid container mb={3} spacing={4} flexWrap="wrap" width="100%">
                {/* <Grid item xs={12} xl={4}>
                  <CardBox>
                    <Typography fontSize={18}>PRIVATE - RD. 1</Typography>
                    <Box display="flex" justifyContent="space-between" alignItems="start">
                      <Typography fontSize={14} color="#787878">
                        Series A &amp; B Investors
                      </Typography>
                      <Box display="flex" flexDirection="column" alignItems="end" color="#29FF3E">
                        <Typography fontSize={10} lineHeight="12px">
                          18 MONTHS VEST
                        </Typography>
                        <Typography fontSize={5} lineHeight="8px">
                          DAILY BLOCK
                        </Typography>
                      </Box>
                    </Box>
                    <Box borderRadius={20} bgcolor="#2E2E40" height="15px" mt={3} mb={3}>
                      <Box width="28px" bgcolor="#1D92DF" height="15px" borderRadius={20}></Box>
                    </Box>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                      <Box display="flex" alignItems="center">
                        <SymbolImg src={symbolImg} height="19px" />
                        <Typography fontSize={14} lineHeight="18px" ml={1}>
                          20,000,000,000
                        </Typography>
                      </Box>
                      <Box display="flex" alignItems="end" flexDirection="column">
                        <Typography fontSize={17} lineHeight="20px" color="#B1C1C8">
                          5.7%
                        </Typography>
                        <Typography fontSize={5} lineHeight="8px" pr="10px" color="#707070">
                          OF TOTAL SUPPLY
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      position="absolute"
                      top={0}
                      left={0}
                      right={0}
                      bottom={0}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <SymbolImg src={completeImg} alt="complete" />
                    </Box>
                  </CardBox>
                </Grid> */}
                <Grid item xs={12} xl={6}>
                  <Box display="flex" flexDirection="column" alignItems="center" minWidth="290px" width="100%">
                    <Box borderRadius="20px" padding="18px 15px 30px" bgcolor="#212130" width="100%">
                      <Typography fontSize={18}>PRIVATE PRESALE</Typography>
                      <Box display="flex" justifyContent="end">
                        {/* <Typography fontSize={14} color="#787878">
                          Institutional
                        </Typography> */}
                        <Box display="flex" flexDirection="column" alignItems="end" color="#29FF3E">
                          <Typography fontSize={10} lineHeight="12px">
                            18 MONTHS VEST
                          </Typography>
                          <Typography fontSize={9} lineHeight="10px">
                            DAILY BLOCK
                          </Typography>
                        </Box>
                      </Box>
                      <Box borderRadius={20} bgcolor="#2E2E40" height="15px" mt={3} mb={3}>
                        <Box width="28px" bgcolor="#F90F95" height="15px" borderRadius={20}></Box>
                      </Box>
                      <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Box display="flex" alignItems="center">
                          <SymbolImg src={symbolImg} height="19px" />
                          <Typography fontSize={14} lineHeight="18px" ml={1}>
                            15,000,000,000
                          </Typography>
                        </Box>
                        <Box display="flex" alignItems="end" flexDirection="column">
                          <Typography fontSize={17} lineHeight="20px" color="#B1C1C8">
                            4.3%
                          </Typography>
                          <Typography fontSize={8} lineHeight="9px" color="#707070">
                            OF TOTAL SUPPLY
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box>
                      <SymbolImg src={hereImg} alt="you are here" />
                    </Box>
                    <Typography color="#11FF60" fontSize="10px">
                      YOU ARE HERE
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} xl={6}>
                  <CardBox>
                    <Typography fontSize={18}>PUBLIC SALE</Typography>
                    <Typography fontSize={14} color="#787878">
                      {'(liquidity bootstrap)*'}
                    </Typography>
                    <Box borderRadius={20} bgcolor="#2E2E40" height="15px" mt={3} mb={3}>
                      <Box width="64px" bgcolor="#29FF3E" height="15px" borderRadius={20}></Box>
                    </Box>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                      <Box display="flex" alignItems="center">
                        <SymbolImg src={symbolImg} height="19px" />
                        <Typography fontSize={14} lineHeight="18px" ml={1}>
                          43,750,000,000
                        </Typography>
                      </Box>
                      <Box display="flex" alignItems="end" flexDirection="column">
                        <Typography fontSize={17} lineHeight="20px" color="#B1C1C8">
                          12.5%
                        </Typography>
                        <Typography fontSize={8} lineHeight="9px" color="#707070">
                          OF TOTAL SUPPLY
                        </Typography>
                      </Box>
                    </Box>
                  </CardBox>
                </Grid>
              </Grid>
            </Box>
            <Paragraph paragraph>
              INK is an ERC-20 compliant utility token for INK Games and our suite of game and platform projects. With
              this standard, we ensure interoperability with popular decentralized applications, digital assets, and
              wallet services. INK holders will be able to unlock exclusive perks and upgrades on the platform through
              two primary methods: (a) upgrading World of Influence membership by spending INK, or (b) staking INK to
              unlock rewards. While INK is not necessary for basic platform participation, we’ve designed the World of
              Influence in such a way that token holders enjoy enhanced experiences and distinct perks leading to token
              demand.
            </Paragraph>
          </Box>
          <Box flexGrow={1} width="100%" display="flex" flexDirection="column" justifyContent="center">
            <Divider />
            <Typography variant="subtitle2" fontSize={xl ? '34px' : '40px'} fontWeight="bold" mb={2}>
              Supply
            </Typography>
            <Paragraph paragraph mt="20px">
              The INK project is designed to ensure a balance of token supply and demand. On the supply side, outside of
              the initial token sales, the primary way INK will be distributed is as a reward currency for platform
              activities.
            </Paragraph>
            <Paragraph paragraph>
              When a user{"'"}s social network generates revenue on our platform, we will reward the originating user a
              fixed number of tokens for a corresponding amount of $USD (or equivalent) spend. In this way, INK
              distribution happens as a result of real economic value creation.
            </Paragraph>
            <Typography variant="subtitle2" fontSize={xl ? '34px' : '40px'} fontWeight="bold" mb={2}>
              Proceeds
            </Typography>
            <Paragraph paragraph>
              Token sale proceeds will fund the roadmap of platform functionality (discussed below). For security and to
              efficiently fund future operating costs, we expect to continuously rebalance currency holdings to achieve
              an approximate 75% exposure to fiat currency (USD held in corporate accounts) and 25% cryptocurrency.
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
      </PageContent>
    </>
  );
};

const TokenWrapper = styled('div')`
  & h6 {
    font-weight: bold;
  }
  width: fit-content;
  & > :last-child {
    color: #11ff60;
  }
  @media screen and (max-width: 1024px) {
    & h6 {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 780px) {
    & h6 {
      font-size: 14px;
    }
  }
  margin-right: 16px;
  margin-top: 8px;
  margin-bottom: 8px;
`;

const CardBox = styled(Grid)`
  position: relative;
  border-radius: 20px;
  padding: 18px 15px 30px;
  background-color: #47475f38;
  min-width: 290px;
  width: 100%;
`;

const CustomImage = styled('img')`
  min-width: 320px;
  max-width: 800px;
  height: auto;
  @media screen and (max-width: 1660px) {
    width: 100%;
    max-width: 608px;
    min-width: 0;
  }
`;

const SymbolImg = styled('img')``;
