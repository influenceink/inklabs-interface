import { Box, styled } from '@mui/material';
import { ReactNode } from 'react';
import logo from '../../assets/img/logo-large.png';
import { Link } from 'react-router-dom';

interface PageProps {
  children?: ReactNode;
  title?: string;
}
export const PageContent = (props: PageProps) => {
  const { children, title } = props;
  return (
    <>
      <Box display="flex" justifyContent="center">
        <PageWrapper>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <Box width="100%" mt="24px" py={3} flexGrow={1} overflow="hidden auto">
            {children}
          </Box>
          <Divider />
          <PageTitleText>{title?.toLowerCase()}</PageTitleText>
        </PageWrapper>
      </Box>
    </>
  );
};

const PageWrapper = styled('div')`
  padding: 46px 100px 40px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.92);
  max-width: 2000px;
  width: 100%;
  height: 100vh;
  z-index: 1111;
  -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% calc(100% - 100px), calc(100% - 100px) 100%, 0% 100%, 0% 0%);
  clip-path: polygon(0% 0%, 100% 0%, 100% calc(100% - 100px), calc(100% - 100px) 100%, 0% 100%, 0% 0%);
  & > div {
    ::-webkit-scrollbar {
      width: 0; /* Remove scrollbar space */
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background: #ff0000;
    }
  }
`;

const Divider = styled('div')`
  margin-top: 16px;
  width: 100%;
  height: 0;
  border: 0px dotted rgba(255, 255, 255, 0.3);
  border-top-width: 1px;
`;

const PageTitleText = styled('p')`
  text-align: center;
  font-size: 100px;
  margin: 0;
  color: rgba(0, 0, 0);
  text-shadow: 0 0 2px rgba(255, 255, 255, 0.8);
  font-family: 'Brolink';
`;
