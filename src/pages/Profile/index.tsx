import { Box, styled, Typography, useMediaQuery, Button } from '@mui/material';
import { Helmet } from 'react-helmet';

import { PageContent } from '../../components/PageContent';
import { APP_TITLE, PAGE_TITLE_PROFILE } from '../../utils/constants';
import profilePic from '../../assets/img/profile.png';
import logo from '../../assets/img/logo.png';
import pinkCard from '../../assets/img/card1.png';
import blueCard from '../../assets/img/card2.png';
import greenCard from '../../assets/img/card3.png';
import yellowCard from '../../assets/img/card4.png';
import { useState } from 'react';
import { ZipCodes } from './ZipCodes';
import { Connections } from './Connections';

export const zipData = [
  {
    id: 0,
    image: yellowCard,
    zip: 10001,
    area: 'Hollywood, CA',
    type: 'Legendary',
  },
  {
    id: 1,
    image: greenCard,
    zip: 10001,
    area: 'Hollywood, CA',
    type: 'Legendary',
  },
  {
    id: 2,
    image: blueCard,
    zip: 10001,
    area: 'Hollywood, CA',
    type: 'Legendary',
  },
  {
    id: 3,
    image: pinkCard,
    zip: 10001,
    area: 'Hollywood, CA',
    type: 'Legendary',
  },
  {
    id: 4,
    image: blueCard,
    zip: 10001,
    area: 'Hollywood, CA',
    type: 'Legendary',
  },
  {
    id: 5,
    image: yellowCard,
    zip: 10001,
    area: 'Hollywood, CA',
    type: 'Legendary',
  },
  {
    id: 6,
    image: greenCard,
    zip: 10001,
    area: 'Hollywood, CA',
    type: 'Legendary',
  },
  {
    id: 7,
    image: pinkCard,
    zip: 10001,
    area: 'Hollywood, CA',
    type: 'Legendary',
  },
  {
    id: 8,
    image: pinkCard,
    zip: 10001,
    area: 'Hollywood, CA',
    type: 'Legendary',
  },
  {
    id: 9,
    image: yellowCard,
    zip: 10001,
    area: 'Hollywood, CA',
    type: 'Legendary',
  },
  {
    id: 10,
    image: blueCard,
    zip: 10001,
    area: 'Hollywood, CA',
    type: 'Legendary',
  },
  {
    id: 11,
    image: greenCard,
    zip: 10001,
    area: 'Hollywood, CA',
    type: 'Legendary',
  },
  {
    id: 12,
    image: greenCard,
    zip: 10001,
    area: 'Hollywood, CA',
    type: 'Legendary',
  },
  {
    id: 13,
    image: pinkCard,
    zip: 10001,
    area: 'Hollywood, CA',
    type: 'Legendary',
  },
  {
    id: 14,
    image: yellowCard,
    zip: 10001,
    area: 'Hollywood, CA',
    type: 'Legendary',
  },
  {
    id: 15,
    image: pinkCard,
    zip: 10001,
    area: 'Hollywood, CA',
    type: 'Legendary',
  },
  {
    id: 16,
    image: blueCard,
    zip: 10001,
    area: 'Hollywood, CA',
    type: 'Legendary',
  },
  {
    id: 17,
    image: blueCard,
    zip: 10001,
    area: 'Hollywood, CA',
    type: 'Legendary',
  },
  {
    id: 18,
    image: greenCard,
    zip: 10001,
    area: 'Hollywood, CA',
    type: 'Legendary',
  },
  {
    id: 19,
    image: pinkCard,
    zip: 10001,
    area: 'Hollywood, CA',
    type: 'Legendary',
  },
  {
    id: 20,
    image: yellowCard,
    zip: 10001,
    area: 'Hollywood, CA',
    type: 'Legendary',
  },
  {
    id: 21,
    image: greenCard,
    zip: 10001,
    area: 'Hollywood, CA',
    type: 'Legendary',
  },
  {
    id: 22,
    image: blueCard,
    zip: 10001,
    area: 'Hollywood, CA',
    type: 'Legendary',
  },
  {
    id: 23,
    image: pinkCard,
    zip: 10001,
    area: 'Hollywood, CA',
    type: 'Legendary',
  },
  {
    id: 24,
    image: pinkCard,
    zip: 10001,
    area: 'Hollywood, CA',
    type: 'Legendary',
  },
  {
    id: 25,
    image: greenCard,
    zip: 10001,
    area: 'Hollywood, CA',
    type: 'Legendary',
  },
  {
    id: 26,
    image: blueCard,
    zip: 10001,
    area: 'Hollywood, CA',
    type: 'Legendary',
  },
  {
    id: 27,
    image: blueCard,
    zip: 10001,
    area: 'Hollywood, CA',
    type: 'Legendary',
  },
  {
    id: 28,
    image: greenCard,
    zip: 10001,
    area: 'Hollywood, CA',
    type: 'Legendary',
  },
  {
    id: 29,
    image: yellowCard,
    zip: 10001,
    area: 'Hollywood, CA',
    type: 'Legendary',
  },
  {
    id: 30,
    image: pinkCard,
    zip: 10001,
    area: 'Hollywood, CA',
    type: 'Legendary',
  },
];
export const connectionData = [
  {
    id: 0,
    name: 'RICKY BOBBY1',
    date: 'Nov 21st, 2020',
  },
  {
    id: 1,
    name: 'RICKY BOBBY2',
    date: 'Nov 21st, 2020',
  },
  {
    id: 2,
    name: 'RICKY BOBBY3',
    date: 'Nov 21st, 2020',
  },
  {
    id: 3,
    name: 'RICKY BOBBY4',
    date: 'Nov 21st, 2020',
  },
  {
    id: 4,
    name: 'RICKY BOBBY5',
    date: 'Nov 21st, 2020',
  },
  {
    id: 5,
    name: 'RICKY BOBBY6',
    date: 'Nov 21st, 2020',
  },
  {
    id: 6,
    name: 'RICKY BOBBY7',
    date: 'Nov 21st, 2020',
  },
  {
    id: 7,
    name: 'RICKY BOBBY8',
    date: 'Nov 21st, 2020',
  },
  {
    id: 8,
    name: 'RICKY BOBBY9',
    date: 'Nov 21st, 2020',
  },
  {
    id: 9,
    name: 'RICKY BOBBY0',
    date: 'Nov 21st, 2020',
  },
  {
    id: 10,
    name: 'RICKY BOBBY1',
    date: 'Nov 21st, 2020',
  },
  {
    id: 11,
    name: 'RICKY BOBBY3',
    date: 'Nov 21st, 2020',
  },
  {
    id: 12,
    name: 'RICKY BOBBY5',
    date: 'Nov 21st, 2020',
  },
  {
    id: 13,
    name: 'RICKY BOBBY7',
    date: 'Nov 21st, 2020',
  },
  {
    id: 14,
    name: 'RICKY BOBBY9',
    date: 'Nov 21st, 2020',
  },
  {
    id: 15,
    name: 'RICKY BOBBY0',
    date: 'Nov 21st, 2020',
  },
  {
    id: 16,
    name: 'RICKY BOBBY2',
    date: 'Nov 21st, 2020',
  },
  {
    id: 17,
    name: 'RICKY BOBBY4',
    date: 'Nov 21st, 2020',
  },
  {
    id: 18,
    name: 'RICKY BOBBY6',
    date: 'Nov 21st, 2020',
  },
  {
    id: 19,
    name: 'RICKY BOBBY8',
    date: 'Nov 21st, 2020',
  },
  {
    id: 20,
    name: 'RICKY BOBBY0',
    date: 'Nov 21st, 2020',
  },
  {
    id: 21,
    name: 'RICKY BOBBY1',
    date: 'Nov 21st, 2020',
  },
  {
    id: 22,
    name: 'RICKY BOBBY2',
    date: 'Nov 21st, 2020',
  },
  {
    id: 23,
    name: 'RICKY BOBBY3',
    date: 'Nov 21st, 2020',
  },
  {
    id: 24,
    name: 'RICKY BOBBY4',
    date: 'Nov 21st, 2020',
  },
  {
    id: 25,
    name: 'RICKY BOBBY5',
    date: 'Nov 21st, 2020',
  },
  {
    id: 26,
    name: 'RICKY BOBBY6',
    date: 'Nov 21st, 2020',
  },
  {
    id: 27,
    name: 'RICKY BOBBY7',
    date: 'Nov 21st, 2020',
  },
  {
    id: 28,
    name: 'RICKY BOBBY8',
    date: 'Nov 21st, 2020',
  },
  {
    id: 29,
    name: 'RICKY BOBBY9',
    date: 'Nov 21st, 2020',
  },
  {
    id: 30,
    name: 'RICKY BOBBY10',
    date: 'Nov 21st, 2020',
  },
  {
    id: 31,
    name: 'RICKY BOBBY11',
    date: 'Nov 21st, 2020',
  },
  {
    id: 32,
    name: 'RICKY BOBBY14',
    date: 'Nov 21st, 2020',
  },
  {
    id: 33,
    name: 'RICKY BOBBY15',
    date: 'Nov 21st, 2020',
  },
  {
    id: 34,
    name: 'RICKY BOBBY1',
    date: 'Nov 21st, 2020',
  },
  {
    id: 35,
    name: 'RICKY BOBBY2',
    date: 'Nov 21st, 2020',
  },
  {
    id: 36,
    name: 'RICKY BOBBY3',
    date: 'Nov 21st, 2020',
  },
  {
    id: 37,
    name: 'RICKY BOBBY4',
    date: 'Nov 21st, 2020',
  },
  {
    id: 38,
    name: 'RICKY BOBBY5',
    date: 'Nov 21st, 2020',
  },
];

