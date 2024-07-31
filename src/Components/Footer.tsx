import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { MyContext } from '../contexts/ColorMode';

const Footer = () => {
  const year = new Date().getFullYear();
  const { mode } = useContext(MyContext);
  return (
    <Box
      sx={{
        minHeight: '75px',
        minWidth: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: '0px',
        zIndex: '1000',
      }}
    >
      <Typography sx={{ color: `${mode}.primary`, fontSize: '16px' }}>
        Copyright © {year} Stark Tech Store
      </Typography>
    </Box>
  );
};

export default Footer;
