import { Box, styled, Typography, useMediaQuery, Button } from '@mui/material';
import { Helmet } from 'react-helmet';
import { PageContent } from '../../components/PageContent';
import { APP_TITLE, PAGE_TITLE_PROFILE } from '../../utils/constants';
import logo from '../../assets/img/ink.png';
import pinkCard from '../../assets/img/card1.png';
import blueCard from '../../assets/img/card2.png';
import greenCard from '../../assets/img/card3.png';
import yellowCard from '../../assets/img/card4.png';
import { useState, useContext, useEffect, ChangeEvent } from 'react';
import { ZipCodes } from './ZipCodes';
import { Connections } from './Connections';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../contexts';
import cross from '../../assets/img/cross.png';
import { ImageUpload } from '../../components/ImageUpload';
import { getZIPState } from '../../utils';

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
  const history = useHistory();
  const {
    avatar,
    balances,
    viralCount,
    directCount,
    setAvatar,
    totalCount,
    authorized,
    inkId,
    zipCodes,
    signOut,
    userInfo,
  } = useContext(AuthContext);
  const handleAvatarUpload = (ev: ChangeEvent<HTMLInputElement>) => {
    if (ev.target && ev.target.files) setAvatar(window.URL.createObjectURL(ev.target!.files[0]) || '');
  };
  useEffect(() => {
    if (!authorized) history.push('/');
    else userInfo();
  }, [authorized, history, userInfo]);

  return (
    <>
      <Helmet>
        <title>
          {PAGE_TITLE_PROFILE} | {APP_TITLE}
        </title>
      </Helmet>
      <PageContent title={PAGE_TITLE_PROFILE} type="secondary">
        <ProfileWrapper>
          <ScrollWrapper
            pt="168px"
            bgcolor="#111111"
            px="24px"
            display="flex"
            gap="12px"
            alignItems="center"
            flexDirection="column"
            position="relative"
            overflow="hidden auto"
          >
            <AvatarWrapper htmlFor="upload_avatar">
              <Avatar src={avatar} alt="" />
              <ImageUpload />
              <input type="file" id="upload_avatar" accept="image/png, image/jpeg" onChange={handleAvatarUpload} />
            </AvatarWrapper>
            <Typography variant="subtitle2" mt={1} fontWeight="semibold" fontSize="18px" lineHeight="18px">
              @{inkId}
            </Typography>
            {/* <Typography variant="subtitle2" fontWeight="semibold" fontSize="12px" color="#fff7">
              Austin, Texas
            </Typography> */}
            <Box display="flex" alignItems="center" width="100%" mt={2}>
              <StatCard>
                <Typography variant="subtitle2" fontWeight="bold" fontSize="19px" lineHeight="19px">
                  {directCount.toLocaleString()}
                </Typography>
                <Typography variant="subtitle2" fontSize="9px" color="#fff5">
                  Direct Connections
                </Typography>
              </StatCard>
              <RoundedText>+</RoundedText>
              <StatCard>
                <Typography variant="subtitle2" fontWeight="bold" fontSize="19px" lineHeight="19px">
                  {viralCount.toLocaleString()}
                </Typography>
                <Typography variant="subtitle2" fontSize="9px" color="#fff5">
                  Viral Connections
                </Typography>
              </StatCard>
              <RoundedText>=</RoundedText>
              <StatCard sx={{ cursor: 'pointer' }} onClick={() => setShowConnection(true)}>
                <Typography variant="subtitle2" fontWeight="bold" fontSize="19px" lineHeight="19px">
                  {totalCount.toLocaleString()}
                </Typography>
                <Typography variant="subtitle2" fontSize="9px" color="#fff5">
                  Total Connections
                </Typography>
              </StatCard>
            </Box>
            <StatCard>
              <Box display="flex" alignItems="center" gap="8px" fontWeight="bold" fontSize="20px">
                <TokenImg src={logo} alt="" />
                <Typography variant="subtitle2" fontWeight="bold" fontSize="23px" lineHeight="23px">
                  {Number(balances.reserved_ink).toLocaleString()}
                </Typography>
                INK
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
                <Cards data={zipCodes.slice(0, 6)} />
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
              <StyledButton onClick={() => history.push('/faq')}>faq&lsquo;s</StyledButton>
            </Box>
            <SignOutButton
              onClick={() => {
                signOut();
                history.push('/');
              }}
            >
              sign out
            </SignOutButton>
            <CloseButton onClick={() => history.push('/')}>
              <img src={cross} alt="close" />
            </CloseButton>
          </ScrollWrapper>
        </ProfileWrapper>
      </PageContent>
      <ZipCodes show={showZip} setShow={setShowZip} />
      <Connections show={showConnection} setShow={setShowConnection} />
    </>
  );
};

export const Cards = ({ data }: any) => {
  const randomCardImg = () => {
    if (Math.random() < 0.25) return pinkCard;
    if (Math.random() < 0.5) return blueCard;
    if (Math.random() < 0.75) return greenCard;
    return yellowCard;
  };
  return data.map((code: any, index: number) => {
    return (
      <Box
        key={index}
        display="flex"
        justifyContent="center"
        // flexWrap="wrap"
        p="8px"
        alignItems="center"
        gap="8px"
        bgcolor="#111"
        borderRadius="11px"
      >
        <CardImage src={randomCardImg()} alt="" />
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography variant="subtitle2" fontSize="19px" fontWeight="bold" color="#fff">
            {code}
          </Typography>
          <Typography variant="subtitle2" fontSize="9px" color="#fff">
            {getZIPState(code)}
          </Typography>
          <Typography variant="subtitle2" fontSize="9px" color="#FF9318">
            Legendary
          </Typography>
        </Box>
      </Box>
    );
  });
};

const ScrollWrapper = styled(Box)`
  ::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: #ff0000;
  }
`;

const ProfileWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-bottom: 110px;
  background-color: #111111;
`;
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
const AvatarWrapper = styled('label')`
  position: relative;
  & > input {
    display: none;
  }
  & > svg {
    position: absolute;
    display: none;
    top: -24px;
    left: calc(50% - 16px);
  }
  &:hover > svg {
    display: block;
  }
  &:hover > img {
    opacity: 0.5;
  }
  cursor: pointer;
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

const CloseButton = styled(Button)`
  position: absolute;
  top: 46px;
  right: 8px;
  min-width: unset;
  width: fit-content;
  z-index: 8888;
  padding: 0;
  @media screen and (max-width: 660px) {
    top: 26px;
    & > img {
      width: 26px;
      height: 26px;
    }
  }
`;

const SignOutButton = styled(Button)`
  color: white;
  margin-top: 16px;
  align-self: end;
  font-weight: bold;
  font-size: 16px;
  width: fit-content;
  z-index: 8888;
  padding: 0;
  @media screen and (max-width: 660px) {
    top: 26px;
    align-self: center;
    margin-top: 0px;
    margin-bottom: 8px;
  }
`;
