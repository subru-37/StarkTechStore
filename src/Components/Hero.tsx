import React, { Dispatch, SetStateAction, useContext } from 'react';
import Box from '@mui/material/Box';
import { Typography, Button, TextField, InputAdornment } from '@mui/material';
import Search from '../utils/Search';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../contexts/ColorMode';
import { theme } from '../App';
const Hero = () => {
  const navigation = useNavigate();
  const { mode } = useContext(MyContext);
  const myMode: string = mode;
  console.log(theme['palette'][mode]['primary'] + '40');
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: { xs: 'center', sm: 'flex-start' },
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          minHeight: { xs: '45vh', sm: '250px', md: '270px' },
          display: 'flex',
          alignItems: { xs: 'center', sm: 'flex-start' },
          justifyContent: 'space-between',
          flexDirection: 'column',
          margin: { xs: '0px 0px 40px 0px', sm: '0 35px', md: '0 100px' },
          // padding: { xs: '10px', sm: '0px' },
          borderRadius: '20px',
          // backgroundColor: `${theme['palette'][mode]['text']}40`,
          border: `5px dashed ${theme['palette'][mode]['text']}`,
          padding: { xs: '10px', sm: '16px', md: '20px' },
        }}
      >
        <Typography
          variant="h3"
          // component="div"
          sx={{
            fontSize: {
              xs: '40px !important',
              sm: '50px !important',
              md: '64px',
            },
            width: { xs: '90vw', sm: '500px', md: '650px' },
            textAlign: { xs: 'center', sm: 'left' },
            color: `${theme['palette'][mode]['text']}`,
          }}
        >
          <Box component={'span'} sx={{ color: `${mode}.primary` }}>
            Stark Tech Store
          </Box>{' '}
          <br></br>
          Empower Your Tomorrow with us today!
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: `${mode}.text`,
            fontSize: { xs: '16px', sm: '20px' },
            textAlign: { xs: 'center', sm: 'left' },
            marginBottom: { xs: '50px', sm: '0px' },
          }}
        >
          Bringing affortable components for exclusive{' '}
          <Box
            component={'span'}
            sx={{
              color: `${theme['palette'][mode].primary}`,
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
              fontWeight: '600',
            }}
          >
            Tech Enthusiasts
          </Box>{' '}
          to your home!!
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: { xs: 'column-reverse', sm: 'row' },
            width: { xs: '90vw', sm: '500px', md: '700px' },
            alignItems: 'center',
            minHeight: { xs: '120px', sm: '0px' },
          }}
        >
          <Button
            sx={{
              bgcolor: `${theme['palette'][mode]['primary']}`,
              borderRadius: '10px',
              transition: '0.25s',
              height: { xs: '45px', sm: '55px' },
              width: { xs: '125px', sm: '150px' },
              '&:hover': {
                bgcolor: `${theme['palette'][mode]['primary']}80`,
                transition: '0.25s',
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: `${mode}.background`,
                fontSize: '16px',
                textTransform: 'none',
                cursor: 'pointer',
              }}
              onClick={() => navigation('/products')}
            >
              Shop Now
            </Typography>
          </Button>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
            }}
          >
            {/* <Button
              sx={{
                bgcolor: `${mode}.text`,
                height: { xs: '50.5px', sm: '57px', md: '56.5px' },
                transition: '0.25s',
                borderRadius: '10px',
                position: 'relative',
                zIndex: '100',
                left: '10px',
                '&:hover': {
                  bgcolor: '#DDA15E !important',
                  transition: '0.25s',
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: '#ACD2AE',
                  textTransform: 'none',
                  fontSize: '16px',
                  '&:hover': {
                    color: '#00584A; !important',
                    transition: '0.25s',
                  },
                }}
              >
                Search by Category
              </Typography>
            </Button>
            <TextField
              id="outlined-controlled"
              label="Search By Product"
              sx={{
                height: { xs: '50px', sm: 'auto' },
                width: { sm: '300px', md: '350px' },
                '& .MuiOutlinedInput-root': {
                  height: { xs: '50px', sm: 'auto' },
                  backgroundColor: 'transparent',
                  color: `${mode}.text`,
                  '& fieldset': {
                    borderTop: '2px solid #00584A',
                    borderLeft: 'none',
                    borderRight: '2px solid #00584A',
                    borderBottom: '2px solid #00584A',
                    borderTopLeftRadius: '0px !important',
                    borderBottomLeftRadius: '0px !important',
                    color: `${mode}.text`,
                  },
                  '&.Mui-focused fieldset': {
                    borderTop: '2px solid #00584A',
                    borderLeft: 'none',
                    borderRight: '2px solid #00584A',
                    borderBottom: '2px solid #00584A',
                    borderTopLeftRadius: '0px !important',
                    borderBottomLeftRadius: '0px !important',
                    color: `${mode}.text`,
                  },
                },
                '& .MuiOutlinedInput-root:hover': {
                  '& fieldset': {
                    border: `${mode}.text`,
                    color: `${mode}.text`,
                  },
                },
              }}
              InputProps={{
                style: {
                  color: `${mode}.text`,
                  fontFamily: 'Montserrat',
                },
                endAdornment: (
                  <InputAdornment position="end">
                    <Search />
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{
                style: {
                  color: '#3CA373',
                  fontFamily: 'Montserrat',
                  fontSize: '16px',
                },
              }}
              value={props.name}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                props.setName(event.target.value);
              }}
            ></TextField> */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
