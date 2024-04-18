'use client';
import React from 'react';
import { Switch } from '@mui/material';

const ThemeSwitch = () => {
  return (
    <Switch
      defaultChecked={true}
      className="ai-switch"
      onChange={() => {}}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
};

export default ThemeSwitch;
