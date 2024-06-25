import FeatureCard from '../Components/FeatureCard';
import sampleprod from '../assets/productsample.png';
import { cartitems } from './cartitem';
import { useEffect } from 'react';
import { useFetchProductDetailsQuery } from '../api/ProductQuery';
import { useDispatch, useSelector } from 'react-redux';
import { ProductItemType, setProducts } from '../Redux/features/ProductSlice';
const products = (page: string) => {
  const { data, error, isLoading } = useFetchProductDetailsQuery('/');
  const dispatch = useDispatch();
  // console.log(data, error, isLoading)
  const mydata = useSelector((state: any) => state.productDetails.products);
  useEffect(() => {
    if (isLoading !== true && data !== null) {
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
            id={value.id}
            key={index}
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
