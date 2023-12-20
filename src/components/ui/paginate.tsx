import React from 'react';

import { Pagination } from '@mui/material';

interface PropsTypes {
  count: number;
  recordSize: number;
  onChange: (value: number) => void; // Adjust the type of onChange to accept a number
  currentPage: number;
}

const Paginate = (props: PropsTypes) => {
  const amountPages = Math.ceil(props.count / props.recordSize);
  return amountPages >= 1 ? (
    <div>
      <Pagination
        count={amountPages}
        onChange={(event, value) => props.onChange(value)}
        page={props.currentPage}
      />
    </div>
  ) : (
    ''
  );
};

export default Paginate;
