import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, Link as NavLink } from '@mui/material';
import Cart from '../utils/Cart';
import useNavbar from '../hooks/useNavbar';
import SignIcon from '../utils/SignIcon';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/SNDark Green@4x.png';
import { useDispatch, useSelector } from 'react-redux';
import Close from '../utils/Close';
import { MyContext } from '../contexts/ColorMode';
import { WbSunnyRounded, Nightlight } from '@mui/icons-material';
import { theme } from '../App';
type props = {
  cartopen: boolean;
  setCartOpen: (open: boolean) => void;
};
export default function Navbar({ cartopen, setCartOpen }: props) {
  const navigation = useNavigate();
  const navlinks = [
    { name: 'Home', link: '/' },
    { name: 'Shop', link: '/products' },
    { name: 'About Us', link: '/' },
    // { name: 'Blog', link: '/' },
    // { name: 'Contact Us', link: '/' },
  ];
  const [value, open, setValue, width900] = useNavbar();
  const products = useSelector((state: any) => state.cart);
  const NumberOfItems = products.cart.length;
  const { mode, setMode } = React.useContext(MyContext);

  return (
    <Box>
      <AppBar
        position="fixed"
        sx={{
          borderBottomLeftRadius: '35px',
          borderBottomRightRadius: '35px',
          background: 'rgba(217, 217, 217, 0.25)',
          boxShadow: ' 0px 4px 48px -13px rgba(46, 84, 37, 0.54)',
          filter: ' blur(0.25px)',
          // backdropFilter: 'blur(7.5px)',
          height: '75px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100vw',
          left: '0px',
          flexGrow: 1,
          transition: value ? 'visibility 0.2s, opacity 0.2s linear' : '0.2s',
          visibility: value === true ? 'hidden' : 'visible',
          opacity: value ? '0' : '1',
        }}
      >
        <Toolbar
          sx={{
            width: { xs: '90vw', md: '75vw' },
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: '0px !important',
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { xs: 'flex', md: 'none' } }}
            onClick={() => setValue(true)}
          >
            <MenuIcon sx={{ color: `${mode}.text` }} />
          </IconButton>
          {/* 3263 1102 */}
          {/*      60 */}
          <Typography
            // component="img"
            // src={logo}
            // alt={''}
            sx={{
              // height: '60px',
              // width: '177px',
              fontSize:'1.6rem',
              fontFamily: '"Oswald", sans-serif !important',
              color:`${mode}.primary`,
              fontWeight:'500'
            }}
            onClick={() => navigation('/')}
          >
            Stark Tech Store
          </Typography>
          <Box
            sx={{
              display: {
                xs: 'none',
                md: 'flex',
                flexDirection: 'row',
                width: '300px',
                justifyContent: 'space-between',
                marginRight: '40px',
              },
            }}
          >
            {navlinks.map((value, index) => {
              return (
                <Link to={value.link} style={{ textDecoration: 'none' }}>
                  <Typography
                    key={index}
                    sx={{
                      color: `${mode}.primary`,
                      fontfamily: 'Plus Jakarta Sans',
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontWeight: '600',
                      textUnderlineOffset: '5px',
                      textDecoration:'underline'
                    }}
                  >
                    {value.name}
                  </Typography>
                </Link>
              );
            })}
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
              width: '150px',
            }}
          >
            {/* <Button color="inherit">
              <SignIcon />
            </Button> */}
            <Box
              onClick={() => setCartOpen(true)}
              sx={{
                position: 'relative',
                width: '50px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <Typography
                sx={{
                  position: 'absolute',
                  // backgroundColor: `${mode}.primary`,
                  color: `${mode}.primary`,
                  borderRadius: '100%',
                  width: '22px',
                  height: '22px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  right: '-10px',
                  top: '-5px',
                }}
              >
                {NumberOfItems}
              </Typography>
              <Cart color={mode} />
            </Box>
            <Button
              sx={{ height: '100%', width: '50px' }}
              onClick={() => setMode(mode == 'light' ? 'dark' : 'light')}
            >
              {mode == 'dark' ? (
                <Nightlight sx={{ color: `${mode}.primary` }} />
              ) : (
                <WbSunnyRounded sx={{ color: `${mode}.primary` }} />
              )}
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={open} onClose={() => setValue(false)}>
        <Box
          onClick={() => setValue(false)}
          sx={{ position: 'absolute', top: '20px', right: '20px' }}
        >
          <Close color={theme['palette'][mode]['secondary']}/>
        </Box>
        <Box
          sx={{
            minWidth: '100vw',
            minHeight: '100dvh',
            background: `${mode}.background`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          {navlinks.map((value, index) => {
            return (
              <Link
                to={value.link}
                style={{ textDecoration: 'none' }}
                onClick={() => setValue(false)}
              >
                <Typography
                  sx={{
                    color: `${mode}.text`,
                    fontfamily: 'Plus Jakarta Sans',
                    fontSize: '24px',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    lineHeight: 'normal',
                    margin: '20px 0',
                  }}
                >
                  {value.name}
                </Typography>
              </Link>
            );
          })}
        </Box>
      </Drawer>
    </Box>
  );
}
