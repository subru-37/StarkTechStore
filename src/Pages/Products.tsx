import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  Box,
  TextField,
  Typography,
  Grid,
  Drawer,
  InputAdornment,
  Button,
} from '@mui/material';
import FilterBox from '../Components/FilterBox';
import { products } from '../sampledata/products';
import useNavbar from '../hooks/useNavbar';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import Search from '../utils/Search';
import { MyContext } from '../contexts/ColorMode';
import { ProductItemType } from '../Redux/features/ProductSlice';
import { useFetchCategoriesQuery } from '../api/CategoriesQuery';
import { useSelector } from 'react-redux';
import { RootState } from '../app/combine';
import { useFetchFilteredProductsQuery } from '../api/ProductQuery';
type props = {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
};

export type categories = {
  id: number;
  category_title: string;
};
export type categoryFilterType = {
  [key: string]: boolean;
};
type filteredElements = {
  element: JSX.Element;
  id: number;
};
const Products = (props: props) => {
  const [value, open, setValue, width900] = useNavbar();
  const { mode } = useContext(MyContext);
  const { data, error, isLoading } = useFetchCategoriesQuery('/');
  // const [productElements, setProductElements] = useState<filteredElements[]>([])
  const productItems = useSelector(
    (state: RootState) => state.productDetails.products
  );

  const [filteredProducts, setFilteredProducts] =
    useState<filteredElements[]>();
  const [categories, setCategories] = useState<string[]>([]);
  const [filteredCategories, setFilteredCategories] = useState<string[]>([]);
  const [slideValue, setSlideValue] = useState<number[]>([0, 1200]);
  const [filteredSlideValue, setFilteredSlideValue] = useState<number[]>([
    0, 1200,
  ]);
  const [categoryFilters, setCategoryFilters] = useState<categoryFilterType>(
    {}
  );
  const [drawer, setDrawer] = useState<boolean>(false);

  const payments = ['Loreum Ipsum 1', 'Loreum Ipsum 2', 'Loreum Ipsum 3'];

  useEffect(() => {
    if (isLoading !== true && data !== null && data !== undefined) {
      if (data?.data !== null) {
        const myCategories: categoryFilterType = {};
        const categories: string[] = data?.data.map(
          (value: categories, index: number) => {
            myCategories[value.category_title] = false;
            return value.category_title;
          }
        );
        setCategoryFilters(myCategories);
        setCategories(categories);
      }
    }
  }, [data, isLoading]);
  const productElements: filteredElements[] = products(
    filteredCategories,
    {
      range: { low: filteredSlideValue[0], high: filteredSlideValue[1] },
    },
    categories
  );

  // useEffect(()=>{
  //   setProductElements(productElements)
  // }, [categoryFilters, categories])

  const filterProducts = () => {
    let check = 0;
    // const ogKeys = Object.keys(categor)
    for (let i in categories) {
      // console.log(categoryFilters[categories[i]]);
      if (categoryFilters[categories[i]] === true) {
        check = 1;
        setFilteredCategories((preValue) => {
          return [...preValue, categories[i]];
        });
      }
    }
    if (check == 0) {
      setFilteredCategories([]);
    }
  };
  useEffect(() => {
    filterProducts();
  }, [categoryFilters]);

  useEffect(() => {
    setFilteredSlideValue(slideValue);
    console.log(slideValue);
  }, [slideValue]);
  // const {
  //   data: filteredData,
  //   error: filteredError,
  //   isLoading: filteredIsLoading,
  // } = useFetchFilteredProductsQuery(filteredCategories);
  // console.log(filteredData?.data, categoryFilters)
  return (
    <Box
      sx={{
        paddingTop: '75px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative',
        paddingBottom: '75px',
        backgroundColor: `${mode}.background`,
        minHeight: '100vh',
      }}
    >
      {/* <TextField
        id="outlined-controlled"
        label=""
        placeholder="Search.."
        sx={{
          width: '100vw',
          borderBottomLeftRadius: '35px',
          borderBottomRightRadius: '35px',
          //   opacity: '0.5',
          backgroundColor: `${mode}.background`,
          minHeight: '175px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          boxShadow: '0px 4px 48px -13px rgba(46, 84, 37, 0.54)',
          //   filter: 'blur(0.25px)',
          //   backdropFilter: 'blur(7.5px)',
          '& .MuiOutlinedInput-root': {
            height: { xs: '50px', sm: 'auto' },
            backgroundColor: 'transparent',
            color: `${mode}.text`,
            '& fieldset': {
              border: 'none',
              color: `${mode}.text`,
              minWidth: '300px',
            },
            '&.Mui-focused fieldset': {
              border: 'none',
              color: `${mode}.text`,
            },
          },
          '& .MuiOutlinedInput-root:hover': {
            '& fieldset': {
              border: 'none',
              color: `${mode}.text`,
            },
          },
        }}
        InputProps={{
          style: {
            color: `${mode}.text`,
            fontFamily: 'Montserrat',
            height: '100px',
          },
          inputProps: {
            style: { textAlign: 'center', fontSize: '20px', fontWeight: '500' },
          },
          startAdornment: (
            <InputAdornment position="start">
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
      /> */}
      <Box
        sx={{
          width: '90vw',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          flexDirection: { xs: 'column', md: 'row' },
          marginTop: { xs: '20px', md: '75px' },
        }}
      >
        {width900 ? (
          <FilterBox
            categories={categories}
            payments={payments}
            setCategoryFilters={setCategoryFilters}
            // setPaymentFilters={setPaymentFilters}
            // paymentFilters={paymentFilters}
            categoryFilters={categoryFilters}
            slideValue={slideValue}
            setSlideValue={setSlideValue}
          />
        ) : (
          <Drawer anchor="left" open={drawer} onClose={() => setDrawer(false)}>
            <FilterBox
              categories={categories}
              payments={payments}
              setCategoryFilters={setCategoryFilters}
              // setPaymentFilters={setPaymentFilters}
              // paymentFilters={paymentFilters}
              categoryFilters={categoryFilters}
              slideValue={slideValue}
              setSlideValue={setSlideValue}
            />
          </Drawer>
        )}
        {/* Products grid*/}
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 6, lg: 6 }}
          sx={{
            width: { xs: '95%', md: '65%', lg: '75%' },
            display: 'flex',
            justifyContent: 'center',
            margin: '0px !important',
          }}
        >
          <Grid item sx={{ padding: '0px !important' }}>
            <Button
              onClick={() => setDrawer(true)}
              sx={{
                color: `${mode}.text`,
                display: { xs: 'flex', md: 'none' },
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0px 0px !important',
              }}
            >
              <MenuIcon /> Filters
            </Button>
          </Grid>
          {productElements.map(
            (value: { element: JSX.Element; id: number }, index: number) => (
              <Grid
                item
                key={index}
                xs={4}
                sm={3.7}
                md={3}
                lg={2}
                sx={{
                  padding: {
                    xs: '10px 5px !important',
                    sm: '25px !important',
                  },
                }}
              >
                {value.element}
              </Grid>
            )
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default Products;
