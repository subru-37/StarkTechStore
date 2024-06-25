import { Box, Typography, Button } from '@mui/material';
import React, { useContext } from 'react';
import SlideShow from './Slideshow';
// import { cartitems } from '../sampledata/cartitem';
import { useParams } from 'react-router-dom';
import highqualitysample from '../assets/highqualitysample.jpg';
import { useImageSize } from 'react-image-size';
import { useMediaQuery } from '@mui/material';
import CartButton from './CartButton';
import { MyContext } from '../contexts/ColorMode';
import { theme } from '../App';
import { useSelector } from 'react-redux';
import { ProductItemType } from '../Redux/features/ProductSlice';
import { useFetchProductQuery } from '../api/ProductQuery';
type props = {
  height: string;
  width: string;
  bgsize: string;
};
const ProductDetail = ({ height, width, bgsize }: props) => {
  const width600 = useMediaQuery('(max-width: 600px)');
  // const [wishlist, setWishList] = React.useState<boolean>(false);
  const { id } = useParams();
  const index = id ? parseInt(id) : 0;
  // const details = useSelector((state: any) => state.productDetails.myProduct);
  const { data, error, isLoading } = useFetchProductQuery(index);
  //console.log(data, error, isLoading);
  const { mode } = useContext(MyContext);
  const details = data?.data && data?.data[0];
  const image = String(details?.image);
  //console.log(image);
  const [dimensions, { loading, error: error2 }] = useImageSize(image);
  if (isLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100vw',
          height: '100vh',
          backgroundColor: `${mode}.background`,
          color: `${mode}.primary`,
          fontSize: '2rem',
        }}
      >
        Loading
      </Box>
    );
  } else if (data?.error !== null) {
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100vw',
          height: '100vh',
          backgroundColor: `${mode}.background`,
          color: `${mode}.primary`,
          fontSize: '2rem',
          fontFamily: 'Montserrat',
        }}
      >
        Loading
      </Box>
    );
  } else {
    if (data?.data !== null) {


      const aspectratio =
        dimensions !== null
          ? Number(dimensions.width) / Number(dimensions.height)
          : 0;
      const slides = [
        <Box
          sx={{
            height: {
              xs: '50vh',
              sm: `calc(300px/${aspectratio})`,
              md: `calc(450px/${aspectratio})`,
              lg: `calc(500px/${aspectratio})`,
            },
            width: {
              xs: `calc(50vh*${aspectratio})`,
              sm: `300px`,
              md: '450px',
              lg: '500px',
            },
            backgroundImage: `url(${details?.image})`,
            //   backgroundColor: `${mode}.text`,
            backgroundSize: {
              xs: `50vh calc(50vh/${aspectratio})`,
              sm: `300px calc(300px/${aspectratio})`,
              md: `450px calc(450px/${aspectratio})`,
              lg: `500px calc(500px/${aspectratio})`,
            },
            borderRadius: '20px',
            backgroundRepeat: 'no-repeat',
          }}
        ></Box>,
      ];
      // //console.log(aspectratio, error2, dimensions, data.data);

      return (
        <Box
          sx={{
            // borderRadius: '20px',
            backgroundColor: `${mode}.background`,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            flexDirection: { xs: 'column', sm: 'row' },
            height: height,
            width: width,
            // paddingBottom: '75px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              width: !width600 ? '50%' : '100vw',
              height: '85%',
            }}
          >
            <SlideShow
              components={slides}
              indicators={false}
              arrows={false}
              show1100={1}
              show400={1}
              show600={1}
              show900={1}
              width={'100%'}
              // height='80vh'
            />
          </Box>
          {/* product content  */}
          <Box
            sx={{
              height: { xs: '50vh', sm: '85%' },
              width: { xs: '100vw', sm: '50%' },
              backgroundColor: `${mode}.background`,
              padding: { xs: '0 20px', sm: '0px 50px' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxSizing: 'border-box',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'column',
                color: `${mode}.text`,
                width: '100%',
              }}
            >
              <Typography
                component={'h3'}
                sx={{
                  fontSize: { xs: '20px', sm: '32px' },
                  fontWeight: '500',
                  fontFamily: 'Roboto Slab !important',
                  letterSpacing: '-0.96px',
                  lineHeight: '38px',
                  width: '100%',
                  textAlign: 'left',
                  color: `${mode}.text`,
                }}
              >
                {details?.title}
              </Typography>
              {/* price */}
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}
              >
                <Typography
                  //   component={'h6'}
                  sx={{
                    color: `${mode}.text`,
                    fontSize: '32px',
                    margin: '10px 5px',
                    fontWeight: '600',
                  }}
                >
                  $ {details?.price}
                </Typography>
                {/* <Typography
                //   component={'h6'}
                sx={{
                  color: '#ACD1AE',
                  fontSize: '24px',
                  margin: '10px 5px',
                  fontWeight: '600',
                  textDecorationLine: 'line-through',
                }}
              >
                {details.price}
              </Typography> */}
                {/* <Typography
                sx={{
                  width: '100%',
                  fontStyle: 'italic',
                  letterSpacing: '-0.42px',
                  lineHeight: '17px',
                  color: `${mode}.secondary`,
                }}
              >
                {details.summary}
              </Typography> */}
              </Box>
              <Box>
                {/* <Typography
                sx={{
                  color: `${mode}.text`,
                  fontSize: '14px',
                  lineHeight: '1rem',
                  letterSpacing: '-0.42px',
                  padding: '50px 0 40px 0',
                  borderBottom: `2px solid ${theme['palette'][mode].primary}`,
                }}
              >
                {details.desc}
              </Typography> */}
              </Box>
              <Box
                sx={{
                  minHeight: '75px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  flexDirection: 'row',
                  width: '100%',
                }}
              >
                {/* {wishlist ? (
                <FavoriteIcon
                  onClick={() => setWishList(!wishlist)}
                  sx={{ color: `${mode}.text` }}
                />
              ) : (
                <FavoriteBorderIcon
                  onClick={() => setWishList(!wishlist)}
                  sx={{ color: `${mode}.text` }}
                />
              )} */}
                {/* <Button
                sx={{
                  '&:hover': {
                    backgroundColor: `${mode}.text`,
                  },
                  backgroundColor: `${mode}.text`,
                  minHeight: '50px',
                  minWidth: '150px',
                  marginLeft: '25px',
                }}
               onClick={()=> {
                addProductHandler(sampleData[index]);
               }}
              >
                <Typography
                  sx={{
                    color: `${mode}.background`,
                    fontSize: '1rem',
                    fontWeight: '500',
                    marginRight: '25px',
                  }}
                >
                  {'Cart'}
                </Typography>
                <Plus />
              </Button> */}
                <CartButton id={id} />
              </Box>
            </Box>
          </Box>
        </Box>
      );
    } else {
      return <div>Unique error</div>;
    }
  }
};

export default ProductDetail;
