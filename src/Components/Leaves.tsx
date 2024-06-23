import React, { useContext } from 'react';
import '../styles/Leaves.css';
import useNavbar from '../hooks/useNavbar';
import { Box, Typography } from '@mui/material';
import { MyContext } from '../contexts/ColorMode';
const Leaves = () => {
  const [scroll, open, toggleDrawer, width900, scrollp] = useNavbar();
  const { mode } = useContext(MyContext);

  return (
    <div className="parent">
      <div
        className={
          scrollp >= 1200
            ? scrollp > 1800
              ? 'leaf1-reverse leaf1'
              : 'leaf1-forward leaf1'
            : scrollp < 1200 && scroll === true
            ? 'leaf1'
            : 'leaf1-reverse leaf1'
        }
      ></div>
      <div
        className={
          scrollp >= 1200
            ? scrollp > 1800
              ? 'leaf1-75-reverse leaf1-75'
              : 'leaf1-75-forward leaf1-75'
            : scrollp < 1200 && scroll === true
            ? 'leaf1-75'
            : 'leaf1-75-reverse leaf1-75'
        }
      ></div>
      <div
        className={
          scrollp >= 1200
            ? scrollp > 1800
              ? 'leaf1-5-reverse leaf1-5'
              : 'leaf1-5-forward leaf1-5'
            : scrollp < 1200 && scroll === true
            ? 'leaf1-5'
            : 'leaf1-5-reverse leaf1-5'
        }
      ></div>
      <div
        className={
          scrollp >= 1200
            ? scrollp > 1800
              ? 'leaf2-5-reverse leaf2-5'
              : 'leaf2-5-forward leaf2-5'
            : scrollp < 1200 && scroll === true
            ? 'leaf2-5'
            : 'leaf2-5-reverse leaf2-5'
        }
      ></div>
      <div
        className={
          scrollp >= 1200
            ? scrollp > 1800
              ? 'leaf3-reverse leaf3'
              : 'leaf3-forward leaf3'
            : scrollp < 1200 && scroll === true
            ? 'leaf3'
            : 'leaf3-reverse leaf3'
        }
      ></div>
      <div
        className={
          scrollp >= 1200
            ? scrollp > 1800
              ? 'leaf4-5-reverse leaf4-5'
              : 'leaf4-5-forward leaf4-5'
            : scrollp < 1200 && scroll === true
            ? 'leaf4-5'
            : 'leaf4-5-reverse leaf4-5'
        }
      ></div>
      <div
        className={
          scrollp >= 1200
            ? scrollp > 1800
              ? 'leaf5-reverse leaf5'
              : 'leaf5-forward leaf5'
            : scrollp < 1200 && scroll === true
            ? 'leaf5'
            : 'leaf5-reverse leaf5'
        }
      ></div>
      <div
        className={
          scrollp >= 1200
            ? scrollp > 1800
              ? 'leaf6-reverse leaf6'
              : 'leaf6-forward leaf6'
            : scrollp < 1200 && scroll === true
            ? 'leaf6'
            : 'leaf6-reverse leaf6'
        }
      ></div>
      <div
        className={
          scrollp >= 1200
            ? scrollp > 1800
              ? 'leaf7-5-reverse leaf7-5'
              : 'leaf7-5-forward leaf7-5'
            : scrollp < 1200 && scroll === true
            ? 'leaf7-5'
            : 'leaf7-5-reverse leaf7-5'
        }
      ></div>
      <div
        className={
          scrollp >= 1200
            ? scrollp > 1800
              ? 'leaf7-reverse leaf7'
              : 'leaf7-forward leaf7'
            : scrollp < 1200 && scroll === true
            ? 'leaf7'
            : 'leaf7-reverse leaf7'
        }
      ></div>
      <div
        className={
          scrollp >= 1200
            ? scrollp > 1800
              ? 'leaf8-5-reverse leaf8-5'
              : 'leaf8-5-forward leaf8-5'
            : scrollp < 1200 && scroll === true
            ? 'leaf8-5'
            : 'leaf8-5-reverse leaf8-5'
        }
      ></div>
      <div
        className={
          scrollp >= 1200
            ? scrollp > 1800
              ? 'leaf9-reverse leaf9'
              : 'leaf9-forward leaf9'
            : scrollp < 1200 && scroll === true
            ? 'leaf9'
            : 'leaf9-reverse leaf9'
        }
      ></div>
      <div
        className={
          scrollp >= 1200
            ? scrollp > 1800
              ? 'leaf10-5-reverse leaf10-5'
              : 'leaf10-5-forward leaf10-5'
            : scrollp < 1200 && scroll === true
            ? 'leaf10-5'
            : 'leaf10-5-reverse leaf10-5'
        }
      ></div>
      <div
        className={
          scrollp >= 1200
            ? scrollp > 1800
              ? 'leaf10-reverse leaf10'
              : 'leaf10-forward leaf10'
            : scrollp < 1200 && scroll === true
            ? 'leaf10'
            : 'leaf10-reverse leaf10'
        }
      ></div>
      <div
        className={
          scrollp >= 1200
            ? scrollp > 1800
              ? 'leaf11-reverse leaf11'
              : 'leaf11-forward leaf11'
            : scrollp < 1200 && scroll === true
            ? 'leaf11'
            : 'leaf11-reverse leaf11'
        }
      ></div>
      <div
        className={
          scrollp >= 1200
            ? scrollp > 1800
              ? 'leaf12-reverse leaf12'
              : 'leaf12-forward leaf12'
            : scrollp < 1200 && scroll === true
            ? 'leaf12'
            : 'leaf12-reverse leaf12'
        }
      ></div>
      <Box
        component="div"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'column',
          minHeight:'100px', 
          marginRight: {md: '-20px',lg: '0px'},
          maxWidth: {md: '600px', lg: '100vw'}
        }}
      >
        <Box
          component="div"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: {xs:'100vw', sm: '600px', md: '700px' },
            marginRight: {md: '0px', lg: '200px'}
          }}
        >
          <Typography
            sx={{
              color: `${mode}.text`,
              textAlign: 'center',
              fontFamily: 'Plus Jakarta Sans',
              fontSize: {xs:'25px',sm: '28px',md: '25px',lg: '30px'},
              fontStyle: 'italic',
              fontWeight: '500',
              lineHeight: '118.5%' /* 42.66px */,
              letterSpacing: '-1.08px',
              margin: '0px 5px',
            }}
          >
            Unlock the
          </Typography>
          <Typography
            sx={{
              color: 'green.light',
              textAlign: 'center',
              fontFamily: 'Plus Jakarta Sans',
              fontSize: {xs:'34px',sm: '35px',md: '40px', lg: '56px'},
              fontWeight: '400',
              lineHeight: '118.5%' /* 42.66px */,
              letterSpacing: '-1.68px',
              margin: '0px 5px 0px 0px',
            }}
          >
            goodness of
          </Typography>
          <Typography
            sx={{
              color: 'green.light',
              textAlign: 'center',
              fontFamily: 'Plus Jakarta Sans',
              fontSize: {xs:'34px',sm: '35px',md: '40px', lg: '56px'},
              fontStyle: 'italic',
              fontWeight: '600',
              lineHeight: '118.5%' /* 42.66px */,
              letterSpacing: '-1.68px',
              margin: '0px 5px 0px 0px',
            }}
          >
            nature
          </Typography>
        </Box>
        <Box
          component="div"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: {xs:'100vw',sm: '600px', md: '900px' },
            flexWrap:{xs:'wrap',sm: 'no-wrap'}
          }}
        >
          <Typography
            sx={{
              color: `${mode}.text`,
              textAlign: 'center',
              fontFamily: 'Plus Jakarta Sans',
              fontSize: {xs:'25px',sm: '28px',md: '25px',lg: '30px'},
              fontStyle: 'italic',
              fontWeight: '500',
              lineHeight: '118.5%' /* 42.66px */,
              letterSpacing: '-1.08px',
              margin: '0px 5px',
            }}
          >
            with our
          </Typography>
          <Typography
            sx={{
              color: '#F8B542',
              textAlign: 'center',
              fontFamily: 'Plus Jakarta Sans',
              fontSize: {xs:'34px',sm: '35px',md: '40px', lg: '56px'},
              fontStyle: 'italic',
              fontWeight: '600',
              lineHeight: '118.5%' /* 42.66px */,
              letterSpacing: '-1.08px',
              margin: '0px 5px 0px 0px',
            }}
          >
            diverse
          </Typography>
          <Typography
            sx={{
              color: `${mode}.text`,
              textAlign: 'center',
              fontFamily: 'Plus Jakarta Sans',
              fontSize: {xs:'25px',sm: '28px',md: '25px',lg: '30px'},
              fontStyle: 'italic',
              fontWeight: '500',
              lineHeight: '118.5%' /* 42.66px */,
              letterSpacing: '-1.08px',
              margin: '0px 5px 0px 0px',
            }}
          >
            selection of
          </Typography>
          <Typography
            sx={{
              color: '#F8B542',
              textAlign: 'center',
              fontFamily: 'Plus Jakarta Sans',
              fontSize: {xs:'34px',sm: '35px',md: '40px', lg: '56px'},
              fontWeight: '600',
              lineHeight: '118.5%' /* 42.66px */,
              letterSpacing: '-1.08px',
              margin: '0px 5px 0px 0px',
            }}
          >
            food grains
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Leaves;
