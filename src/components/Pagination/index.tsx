import { Box, Button, styled } from '@mui/material';
import { useMemo } from 'react';

interface Props {
  page: number;
  total: number;
  onChange: (value: number) => void;
}
export const Pagination = ({ page, total, onChange }: Props) => {
  const handlePrev = () => {
    if (page > 1) onChange(page - 1);
  };
  const handleNext = () => {
    if (page < total) onChange(page + 1);
  };
  const pageArray = useMemo(() => {
    const pageCount = total >= 4 ? 4 : total;
    if (pageCount < 4) return Array.from({ length: pageCount }, (_, i) => i + 1);
    if (total - page < 4) return [total - 3, total - 2, total - 1, total];
    else {
      return [page, page + 1, page + 2, page + 3];
    }
  }, [total, page]);
  return (
    <Box display="flex" justifyContent="space-between" gap="12px">
      <ActionButton onClick={handlePrev}>Prev</ActionButton>
      <Box borderRadius={40} bgcolor="#2E2E40" display="flex" alignItems="center" flexGrow={1}>
        {pageArray.map((value) => (
          <PageButton
            onClick={() => onChange(value)}
            sx={{ backgroundColor: page === value ? '#056FFF' : 'transparent' }}
            key={value}
          >
            {value}
          </PageButton>
        ))}
      </Box>
      <ActionButton onClick={handleNext}>Next</ActionButton>
    </Box>
  );
};

const ActionButton = styled(Button)`
  border-radius: 50px;
  background: #0babf926;
  border: 1px solid #005fff;
  margin: 0;
  color: white;
  font-size: 14px;
  min-width: 80px;
  padding: 11px;
  :hover {
    background: #0babf948;
  }
`;

const PageButton = styled(Button)`
  border-radius: 40px;
  font-size: 14px;
  color: white;
  aspect-ratio: 1;
  min-width: 20px;
  width: 100%;
`;
