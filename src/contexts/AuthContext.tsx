import { ThemeContext } from '@emotion/react';
import { createContext, useEffect } from 'react';
import { useState } from 'react';
import { authInitialState, authType, ProfileType, setProfile } from '../Redux/features/AuthSlice';
import { setCart } from '../Redux/features/CartSlice';
import { useDispatch } from 'react-redux';
type contextType = {
  isProfile: boolean;
  setIsProfile: React.Dispatch<React.SetStateAction<boolean>>;
  myprofile: authType;
  setMyProfile: React.Dispatch<React.SetStateAction<authType>>;
};
export const AuthContext = createContext<contextType>({
  isProfile: false,
  setIsProfile: () => {},
  myprofile: authInitialState,
  setMyProfile: ()=>{}
});

const MyAuthContext = ({ children }: any) => {
  const [isProfile, setIsProfile] = useState<boolean>(false);
  const [myprofile, setMyProfile] = useState<authType>(authInitialState);
  const dispatch = useDispatch();
  useEffect(() => {
    const getMyCart = localStorage.getItem('cart');
    if (getMyCart !== null) {
      const myCart = JSON.parse(getMyCart);
      myCart.cart.length !== 0 && dispatch(setCart(myCart.cart));
    }
  }, []);
  useEffect(() => {
    const getMyProfile = localStorage.getItem('profileDetails');
    if (getMyProfile !== null) {
      const myProfile = JSON.parse(getMyProfile);
      // console.log(myProfile)
      dispatch(setProfile(myProfile));
      
      setIsProfile(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{isProfile, setIsProfile, myprofile, setMyProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export default MyAuthContext;
