import { Box, Typography } from '@mui/material';
import React, { RefObject, useContext } from 'react';
import RightArrow from './RightArrow';
import { MyContext } from '../contexts/ColorMode';
const ExploreMore = () => {
  const { mode } = useContext(MyContext);

  return (
    <Box
      sx={{
        width: '90vw',
        marginTop: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}
    >
      <Typography
        component="h5"
        sx={{
          color: `${mode}.text`,
          marginRight: '20px',
          fontSize: '20px',
          fontWeight: '600',
        }}
      >
        Explore{' '}
        <Typography
          component="span"
          sx={{
            fontStyle: 'italic',
            color: `${mode}.text`,
            marginRight: '2px',
            fontSize: '20px',
            fontWeight: '600',
          }}
        >
          M
        </Typography>
        ore
      </Typography>
      <RightArrow />
    </Box>
  );
};

export default ExploreMore;
