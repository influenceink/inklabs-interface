import {
  Box,
  styled,
  Button,
  Typography,
  useMediaQuery,
  MenuItem,
  FormControl,
  Dialog,
  DialogContent,
  Select,
} from '@mui/material';
import { useState } from 'react';

import cross from '../../assets/img/cross.png';
import React from 'react';
import { connectionData } from '.';
import { Pagination } from '../../components/Pagination';

interface Props {
  show: boolean;
  setShow: (value: boolean) => void;
}

const ROWS_PER_PAGE = 9;

export const Connections = ({ show, setShow }: Props) => {
  const [type, setType] = useState('Newest');
  const [page, setPage] = useState(1);

  const handleChange = (event: any) => {
    setType(event.target.value as string);
  };

  const handleClose = (event: React.SyntheticEvent<unknown>, reason?: string) => {
    if (reason !== 'backdropClick') {
      setShow(false);
    }
  };
  return (
    <>
      <ModalWrapper open={show} onClose={handleClose}>
        <DialogContent>
          <Box display="flex" flexGrow={1} flexDirection="column" justifyContent="center" gap="2">
            <Box display="flex" gap="14px" alignItems="center">
              <ModalHeader>DIRECT CONNECTIONS</ModalHeader>
              <FormControl variant="outlined" sx={{ minWidth: 100 }}>
                <CustomSelect
                  value={type}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Newest">Newest</MenuItem>
                </CustomSelect>
              </FormControl>
              <CloseButton onClick={() => setShow(false)}>
                <img src={cross} alt="cross" />
              </CloseButton>
            </Box>
            <ConnectionsWrapper>
              {connectionData.slice(ROWS_PER_PAGE * (page - 1), ROWS_PER_PAGE * page).map((connection) => (
                <Box
                  key={connection.id}
                  display="flex"
                  justifyContent="space-between"
                  borderBottom={1}
                  borderColor="#2E2E40"
                  py="14px"
                  width="100%"
                >
                  <Typography fontSize="12px">{connection.name}</Typography>
                  <Typography fontSize="12px">{connection.date}</Typography>
                </Box>
              ))}
            </ConnectionsWrapper>
            <Pagination
              page={page}
              total={Math.ceil(connectionData.length / ROWS_PER_PAGE)}
              onChange={(value: number) => setPage(value)}
            />
            <Typography textAlign="center" fontSize="8px" fontWeight="semibold" mt={1}>
              PAGE {`${page}/${Math.ceil(connectionData.length / ROWS_PER_PAGE)}`}
            </Typography>
          </Box>
        </DialogContent>
      </ModalWrapper>
    </>
  );
};

const CloseButton = styled(Button)`
  min-width: 0px;
  padding: 6px;
  img {
    width: 22px;
  }
`;

const ModalWrapper = styled(Dialog)`
  .MuiDialog-container {
    background: #111111;
    padding: 56px 14px;
    & > div {
      margin: 0px;
      background: #212130;
      min-height: 100%;
      border-radius: 20px;
      width: 100%;
      max-width: 400px;
      & > div {
        padding: 30px 15px;
      }
    }
  }
`;
const ModalHeader = styled('span')`
  padding: 12px;
  background: #111111;
  flex-grow: 1;
  border-radius: 100px;
  font-size: 13px;
  line-height: 16px;
  font-weight: semibold;
  color: #fff;
  text-align: center;
  min-height: 40px;
`;

const CustomSelect = styled(Select)`
  border-radius: 50px;
  background: #0babf926;
  border: none;
  margin: 0;
  min-height: 40px;
  .MuiSelect-select {
    padding: 12px 16px;
    padding-right: 32px;
  }
  input {
    border: none;
  }
  fieldset {
    border: none;
  }
`;

const ConnectionsWrapper = styled('div')`
  display: flex;
  margin: 32px 0px;
  padding: 0 12px;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
