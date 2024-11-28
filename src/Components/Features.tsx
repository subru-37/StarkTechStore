import React, { useContext, useEffect, useState } from 'react';
import {
  Autocomplete,
  Box,
  Button,
  TextField,
  Typography,
} from '@mui/material';
import FeatureCard from './FeatureCard';
import slide1 from '../assets/flside1.png';
import slide2 from '../assets/fslide2.png';
import slide3 from '../assets/fslide3.png';
import slide4 from '../assets/fslide4.png';
import SlideShow from './Slideshow';
import RightArrow from '../utils/RightArrow';
import ExploreMore from '../utils/ExploreMore';
import { products } from '../sampledata/products';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../contexts/ColorMode';
import { ProductItemType } from '../Redux/features/ProductSlice';
import { useFetchCategoriesQuery } from '../api/CategoriesQuery';
import { categoryFilterType } from '../Pages/Products';
import { categories } from '../Pages/Products';
const Features = () => {
  const navigation = useNavigate();
  const [categories, setCategories] = useState<string[]>([]);
  const { data, error, isLoading } = useFetchCategoriesQuery('/');
  useEffect(() => {
    if (isLoading !== true && data !== null && data !== undefined) {
      if (data?.data !== null) {
        const categories: string[] = data?.data.map(
          (value: categories, index: number) => {
            return value.category_title;
          }
        );
        setCategories(categories);
      }
    }
  }, [data, isLoading]);
  const [options, setOptions] = React.useState({
    op0: false,
    op1: true,
    op2: false,
  });
  const op0 = React.createRef<HTMLButtonElement>();
  const op1 = React.createRef<HTMLButtonElement>();
  const op2 = React.createRef<HTMLButtonElement>();
  const ref1 = React.createRef<HTMLButtonElement>();
  //   const menuItems = ['Staples', 'New Arrivals', 'Best Sellers'];
  const menuItems = [
    { name: 'Staples', ref: op0 },
    { name: 'New Arrivals', ref: op1 },
    { name: 'Best Sellers', ref: op2 },
  ];
  const [value, setValue] = React.useState(menuItems[0].name);
  function handleClick(refn: any) {
    const value = refn.current.id;
    setOptions({
      op0: false,
      op1: false,
      op2: false,
    });
    setOptions((preValue) => {
      return {
        ...preValue,
        [value]: true,
      };
    });
    // //console.log(options);
  }
  function handleChange(event: any) {
    const value = 'op' + event.target.id.charAt(12);
    setValue(menuItems[event.target.id.charAt(12)].name);
    // //console.log(value);
    setOptions({
      op0: false,
      op1: false,
      op2: false,
    });
    setOptions((preValue) => {
      return {
        ...preValue,
        [value]: true,
      };
    });
  }
  const productItems = products(
    [],
    { range: { low: 0, high: 1200 } },
    categories,
    ''
  );
  // const filtered = productItems.filter((value, index) => value.id > 2);
  // const slideshow = filtered.map((value, index) => (
  //     value.element
  // ));
  // //console.log(slideshow);
  const myItems = productItems.map(
    (value: any, index: number) => value.element
  );
  // //console.log(myItems);
  const { mode } = useContext(MyContext);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        display: 'flex',
      }}
      id="features"
    >
      <Box
        sx={{
          minHeight: '90vh',
          //   minWidth: '100vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'column',
            minHeight: '85px',
            margin: '20px 0px',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: `${mode}.primary`,
              fontSize: { xs: '40px', sm: '45px' },
              textAlign: 'center',
              fontWeight: '500',
            }}
          >
            Featured Products
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: `${mode}.primary`,
              fontSize: '20px',
              fontFamily: 'Montserrat',
              maxWidth: { xs: '350px', sm: '100vw' },
              textAlign: 'center',
            }}
          >
            Lorem ipsum dolor sit amet, consectetuer Lorem ispum.
          </Typography>
        </Box>
        {/* <Box
          sx={{
            width: '80vw',
            alignItems: 'center',
            display: { xs: 'none', sm: 'flex' },
            justifyContent: 'space-between',
            margin: '30px 0',
          }}
        >
          <Button id="op0" ref={op0} onClick={() => handleClick(op0)}>
            <Typography
              sx={{
                color: options.op0 ? `${mode}.text` : 'green.dark',
                fontSize: { sm: '30px', md: '40px' },
                display: { xs: 'none', sm: 'flex' },
                fontWeight: '600',
                textTransform: 'none',
              }}
            >
              Staples
            </Typography>
          </Button>
          <Button id="op1" ref={op1} onClick={() => handleClick(op1)}>
            <Typography
              sx={{
                color: options.op1 ? `${mode}.text` : 'green.dark',
                fontSize: { sm: '30px', md: '40px' },
                fontWeight: '600',
                textTransform: 'none',
              }}
            >
              New Arrivals
            </Typography>
          </Button>
          <Button id="op2" ref={op2} onClick={() => handleClick(op2)}>
            <Typography
              sx={{
                color: options.op2 ? `${mode}.text` : 'green.dark',
                fontSize: { sm: '30px', md: '40px' },
                display: { xs: 'none', sm: 'flex' },
                fontWeight: '600',
                textTransform: 'none',
              }}
            >
              Best Sellers
            </Typography>
          </Button>
        </Box> */}
        {/* <Autocomplete
          value={value}
          ref={ref1}
          onChange={handleChange}
          options={menuItems.map((value) => value.name)}
          sx={{ display: { xs: 'flex', sm: 'none' } }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Select your option"
              InputLabelProps={{
                style: {
                  color: `${mode}.text`,
                  fontFamily: 'Montserrat',
                },
              }}
              sx={{
                width: '80vw',
                margin: '20px 0',
                '& .MuiOutlinedInput-root': {
                  // height: {xs: '50px', sm: 'auto'},
                  backgroundColor: 'transparent',
                  color: `${mode}.text`,
                  '& fieldset': {
                    border: '2px solid #00584A',
                    color: `${mode}.text`,
                  },
                  '&.Mui-focused fieldset': {
                    border: '2px solid #00584A',
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
            />
          )}
        /> */}
        {/* <Box sx={{ display: options.op0 ? 'block' : 'none' }}>
          <SlideShow
            show1100={4}
            show900={3}
            show600={2}
            show400={1}
            components={slideshow}
            arrows={false}
            width="95vw"
          />
        </Box> */}
        <Box sx={{ display: options.op1 ? 'block' : 'none' }}>
          <SlideShow
            show1100={4}
            show900={3}
            show600={2}
            show400={1}
            components={myItems.length > 1 ? myItems : [<div>Loading</div>]}
            width="95vw"
            arrows={false}
          />
        </Box>
        {/* <Box sx={{ display: options.op2 ? 'block' : 'none' }}>
          <SlideShow
            show1100={4}
            show900={3}
            show600={2}
            show400={1}
            components={slideshow}
            width="95vw"
            arrows={false}
          />
        </Box> */}
      </Box>
      <Box onClick={() => navigation('/products')} sx={{ cursor: 'pointer' }}>
        <ExploreMore />
      </Box>
    </Box>
  );
};

export default Features;
