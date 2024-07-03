import FeatureCard from '../Components/FeatureCard';
import sampleprod from '../assets/productsample.png';
import { cartitems } from './cartitem';
import { useEffect } from 'react';
import { useFetchProductDetailsQuery } from '../api/ProductQuery';
import { useDispatch, useSelector } from 'react-redux';
import { ProductItemType, setProducts } from '../Redux/features/ProductSlice';
const products = (page: string) => {
  // console.log(JSON)
  const dispatch = useDispatch();
  // console.log(data, error, isLoading)
  const mydata = useSelector((state: any) => state.productDetails.products);
  const { data, error, isLoading, isFetching, isUninitialized } = useFetchProductDetailsQuery('/');
  useEffect(() => {
    if (isLoading !== true && data !== null && data !== undefined) {
      // console.log('check')
      dispatch(setProducts(data?.data));
    }
  }, [data, isLoading]);
  if (isLoading) return [{ element: <div>Loading Data</div>, id: 0 }];
  else if (data === null)
    return [
      {
        element: (
          <div>
            error : <br></br>
            {error}
          </div>
        ),
        id: 0,
      },
    ];
  else
    return mydata.map((value: ProductItemType, index: number) => {
      // console.log(value.price);
      return {
        element: (
          <FeatureCard
          index={value.id}
            id={index}
            key={index}
            image={value.image}
            category={value.category_title}
            background={
              'url(), transparent 100% / cover no-repeat'.substring(0, 4) +
              value.image +
              'url(),transparent -32.2px -6px / 112.96% 114.239% no-repeat'.substring(
                4
              )
            }
            cardname={value.title}
            // discprice={value.discprice}
            price={value.price}
            route={page}
          />
        ),
        id: value.id,
      };
    });
};
export { products };
