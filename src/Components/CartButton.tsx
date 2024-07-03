import React, { useContext } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  reduceProduct,
  incrementProduct,
  addToCart,
  CartItemType,
} from '../Redux/features/CartSlice';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
// import { cartitems as sampleData } from '../sampledata/cartitem';
import Plus from '../utils/Plus';
import { MyContext } from '../contexts/ColorMode';
import { theme } from '../App';
import { RootState } from '../app/combine';

type BoxProps = {
  id: string | undefined;
};
const CartButton = ({ id }: BoxProps) => {
  const dispatch = useDispatch();
  const { mode } = useContext(MyContext);
  // console.log(mode);
  const sampleData = useSelector((state: RootState) => state.productDetails.products);
  const products = useSelector((state: RootState) => state.cart);
  const index = sampleData.findIndex((item: any) => Number(id) === item.id);
  // console.log(sampleData, products, index, id)
  const cartindex = products.cart.findIndex(
    (item: any) => item.id === sampleData[index].id
  );
  // console.log(products)
  // const index = Number(id);
  // console.log(index);
  const removeProductHandler = (product: any) => {
    dispatch(reduceProduct(product));
  };
  const addProductHandler = (product: any) => {
    dispatch(addToCart(product));
  };
  const Notdefined = products.cart[cartindex] === undefined;
  if (Notdefined) {
    return (
      <Button
        sx={{
          '&:hover': {
            backgroundColor: `${theme['palette'][mode].primary}`,
          },
          backgroundColor: `${theme['palette'][mode].primary}`,
          minHeight: { xs: '30px', sm: '50px' },
          minWidth: { xs: '90px', sm: '120px' },
          // marginLeft: '25px',
          padding: '0px',
          cursor: 'pointer',
        }}
        onClick={() => {
          addProductHandler(sampleData[index]);
        }}
      >
        <Typography
          sx={{
            color: `${mode}.background`,
            fontSize: { xs: '12px', sm: '16px' },
            fontWeight: '500',
            marginRight: '25px',
          }}
        >
          {'Cart'}
        </Typography>
        <Plus color={theme['palette'][mode].background} />
      </Button>
    );
  } else {
    return (
      <Box
        sx={{
          backgroundColor: `${mode}.primary`,
          height: { xs: '30px', sm: '50px' },
          width: { xs: '90px', sm: '120px' },
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
            borderRight: `2px solid ${theme.palette[mode].background}`,
            fontSize: '5px',
            height: '75%',
            width: '33%',
            cursor: 'pointer',
          }}
          onClick={() => removeProductHandler(products.cart[cartindex])}
        />

        <Typography
          sx={{
            color: `${mode}.background`,
            fontSize: { xs: '14px', sm: '16px' },
            fontWeight: '400',
            height: '75%',
            width: '33%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {products.cart[cartindex].quantity}
        </Typography>
        <AddIcon
          sx={{
            color: `${mode}.background`,
            borderLeft: `2px solid ${theme.palette[mode].background}`,
            fontSize: '5px',
            height: '75%',
            width: '33%',
            cursor: 'pointer',
          }}
          onClick={() => addProductHandler(products.cart[cartindex])}
        />
      </Box>
    );
  }
};

export default CartButton;
