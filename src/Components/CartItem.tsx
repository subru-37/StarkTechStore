import React, { useContext } from 'react';
import { Box, Button, Typography } from '@mui/material';
import WasteCan from '../utils/WasteCan';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeFromCart,
  addToCart,
  removeAll,
  reduceProduct,
  incrementProduct,
} from '../Redux/features/CartSlice';
import CartButton from './CartButton';
import { MyContext } from '../contexts/ColorMode';
type props = {
  price: string;
  name: string;
  quantity: number;
  image: string;
  id: number;
};
const CartItem = ({ price, name, quantity, image, id }: props) => {
  const dispatch = useDispatch();
  const {mode} = useContext(MyContext);

  const products = useSelector((state: any) => state.cart);
  const index = products.cart.findIndex((item: any) => id === item.id);
  const cartindex: string | undefined = String(id);
  const removeAllProduct = (product: any) => {
    dispatch(removeFromCart(product));
  };
  // console.log(image);
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        // flexWrap: 'wrap',
        margin: index === 0 ? '0' : '30px 0 0 0',
        width: '100%',
      }}
    >
      {/* row */}
      {/* picture */}
      <Box
        sx={{
          width: {xs:'150px',sm:'180px'}, //150
          height: {xs:'185px', sm:'222px'}, //185
          borderRadius: '20px',
          background: image,
          backgroundSize: {xs:'150px 180px', sm:'180px 222px'},
        }}
      />
      {/* product details */}
      <Box
        sx={{
          height: {xs:'185px', sm:'222px'}, //185
          width: {xs:'150px',sm:'180px'}, //150
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-start',
        }}
      >
        <Box sx={{ marginBottom: '30px' }}>
          <Typography
            sx={{ color: `${mode}.text`, fontSize: '1rem', fontWeight: '300' }}
          >
            {name}
          </Typography>
          {/* price */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'flex-start',
              flexDirection: 'row',
            }}
          >
            <Typography
              //   component={'h6'}
              sx={{
                color: `${mode}.text`,
                fontSize: '14px',
                margin: '7px 0px',
                fontWeight: '600',
              }}
            >
              {price}
            </Typography>
            {/* <Typography
              //   component={'h6'}
              sx={{
                color: '#C2D76D',
                fontSize: '12px',
                margin: '7px 10px',
                fontWeight: '600',
                textDecorationLine: 'line-through',
              }}
            >
              {price}
            </Typography> */}
          </Box>
          {/* quantity */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}
          >
            {/* <Box
              sx={{
                backgroundColor: `${mode}.text`,
                height: '50px',
                width: '120px',
                borderRadius: '5px',
                backdropFilter: 'blur(3px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}
            >
              <RemoveIcon
                sx={{
                  color: `${mode}.background`,
                  borderRight: '0.5px solid #F5FCE7',
                  fontSize: '5px',
                  height: '75%',
                  width: '33%',
                }}
                onClick={() => removeProductHandler(products.cart[index])}
              />

              <Typography
                sx={{
                  color: `${mode}.background`,
                  fontSize: '16px',
                  fontWeight: '400',
                  height: '75%',
                  width: '33%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {quantity}
              </Typography>
              <AddIcon
                sx={{
                  color: `${mode}.background`,
                  borderLeft: '0.5px solid #F5FCE7',
                  fontSize: '5px',
                  height: '75%',
                  width: '33%',
                }}
                onClick={() => addProductHandler(products.cart[index])}
              />
            </Box> */}
            <CartButton id={cartindex} />
            <Box
              onClick={() => removeAllProduct(products.cart[index])}
              sx={{ cursor: 'pointer' }}
            >
              <WasteCan />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CartItem;
