'use client';

import React from 'react';

import { Switch } from '@mui/material';

const HeaderSwitch = () => {
  return (
    <Switch
      defaultChecked={true}
      className="switch-button"
      onChange={() => {}}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
};

export default HeaderSwitch;
