import React, { useContext } from 'react';
import { Box, Typography, Drawer, Button } from '@mui/material';
import CartItem from './CartItem';
import Close from '../utils/Close';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Cart from '../utils/Cart';
import UserModal from './UserModal';
import {TotalPriceMain} from './TotalPrice';
import { MyContext } from '../contexts/ColorMode';
import { theme } from '../App';

type props = {
  cartopen: boolean;
  setCartOpen: (open: boolean) => void;
  setModal: (open: boolean) => void;
  modal: boolean;
};
const CartModal = ({ cartopen, setCartOpen, setModal, modal }: props) => {
  const delivery = 40;
  const products = useSelector((state: any) => state.cart);
  const totalPrice =
    products.cart.length > 0
      ? TotalPriceMain(products.cart)
      : 0;
      const {mode} = useContext(MyContext);

  // if (products.length === 0) {
  //   return <EmptyCart />;
  // }
  return (
    <Drawer
      anchor="right"
      open={cartopen}
      onClose={() => setCartOpen(false)}
      //   transitionDuration={500}
      PaperProps={{
        sx: {
          backgroundColor: `${mode}.background`,
          justifyContent: products.cart.length !== 0 ? 'flex-start' : 'center',
          display: 'flex',
          alignItems: 'center',
        },
      }}
    >
      {products.cart.length !== 0 ? (
        <Box
          sx={{
            width: { xs: '100vw', sm: '500px' },
            //   minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            flexDirection: 'column',
            position: 'relative',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              minHeight: '100vh',
              flexDirection: 'column',
              padding: '35px 35px 0 35px',
              boxSizing: 'border-box',
              width: '100%',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                flexDirection: 'column',
                width: '100%',
              }}
            >
              <Typography
                sx={{
                  fontSize: '35px',
                  fontWeight: '500',
                  color: `${mode}.text`,
                  width: '100%',
                  borderBottom: `2px solid ${theme['palette'][mode]['secondary']}A0`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                Cart
                <Button
                  sx={{
                    fill: `${theme['palette'][mode]['secondary']}`,
                    filter:
                      'drop-shadow(0px 4px 39px rgba(46, 84, 37, 0.75)) blur(0.25px)',
                    backdropFilter: 'blur(2px)',
                    zIndex: '1300',
                    borderRadius: '100%',
                    height: '50px',
                    width: '50px',
                    padding: '0px',
                    minWidth: '0px',
                  }}
                  onClick={() => setCartOpen(false)}
                >
                  <Close color={theme['palette'][mode]['secondary']}/>
                </Button>
              </Typography>

              {/* Items */}
              <Box
                sx={{
                  width: '100%',
                  margin: '30px 0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  flexDirection: 'column',
                  // minHeight:'50vh'
                }}
              >
                {products.cart.length > 0 &&
                  products.cart.map((value: any, index: any) => (
                    <CartItem
                      id={value.id}
                      key={index}
                      image={
                        'url(), lightgray -32.2px -6px / 112.96% 114.239% no-repeat'.substring(
                          0,
                          4
                        ) +
                        value.image +
                        'url(), lightgray -32.2px -6px / 112.96% 114.239% no-repeat'.substring(
                          4
                        )
                      }
                      price={value.price}
                      name={value.name}
                      quantity={value.quantity}
                    />
                  ))}
              </Box>
            </Box>
            {/* checkout details */}
            <Box
              sx={{
                borderTopLeftRadius: '35px',
                borderTopRightRadius: '35px',
                background: 'var(--nav, rgba(217, 217, 217, 0.25))',
                boxShadow: ' 0px 4px 48px -13px rgba(0, 88, 74, 0.80)',
                filter: 'blur(0.25px)',
                backdropFilter: 'blur(50px)',
                padding: '40px 40px 35px 40px',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                // position:'fixed',
                width: { xs: '100vw', sm: '500px' },
                bottom: '0',
              }}
            >
              <Box sx={{ width: '100%' }}>
                {/* split up */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'column',
                    width: '100%',
                    paddingBottom: '20px',
                    borderBottom: `5px dashed ${theme['palette'][mode]['primary']}}`,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                      width: '100%',
                    }}
                  >
                    <Typography
                      sx={{
                        color: `${mode}.primary`,
                        fontSize: '20px',
                        fontWeight: '500',
                      }}
                    >
                      Sub Total:
                    </Typography>
                    <Typography
                      sx={{
                        color: `${mode}.primary`,
                        fontSize: '20px',
                        fontWeight: '600',
                      }}
                    >
                      ₹ {totalPrice}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                      width: '100%',
                    }}
                  >
                    <Typography
                      sx={{
                        color: `${mode}.primary`,
                        fontSize: '20px',
                        fontWeight: '500',
                      }}
                    >
                      Delivery Fee:
                    </Typography>
                    <Typography
                      sx={{
                        color: `${mode}.primary`,
                        fontSize: '20px',
                        fontWeight: '600',
                      }}
                    >
                      ₹ {delivery}
                    </Typography>
                  </Box>
                </Box>
                {/* grand total */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    marginTop: '10px',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      flexDirection: 'column',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '20px',
                        fontWeight: '600',
                        color: `${mode}.primary`,
                      }}
                    >
                      Grand Total:
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '20px',
                        fontWeight: '600',
                        color: `${mode}.primary`,
                      }}
                    >
                      ₹ {totalPrice + delivery}
                    </Typography>
                  </Box>
                  {totalPrice !== 0 ? (
                    <Button
                      sx={{
                        backgroundColor: `${theme['palette'][mode]['primary']}`,
                        borderRadius: '5px',
                        border: '1px solid #00584A',
                        backdropFilter: 'blur(3px)',
                        '&:hover': {
                          backgroundColor: `${theme['palette'][mode]['primary']}`,
                        },
                        height: '50px',
                        width: '150px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      onClick={() => {
                        setModal(true);
                        setCartOpen(false);
                      }}
                    >
                      <Typography
                        sx={{
                          textTransform: 'capitalize',
                          color: `${mode}.background`,
                          fontSize: '16px',
                          fontWeight: '400',
                          letterSpacing: '-0.72px',
                          lineHeight: '19px',
                        }}
                      >
                        Checkout
                      </Typography>
                    </Button>
                  ) : (
                    <Button
                      sx={{
                        backgroundColor: `${mode}.text`,
                        borderRadius: '5px',
                        border: '1px solid #00584A',
                        backdropFilter: 'blur(3px)',
                        '&:hover': {
                          backgroundColor: `${mode}.text`,
                        },
                        height: '50px',
                        width: '150px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      onClick={() => setCartOpen(false)}
                    >
                      <Typography
                        sx={{
                          textTransform: 'capitalize',
                          color: `${mode}.background`,
                          fontSize: '16px',
                          fontWeight: '400',
                          letterSpacing: '-0.72px',
                          lineHeight: '19px',
                        }}
                      >
                        Add Some items
                      </Typography>
                    </Button>
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            flexDirection: 'column',
            padding: '35px 35px 0 35px',
            boxSizing: 'border-box',
            width: '100%',
          }}
        >
          <Typography
            sx={{
              color: `${mode}.text`,
              fontSize: '24px',
              textAlign: 'center',
              margin: '25px 0',
            }}
          >
            Your Cart is empty, <br />
            add some items!!
          </Typography>
          <Box onClick={() => setCartOpen(false)} sx={{ cursor: 'pointer' }}>
            <Cart color={theme['palette'][mode]['primary']} size="40px" />
          </Box>
        </Box>
      )}
    </Drawer>
  );
};

export default CartModal;