export const Profile = () => {
  const xl = useMediaQuery('(max-width: 1660px)');
  const [showZip, setShowZip] = useState(false);
  const [showConnection, setShowConnection] = useState(false);

  return (
    <>
      <Helmet>
        <title>
          {PAGE_TITLE_PROFILE} | {APP_TITLE}
        </title>
      </Helmet>
      <PageContent title={PAGE_TITLE_PROFILE} type="secondary">
        <Box
          mt="168px"
          bgcolor="#111111"
          px="24px"
          display="flex"
          gap="12px"
          alignItems="center"
          flexDirection="column"
          pb={3}
        >
          <Avatar src={profilePic} alt="" />
          <Typography variant="subtitle2" mt={1} fontWeight="semibold" fontSize="18px" lineHeight="18px">
            @Cryticalmass
          </Typography>
          <Typography variant="subtitle2" fontWeight="semibold" fontSize="12px" color="#fff7">
            Austin, Texas
          </Typography>
          <Box display="flex" alignItems="center" width="100%" mt={2}>
            <StatCard>
              <Typography variant="subtitle2" fontWeight="bold" fontSize="19px" lineHeight="19px">
                2,736
              </Typography>
              <Typography variant="subtitle2" fontSize="9px" color="#fff5">
                Direct Connections
              </Typography>
            </StatCard>
            <RoundedText>+</RoundedText>
            <StatCard>
              <Typography variant="subtitle2" fontWeight="bold" fontSize="19px" lineHeight="19px">
                163
              </Typography>
              <Typography variant="subtitle2" fontSize="9px" color="#fff5">
                Viral Connections
              </Typography>
            </StatCard>
            <RoundedText>=</RoundedText>
            <StatCard sx={{ cursor: 'pointer' }} onClick={() => setShowConnection(true)}>
              <Typography variant="subtitle2" fontWeight="bold" fontSize="19px" lineHeight="19px">
                2,889
              </Typography>
              <Typography variant="subtitle2" fontSize="9px" color="#fff5">
                Total Connections
              </Typography>
            </StatCard>
          </Box>
          <StatCard>
            <Box display="flex" alignItems="center" gap="8px">
              <TokenImg src={logo} alt="" />
              <Typography variant="subtitle2" fontWeight="bold" fontSize="23px" lineHeight="23px">
                253,945.01
              </Typography>
            </Box>
            <Typography variant="subtitle2" fontSize="9px" color="#fff5">
              Total Ink Token Reserved
            </Typography>
          </StatCard>
          <StatCard>
            <Typography variant="subtitle2" fontSize="13px" fontWeight="semibold" color="#fff3">
              YOUR ZIP CODES
            </Typography>
            <CardListWrapper>
              <Cards data={zipData.slice(0, 6)} />
            </CardListWrapper>
            <Box mt={1} px="6px" width="100%">
              <StyledButton onClick={() => setShowZip(true)}>view all</StyledButton>
            </Box>
          </StatCard>
          <Box
            bgcolor="#28292E"
            borderRadius="19px "
            width="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="12px"
            py="24px"
            px="12px"
          >
            <Typography variant="subtitle2" fontSize="13px" fontWeight="semibold" color="#fff3">
              HAVE QUESTIONS??
            </Typography>
            <StyledButton>faq&lsquo;s</StyledButton>
          </Box>
        </Box>
      </PageContent>
      <ZipCodes show={showZip} setShow={setShowZip} />
      <Connections show={showConnection} setShow={setShowConnection} />
    </>
  );
};

