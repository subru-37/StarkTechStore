import React, { useEffect } from 'react';
import Landing from './Pages/Landing';
import Navbar from './Components/Navbar';
import { createTheme, ThemeProvider, Theme } from '@mui/material/styles';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Routes, Route, useNavigate } from 'react-router-dom';
import Products from './Pages/Products';
import CartModal from './Components/CartModal';
import ProductDetail from './Components/ProductDetail';
import Checkout from './Pages/Checkout';
import Shipping from './Pages/Shipping';
import Footer from './Components/Footer';
import { Box } from '@mui/material';
import UserModal from './Components/UserModal';
import ColorMode from './contexts/ColorMode';
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from './Redux/features/CartSlice';
import { setProduct, setProducts } from './Redux/features/ProductSlice';
import { useFetchProductDetailsQuery } from './api/ProductQuery';
import MyAuthContext, { AuthContext } from './contexts/AuthContext';
import { ProfileType, setProfile } from './Redux/features/AuthSlice';
import { RootState } from './app/combine';
AOS.init();
declare module '@mui/material/styles' {
  interface Palette {
    green: {
      lighter: string;
      light: string;
      main: string;
      dark: string;
      darker: string;
    };
    dark: {
      primary: string;
      secondary: string;
      accent: string;
      background: string;
      text: string;
    };
    light: {
      primary: string;
      secondary: string;
      accent: string;
      background: string;
      text: string;
    };
  }

  interface PaletteOptions {
    green?: {
      lighter?: string;
      light?: string;
      main?: string;
      dark?: string;
      darker?: string;
    };
    dark?: {
      primary?: string;
      secondary?: string;
      accent?: string;
      background?: string;
      text?: string;
    };
    light?: {
      primary?: string;
      secondary?: string;
      accent?: string;
      background?: string;
      text?: string;
    };
  }
}
type FormData = {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  landmark: string;
  phoneNumber: string | number | undefined;
};
export const theme: Theme = createTheme({
  palette: {
    green: {
      lighter: '#C5E9C7',
      light: '#5AB65F',
      main: '#00584A',
      dark: '#5AB65F',
      darker: '#00584A;',
    },
    dark: {
      primary: '#98c3e7',
      secondary: '#adb5bd',
      accent: '#d041d2',
      background: '#22262a',
      text: '#eaedf0',
    },
    light: {
      primary: '#184467',
      secondary: '#424A52',
      accent: '#bc2dbe',
      background: '#d5d9dd',
      text: '#0f1215',
    },
  },
});
const App = () => {
  const [modal, setModal] = React.useState<boolean>(false);
  const navigation = useNavigate();
  const options = ['Cash On Delivery'];
  const profileDetails = useSelector((state: RootState)=>state.profile.profileDetails);
  const [value, setValue] = React.useState<string | null>(options[0]);
  const [formData, setFormData] = React.useState<FormData>({
    email: profileDetails.email,
    firstName: profileDetails.first_name,
    lastName: profileDetails.last_name,
    address: '',
    landmark: '',
    phoneNumber: undefined,
  });
  const [cartopen, setCartOpen] = React.useState<boolean>(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const getMyProfile = localStorage.getItem('profileDetails');
    if (getMyProfile !== null) {
      const myProfile:ProfileType = JSON.parse(getMyProfile);
      // console.log(myProfile)
      dispatch(setProfile(myProfile));
      setFormData((preValue)=>{
        return{
          ...preValue, 
          firstName: myProfile.first_name,
          lastName: myProfile.last_name,
          email: myProfile.email
        }
      })
      // setIsProfile(true);
    }
  }, []);
  // const mydata = useSelector((state: any) => state.productDetails.products);

  // const { data, error, isLoading, isFetching, isUninitialized } = useFetchProductDetailsQuery(mydata.length);
  // useEffect(() => {
  //   if (isLoading !== true && data !== null) {
  //     dispatch(setProducts(data?.data));
  //   }
  // }, [data, isLoading]);
  const [name, setName] = React.useState('');
  // console.log(modal);
  return (
    <Box sx={{ position: 'relative' }}>
      <ColorMode>
        <MyAuthContext>
          <ThemeProvider theme={theme}>
            <Navbar
              cartopen={cartopen}
              setCartOpen={setCartOpen}
              close={modal}
              onClose={setModal}
            />
            <CartModal
              cartopen={cartopen}
              setCartOpen={setCartOpen}
              setModal={setModal}
              modal={modal}
            />
            <Routes>
              <Route
                path="/"
                element={<Landing name={name} setName={setName} />}
              />
              <Route
                path="/products"
                element={<Products name={name} setName={setName} />}
              />
              <Route
                path="/products/:id"
                element={
                  <ProductDetail
                    width="100vw"
                    height="100vh"
                    bgsize="50vw 100vh"
                  />
                }
              />
              <Route
                path="/checkout"
                element={
                  <Checkout formData={formData} setFormData={setFormData} />
                }
              />
              <Route
                path="/shipping"
                element={
                  <Shipping
                    formData={formData}
                    setFormData={setFormData}
                    options={options}
                    value={value}
                    setValue={setValue}
                  />
                }
              />
            </Routes>
            <Footer />
            <UserModal
              close={modal}
              onClose={setModal}
              yesFunction={() => {
                navigation('/shipping');
              }}
              noFunction={() => {
                navigation('/checkout');
              }}
            />
          </ThemeProvider>
        </MyAuthContext>
      </ColorMode>
    </Box>
  );
};

export default App;
