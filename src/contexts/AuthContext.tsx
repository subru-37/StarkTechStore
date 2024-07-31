import { ThemeContext } from '@emotion/react';
import { createContext, useEffect } from 'react';
import { useState } from 'react';
import {
  authInitialState,
  authType,
  ProfileType,
  setProfile,
} from '../Redux/features/AuthSlice';
import { setCart } from '../Redux/features/CartSlice';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { getUserData } from '../supabase/routes';
import { MyFormData } from '../App';
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
  setMyProfile: () => {},
});
type myAuthProps = {
  children: JSX.Element;
  setFormData: React.Dispatch<React.SetStateAction<MyFormData>>;
};
const MyAuthContext = ({ children, setFormData }: any) => {
  const location = useLocation();
  const [isProfile, setIsProfile] = useState<boolean>(false);
  const [myprofile, setMyProfile] = useState<authType>(authInitialState);
  const dispatch = useDispatch();

  //checks localstorage for cart details
  useEffect(() => {
    const getMyCart = localStorage.getItem('cart');
    if (getMyCart !== null) {
      const myCart = JSON.parse(getMyCart);
      myCart.cart.length !== 0 && dispatch(setCart(myCart.cart));
    }
  }, []);

  //checks localstorage for profile details
  useEffect(() => {
    const getMyProfile = localStorage.getItem('profileDetails');
    if (getMyProfile !== null) {
      const myProfile = JSON.parse(getMyProfile);
      // //console.log(myProfile)
      dispatch(setProfile(myProfile));
      setIsProfile(true);
      setFormData((preValue: ProfileType) => {
        return {
          ...preValue,
          firstName: myProfile.first_name,
          lastName: myProfile.last_name,
          email: myProfile.email,
        };
      });
    }
  }, [isProfile]);
  const navigate = useNavigate();
  useEffect(() => {
    if (
      (location.pathname === '/shipping' ||
        location.pathname === '/checkout') &&
      isProfile === false
    ) {
      navigate('/');
    }
  }, [isProfile]);
  async function getProfileDetails() {
    const { data, error } = await getUserData();
    //console.log(data.user);
    if (data.user !== null) {
      const myUser = data.user;
      if (myUser.email !== undefined) {
        const email = myUser.email;
        const myUsername = myUser.email.substring(0, myUser.email.indexOf('@'));
        const id = myUser.id;
        const index = myUser.user_metadata.name.indexOf(' ');
        const firstName = myUser.user_metadata.name.substring(0, index);
        const lastName = myUser.user_metadata.name.substring(index + 1);
        const pic = myUser.user_metadata.picture;
        dispatch(
          setProfile({
            username: myUsername,
            email: email,
            first_name: firstName,
            last_name: lastName,
            profilePic: pic,
            id: id,
            contactId: '',
          })
        );
        setIsProfile(true);
      }
    }
  }
  useEffect(() => {
    getProfileDetails();
    // return getProfileDetails
  }, []);

  return (
    <AuthContext.Provider
      value={{ isProfile, setIsProfile, myprofile, setMyProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default MyAuthContext;
