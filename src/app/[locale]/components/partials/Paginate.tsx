import React from 'react';

import { Pagination } from '@mui/material';

interface PropsTypes {
  count: number | undefined;
  recordSize: number | undefined;
  onChange: (value: number) => void;
  currentPage: number;
  isPreviousData: boolean;
}

const Paginate = (props: PropsTypes) => {
  const amountPages = Math.ceil((props.count || 0) / (props.recordSize || 0));
  return amountPages > 1 ? <Pagination count={amountPages} /> : null;
};

export default Paginate;
