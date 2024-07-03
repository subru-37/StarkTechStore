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
import { useFetchProductQuery } from '../api/ProductQuery';

type BoxProps = {
  id: string | undefined;
  data: {
    id: number;
    title: string | null;
    price: number;
    image: string | null;
    category_title?: string;
  };
};
const SingleCartButton = ({ id, data }: BoxProps) => {
  const dispatch = useDispatch();
  const { mode } = useContext(MyContext);
  // console.log(mode);
  //   const sampleData = useSelector((state: any) => state.productDetails.mycart);
  const mycart = useSelector((state: any) => state.cart);
  const myid = id !== undefined ? parseInt(id) : 0;
  //   const index = sampleData.findIndex((item: any) => Number(id) === item.id);
  // console.log(sampleData, mycart, index, id)
    const cartindex = mycart.cart.findIndex(
      (item: any) => item.id === data.id
    );
  // console.log(mycart)
  // const index = Number(id);
  // console.log(index);
  //   const {data, error, isLoading} = useFetchProductQuery()
//   console.log(data);
  const removeProductHandler = (product: any) => {
    dispatch(reduceProduct(product));
  };
  const addProductHandler = (product: any) => {
    dispatch(addToCart(product));
  };
//   console.log(mycart.cart)
  const Notdefined = mycart.cart[cartindex] === undefined;
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
          addProductHandler(data);
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
          onClick={() => removeProductHandler(mycart.cart[cartindex])}
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
          {mycart.cart[cartindex].quantity}
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
          onClick={() => addProductHandler(mycart.cart[cartindex])}
        />
      </Box>
    );
  }
};

export default SingleCartButton;