export const Cards = ({ data }: any) => {
  return data.map((card: any) => {
    return (
      <Box
        key={card.id}
        display="flex"
        justifyContent="center"
        // flexWrap="wrap"
        p="8px"
        alignItems="center"
        gap="8px"
        bgcolor="#111"
        borderRadius="11px"
      >
        <CardImage src={card.image} alt="" />
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography variant="subtitle2" fontSize="19px" fontWeight="bold" color="#fff">
            {card.zip}
          </Typography>
          <Typography variant="subtitle2" fontSize="9px" color="#fff">
            {card.area}
          </Typography>
          <Typography variant="subtitle2" fontSize="9px" color="#FF9318">
            {card.type}
          </Typography>
        </Box>
      </Box>
    );
  });
};
const TokenImg = styled('img')`
  height: 24px;
`;
const CardImage = styled('img')`
  min-width: 0px;
`;
const Avatar = styled('img')`
  width: 155px;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 10px;
  margin-top: -90px;
`;

const StatCard = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #212130;
  border-radius: 19px;
  padding: 20px 6px;
  text-align: center;
  gap: 4px;
  width: 100%;
`;
const CardListWrapper = styled('div')`
  display: grid;
  margin-top: 12px;
  padding: 0 6px;
  grid-template-columns: minmax(10px, 1fr) minmax(10px, 1fr);
  align-items: center;
  justify-items: stretch;
  gap: 12px;
  width: 100%;
`;

const RoundedText = styled('span')`
  font-weight: bold;
  font-size: 16px;
  color: #baff31;
  background-color: #111111;
  border: 2px solid #212130;
  min-width: 24px;
  height: 24px;
  border-radius: 100%;
  text-align: center;
  margin: 0 -9px;
  z-index: 1;
`;

const StyledButton = styled(Button)`
  border-radius: 100px;
  background-color: #293eff;
  padding: 11px;
  width: 100%;
  font-family: 'Montserrat';
  font-size: 16px;
  font-weight: bold;
  color: white;
  :hover {
    background-color: #314fff;
  }
`;
