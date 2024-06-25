import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import CartButton from './CartButton';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../contexts/ColorMode';
import { useDispatch } from 'react-redux';
import { setProduct } from '../Redux/features/ProductSlice';
interface props {
  background: string;
  cardname: string;
  price: number;
  id: number;
  route: string;
  category: string;
  image:string;
  index: number;
}
const FeatureCard = (props: props) => {
  const { mode } = useContext(MyContext);
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const index: string | undefined = String(props.index);

  return (
    <Box
      sx={{
        // marginRight: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: { xs: 'row', sm: 'column' },
        cursor: 'pointer',
        minWidth: { xs: '90vw', sm: '0px' },
      }}
    >
      {/*
      145   150 
      179   185  
      */}
      <Box
        sx={{
          width: { xs: '145px', sm: '290px' },
          height: { xs: '179px', sm: '358px' },
          flexShrink: '0',
          background: props.background,
          backgroundSize: { xs: '100% 179px', sm: '100% 358px' },
        }}
        onClick={() => {
          dispatch(
            setProduct({
              image: props.image,
              title: props.cardname,
              price: props.price,
              category_title: props.category,
              id: index,
              // route: props.route,
            })
          );
          navigation(`${props.route}/${index}`);
        }}
      ></Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          flexDirection: 'column',
          minHeight: { xs: '179px', sm: '0px' },
        }}
      >
        <Box
          sx={{
            marginTop: '20px',
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: { xs: '170px', sm: '290px' },
            borderBottom: '1px solid #00584A',
          }}
          onClick={() => navigation(`${props.route}/${index}`)}
        >
          <Typography
            sx={{
              color: `${mode}.text`,
              fontSize: '16px',
              fontWeight: '400',
              lineHeight: '19.44px',
            }}
          >
            {props.cardname}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}
          >
            <Typography
              sx={{
                fontWeight: '700',
                color: `${mode}.text`,
                fontSize: '16px',
              }}
            >
              $ {props.price}
            </Typography>
            {/* <Typography
              sx={{
                fontWeight: '600',
                color: '#ACD2AE',
                fontSize: '12px',
                textDecoration: 'line-through',
                marginLeft: '15px',
              }}
            >
              {props.price}
            </Typography> */}
          </Box>
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            margin: '10px 0px',
          }}
        >
          <CartButton id={index} />
        </Box>
      </Box>
    </Box>
  );
};

export default FeatureCard;
