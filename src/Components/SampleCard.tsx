import { Box } from '@mui/material';
import React from 'react';
import collection1 from '../assets/flside1.png'
import { useNavigate } from 'react-router-dom';
type sampleprops = {
  background: string;
};
const SampleCard = ({background}: sampleprops) => {
  const navigation = useNavigate();

  return (
    <Box
      sx={{
        height:'466px',
        width: '285px',
        backgroundImage: `url(${background})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"285px auto",
        borderRadius:'10px', 
        zIndex: '1000', 
        position: 'relative',
        margin: {xs: '20px', lg: '0px'},
        cursor:'pointer'
      }}
      onClick={()=> navigation('/products')}

    ></Box>
  );
};

export default SampleCard;
