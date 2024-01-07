import { MaterialDesignContent } from 'notistack';

import { styled } from '@mui/material/styles';

export const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
  '&': {
    background: 'red',
    width: '98vw',
    marginTop: '65px',
  },
  '&.notistack-MuiContent-success': {
    background: '#74E290',
    boxShadow:
      '0px 3.93558px 7.87115px rgba(0, 0, 0, 0.06), 0px 8.85505px 49.1947px -5.90337px rgba(10, 8, 102, 0.13)',
    borderRadius: '0rem 0rem 0.875rem 0.875rem',
    color: 'black',
    fontSize: '18px',
    fontWeight: 300,
    lineHeight: '23px',
    whiteSpace: 'nowrap',
    '& img': {
      marginRight: '25px',
    },
    display: 'flex',
    justifyContent: 'center',
    letterSpacing: '0.36px',
  },
  '&.notistack-MuiContent-error': {
    background: '#FFB7AC',
    boxShadow:
      '0px 3.93558px 7.87115px rgba(0, 0, 0, 0.06), 0px 8.85505px 49.1947px -5.90337px rgba(10, 8, 102, 0.13)',
    borderRadius: '0rem 0rem 0.875rem 0.875rem',
    color: 'black',
    fontSize: '18px',
    fontWeight: 300,
    lineHeight: '23px',
    whiteSpace: 'nowrap',
    '& img': {
      marginRight: '25px',
    },
    display: 'flex',
    justifyContent: 'center',
    letterSpacing: '0.36px',
  },
}));
