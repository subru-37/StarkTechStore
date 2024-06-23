import { Box, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../contexts/ColorMode';
type props = {
  content: string | undefined;
  background: string | undefined;
};
const CollectionCard = ({content,background}: props) => {
  const navigation = useNavigate();
  const { mode } = useContext(MyContext);

  return (
    <Box
      sx={{
        borderRadius: '20px',
        display: 'flex',
        width: {xs: '350px',sm: '300px',md: '367px'},
        height: '451px',
        backgroundImage: `url(${background})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"285px auto",
        backgroundPosition:'top center',
        alignItems:'flex-end',
        zIndex: '1200',
        position: 'relative', 
        justifyContent:'center',
        cursor:'pointer'
      }}
      onClick={()=> navigation('/products')}
    >
      <Typography
        component="p"
        sx={{
          color: `${mode}.text`,
          textAlign: 'center',
          fontSize: '20px',
          fontWeight: '600',
          margin:'20px 0px'
        }}
      >
        {content}
      </Typography>
    </Box>
  );
};

export default CollectionCard;
