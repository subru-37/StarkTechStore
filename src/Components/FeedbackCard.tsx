import React from 'react';
import { Box, Typography } from '@mui/material';
type styleprops = {
  bgcolor: string;
  titlecolor: string;
  rotate: string;
  name: string;
  profession: string;
  feedback: string;
  margin?: string;
};
const FeedbackCard = (props: styleprops) => {
  return (
    <Box
      sx={{
        width: { xs: '90vw', md: '400px' },
        height: { xs: '500px', md: '550px' },
        borderRadius: '40px',
        backgroundColor: props.bgcolor,
        transform: `rotate(${props.rotate})`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '25px',
        boxSizing: 'border-box',
        margin: { xs: props.margin, sm: '0px' },
        transition: '0.5s',
        '&:hover': {
          width: {xs:'90vw', md:'450px'},
          height: {xs:'500px', md:'600px'},
          transition: '0.5s',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'column',
          height: '65%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'column',
          }}
        >
          <Typography
            component={'h4'}
            sx={{
              color: props.titlecolor,
              textAlign: 'center',
              fontSize: {xs:'28px',md:'32px'},
              fontWeight: '700',
              letterSpacing: '-1.28px',
            }}
          >
            {props.name}
          </Typography>
          <Typography
            component={'h4'}
            sx={{
              color: props.titlecolor,
              textAlign: 'center',
              fontSize: {xs:'24px',md:'28px'},
              fontWeight: '300',
              letterSpacing: '-0.96px',
              fontStyle: 'italic',
            }}
          >
            {props.profession}
          </Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
            height: '0.5px',
            backgroundColor: props.titlecolor,
          }}
        />
        <Typography
          component={'h4'}
          sx={{
            color: props.titlecolor,
            textAlign: 'center',
            fontSize: {xs:'22px',md:'24px'},
            fontWeight: '500',
            letterSpacing: '-1.28px',
          }}
        >
          {props.feedback}
        </Typography>
      </Box>
    </Box>
  );
};

export default FeedbackCard;
