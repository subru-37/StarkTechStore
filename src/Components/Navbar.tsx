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
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { theme } from '../App';
import { RootState } from '../app/combine';
import { AuthContext } from '../contexts/AuthContext';
import NavbarMenu from './NavbarMenu';
import { LogOut } from '../supabase/routes';
type props = {
  cartopen: boolean;
  setCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  close: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function Navbar({
  cartopen,
  setCartOpen,
  close,
  onClose,
}: props) {
  const navigation = useNavigate();
  const navlinks = [
    { name: 'Home', link: '/' },
    { name: 'Shop', link: '/products' },
    { name: 'About Us', link: '/' },
    // { name: 'Blog', link: '/' },
    // { name: 'Contact Us', link: '/' },
  ];
  const [value, open, setValue, width900] = useNavbar();
  const { isProfile } = React.useContext(AuthContext);
  const products = useSelector((state: RootState) => state.cart);
  const NumberOfItems = products.cart.length;
  const { mode, setMode } = React.useContext(MyContext);
  const profileDetails = useSelector(
    (state: RootState) => state.profile.profileDetails
  );
  //Menu controls
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

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
            width: { xs: '95vw', md: '80vw' },
            display: 'flex',
            flexDirection: 'row',
            justifyContent: { xs: 'space-between', md: 'space-between' },
            padding: '0px !important',
            position: 'relative',
          }}
        >
          <Button
            // size="large"
            // edge="start"
            // color="inherit"
            aria-label="menu"
            sx={{
              // mr: 0,
              // p: 0,
              display: { xs: 'flex', md: 'none' },
              // position: 'absolute',
              // top: '25px',
              // left: '35px',
            }}
            onClick={() => setValue(true)}
          >
            <MenuIcon sx={{ color: `${mode}.primary` }} />
          </Button>
          {/* 3263 1102 */}
          {/*      60 */}
          <Typography
            // component="img"
            // src={logo}
            // alt={''}
            sx={{
              // height: '60px',
              // width: '177px',
              fontSize: '1.6rem',
              fontFamily: '"Oswald", sans-serif !important',
              color: `${mode}.primary`,
              fontWeight: '500',
              cursor: 'pointer',
            }}
            onClick={() => navigation('/')}
          >
            Stark Tech Store
          </Typography>
          <Button
            sx={{
              height: '50px',
              width: '50px',
              display: { xs: 'flex', md: 'none' },
              margin: '0 0 0 10px',
              // position: 'absolute',
              // top: '0px',
              // right: '10px',
            }}
            onClick={() => setMode(mode == 'light' ? 'dark' : 'light')}
          >
            {mode == 'dark' ? (
              <Nightlight sx={{ color: `${mode}.primary` }} />
            ) : (
              <WbSunnyRounded sx={{ color: `${mode}.primary` }} />
            )}
          </Button>
          <Box
            sx={{
              display: {
                xs: 'none',
                md: 'flex',
                flexDirection: 'row',
                width: '300px',
                justifyContent: 'space-between',
                marginLeft: { xs: '0', md: '100px' },
                display: { xs: 'none', md: 'flex' },
              },
            }}
          >
            {navlinks.map((value, index) => {
              return (
                <Link
                  to={value.link}
                  style={{ textDecoration: 'none' }}
                  key={index}
                >
                  <Typography
                    sx={{
                      color: `${mode}.primary`,
                      fontfamily: 'Montserrat',
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontWeight: '600',
                      textUnderlineOffset: '5px',
                      textDecoration: 'underline',
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
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              justifyContent: 'space-around',
              flexDirection: 'row',
              minWidth: '250px',
            }}
          >
            {!isProfile ? (
              <Button
                sx={{
                  color: `${mode}.background`,
                  backgroundColor: `${mode}.primary`,
                  '&:hover': {
                    color: `${mode}.background`,
                    backgroundColor: `${mode}.primary`,
                  },
                  minWidth: '100px',
                  textTransform: 'none',
                  display: { xs: 'none', md: 'flex' },
                }}
                onClick={() => onClose(!close)}
              >
                <Typography>Sign In</Typography>
              </Button>
            ) : (
              <>
                <Button
                  sx={{
                    color: `${mode}.primary`,
                    backgroundColor: `none`,
                    '&:hover': {
                      color: `${mode}.primary`,
                      backgroundColor: `none`,
                    },
                    // minWidth: '100px',
                    textTransform: 'none',
                    display: { xs: 'none', md: 'flex' },
                  }}
                  // onClick={() => onClose(!close)}
                  id="demo-positioned-button"
                  aria-controls={open ? 'demo-positioned-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleMenuClick}
                >
                  {profileDetails.profilePic.length === 0 ? (
                    <AccountCircleIcon />
                  ) : (
                    <Box
                      component={'img'}
                      src={profileDetails.profilePic}
                      // alt={<AccountCircleIcon/>}
                      sx={{
                        height: '40px',
                        width: '40px',
                        borderRadius: '100%',
                      }}
                    />
                  )}
                </Button>
                <NavbarMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
              </>
            )}
            <Box
              onClick={() => setCartOpen(true)}
              sx={{
                position: 'relative',
                width: '50px',
                height: '40px',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                // display: { xs: 'none', md: 'flex' },
                display: 'flex',
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
              <Cart color={theme.palette[mode].primary} size="30px" />
            </Box>
            <Button
              sx={{
                // height: '100%',
                width: '40px',
                height: '40px',
                display: { xs: 'none', md: 'flex' },
              }}
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
          <Close color={theme['palette'][mode]['secondary']} />
        </Box>
        <Box
          sx={{
            minWidth: '100vw',
            minHeight: '100dvh',
            backgroundColor: `${mode}.background`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          {/* <Box sx={{
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
            flexDirection:'row'
          }}>

          </Box> */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              width: '100%',
            }}
          >
            {navlinks.map((value, index) => {
              return (
                <Link
                  to={value.link}
                  style={{ textDecoration: 'none' }}
                  onClick={() => setValue(false)}
                  key={index}
                >
                  <Typography
                    sx={{
                      color: `${mode}.primary`,
                      fontfamily: 'Montserrat',
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
            <Box
              onClick={() => setCartOpen(true)}
              sx={{
                width: '150px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                padding: '20px 0',
              }}
            >
              <Typography
                sx={{
                  fontSize: '24px',
                  fontWeight: '500',
                  color: `${mode}.primary`,
                }}
              >
                My Cart
              </Typography>
              {/* <Box
              sx={{
                position: 'relative',
                width: '50px',
                height: '40px',
                margin: '10px 0',

                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                // display: { xs: 'none', md: 'flex' },
                display: 'flex',
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
              <Cart color={theme.palette[mode].primary} size="30px" />
            </Box> */}
            </Box>
            {!isProfile ? (
              <Button
                sx={{
                  color: `${mode}.background`,
                  backgroundColor: `${mode}.primary`,
                  '&:hover': {
                    color: `${mode}.background`,
                    backgroundColor: `${mode}.primary`,
                  },
                  minWidth: '100px',
                  textTransform: 'none',
                  padding: '20px 0',
                  display: 'flex',
                }}
                onClick={() => onClose(!close)}
              >
                <Typography>Sign In</Typography>
              </Button>
            ) : (
              <>
                <Button
                  sx={{
                    color: `${mode}.primary`,
                    backgroundColor: `none`,
                    '&:hover': {
                      color: `${mode}.primary`,
                      backgroundColor: `none`,
                    },
                    // minWidth: '100px',
                    textTransform: 'none',
                    display: 'flex',
                    padding: '20px 0',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onClick={() => LogOut()}
                  // id="demo-positioned-button"
                  // aria-controls={open ? 'demo-positioned-menu' : undefined}
                  // aria-haspopup="true"
                  // aria-expanded={open ? 'true' : undefined}
                  // onClick={handleMenuClick}
                >
                  <Typography
                    sx={{
                      color: `${mode}.primary`,
                      fontSize: '24px',
                      // margin: '0px 7px 0px 0px',
                      fontWeight: '500',
                      // textAlign:'center'
                    }}
                  >
                    My Profile{' '}
                  </Typography>
                  {/* <AccountCircleIcon /> */}
                </Button>
                {/* <NavbarMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} /> */}
              </>
            )}
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}
