import React, { useContext, useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Drawer,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { MyContext } from '../contexts/ColorMode';
import { theme } from '../App';
import GoogleIcon from '@mui/icons-material/Google';
import FormSample from './FormSample';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import { useLogInQuery, useSignUpQuery } from '../api/AuthQuery';
import {
  getProfileDetails,
  getUserData,
  LogIn,
  setProfileDetails,
  SignUp,
  SignUpWithGoogle,
} from '../supabase/routes';
import { AuthContext } from '../contexts/AuthContext';
import { useDispatch } from 'react-redux';
import { setProfile } from '../Redux/features/AuthSlice';

type ModalProps = {
  close: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  yesFunction: any;
  noFunction: any;
};
export type SignUp = {
  // username: string;
  // firstname: string;
  // lastname: string;
  name: string;
  email: string;
  password: string;
  cpassword: string;
};
const UserModal = ({ close, onClose, yesFunction, noFunction }: ModalProps) => {
  const { mode } = useContext(MyContext);
  const [signMode, setSignMode] = useState<'Sign Up' | 'Log In'>('Sign Up');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { isProfile, setIsProfile } = useContext(AuthContext);
  const [signUp, setSignUp] = useState<SignUp>({
    // username: '',
    // firstname: '',
    // lastname: '',
    name: '',
    email: '',
    password: '',
    cpassword: '',
  });
  // const []
  const [error, setError] = useState<string>('');
  const dispatch = useDispatch();
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const index = signUp.name.indexOf(' ');
    //console.log(error);
    if (signMode === 'Sign Up') {
      if (signUp.password !== signUp.cpassword) {
        setError('Enter similar password while confirming');
      } else if (index === -1) {
        setError('Enter full name with atleast one initial');
      } else {
        const firstName = signUp.name.substring(0, index);
        const lastName = signUp.name.substring(index + 1);
        const email = signUp.email;
        const password = signUp.password;
        const name = signUp.name;
        try {
          const data = await SignUp(email, password, name);
          //console.log(data);
          if (data.error?.message) {
            setError(data.error.message);
          } else if (data.data.user !== null) {
            setIsProfile(true);
            const username = signUp.email.substring(
              0,
              signUp.email.indexOf('@')
            );
            const response = await setProfileDetails(
              username,
              email,
              firstName,
              lastName,
              data?.data?.user.id
            );
            //console.log(response);
            // dispatch(
            //   setProfile({
            //     username: username,
            //     email: email,
            //     firstName: firstName,
            //     lastName: lastName,
            //     profilePic: '',
            //     contactId: '',
            //     id: data?.data?.user.id,
            //   })
            // );
            setSignMode('Log In');
            setError('Check your email for verification');
          } else {
            setError('Received data is null, try again');
          }
        } catch (e: any) {
          // setError(e)
          //console.log(e);
        }
      }
    } else {
      const email = signUp.email;
      const password = signUp.password;
      try {
        const data = await LogIn(email, password);
        //console.log(data);
        if (data.error?.message) {
          setError(data.error.message);
        } else if (data.data.user !== null) {
          //console.log(data?.data?.user.id);
          const response = await getProfileDetails(data.data.user.id);
          //console.log(response.data);
          if (response.error !== null) {
            setError(response.error.message);
          } else if (response.data !== null) {
            const profileDeets = response.data[0];
            dispatch(setProfile(profileDeets));
            setIsProfile(true);
            onClose(false);
          }
        }
      } catch (e: any) {
        // setError(e)
        //console.log(e);
      }
    }
  };

  const handleGoogleClick = async ()=> {
    const {data, error} = await SignUpWithGoogle();
    // //console.log('hi')
    // const {data: mydata, error: myError} = await getUserData();
    // //console.log(mydata, myError);
    // //console.log(data, error);
    // // if(da)
  }
  
  return (
    <Drawer open={close} onClose={() => onClose(false)} anchor="left">
      <Box
        sx={{
          backgroundColor: `${theme['palette'][mode].background}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: signMode === 'Sign Up' ? '600px' : '500px',
          minWidth: { xs: '90vw', sm: '500px' },
          padding: { xs: '10px', sm: '0' },
          boxSizing: 'border-box',
          position: 'fixed',
          left: '50%',
          translate: '-50% -50%',
          top: '50%',
          borderRadius: '10px',
          flexDirection: 'column',
          // position
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            width: '100%',
            minHeight: '75px',
            borderBottom: `1px solid ${theme.palette[mode].primary}50`,
            // jus
          }}
        >
          <Box
            onClick={() => setSignMode('Sign Up')}
            sx={{
              cursor: 'pointer',
              width: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              backgroundColor:
                signMode === 'Sign Up'
                  ? `${theme.palette[mode].primary}20`
                  : `${theme.palette[mode].primary}50`,
              borderTopLeftRadius: '10px',
              borderTop:
                signMode === 'Sign Up'
                  ? `2px solid ${theme.palette[mode].primary}`
                  : null,
              // borderTopRightRadius: '10px',
            }}
          >
            <Typography color={`${mode}.text`} fontSize={'1.3rem'}>
              Sign Up
            </Typography>
          </Box>
          <Box
            onClick={() => setSignMode('Log In')}
            sx={{
              cursor: 'pointer',
              width: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              backgroundColor:
                signMode === 'Log In'
                  ? `${theme.palette[mode].primary}20`
                  : `${theme.palette[mode].primary}50`,
              // borderTopLeftRadius: '10px',
              borderTop:
                signMode === 'Log In'
                  ? `2px solid ${theme.palette[mode].primary}`
                  : null,
              borderTopRightRadius: '10px',
            }}
          >
            <Typography color={`${mode}.text`} fontSize={'1.3rem'}>
              Log In
            </Typography>
          </Box>
        </Box>
        {signMode === 'Sign Up' ? (
          <Box
            // component={'form'}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              boxSizing: 'border-box',
              padding: '15px',
              minHeight: 'calc(100% - 75px)',
              backgroundColor: `${theme.palette[mode].primary}20`,
              borderBottomLeftRadius: '10px',
              borderBottomRightRadius: '10px',
            }}
          >
            {/* <Typography color={`${mode}.text`}>Sign Up</Typography> */}
            <Box
              component={'form'}
              // method={'get'}
              onSubmit={handleSubmit}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                boxSizing: 'border-box',
                flexDirection: 'column',
                backgroundColor: `${theme.palette[mode].primary}20`,
                borderRadius: '10px',
                height: '100%',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  boxSizing: 'border-box',
                  flexDirection: 'column',
                  height: '65%',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    boxSizing: 'border-box',
                    flexDirection: 'column',
                  }}
                >
                  <FormSample
                    id="name"
                    label="Full Name"
                    height="55px"
                    // type="number"
                    width={{ xs: '100%', sm: '85%' }}
                    generalbgcolor={`${mode}.primary`}
                    fieldsetbgcolor={`${mode}.primary`}
                    fieldsetborder={`1px solid ${theme['palette'][mode].primary}`}
                    fieldsetborderradius="10px"
                    InputProps={{
                      style: {
                        color: `${theme['palette'][mode]['text']}`,
                        fontFamily: 'Montserrat',
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        color: `${theme['palette'][mode]['text']}`,
                        fontFamily: 'Montserrat',
                        fontSize: '12px',
                      },
                    }}
                    value={signUp.name}
                    onChange={setSignUp}
                    name={'name'}
                    generalcolor="#00584A"
                    margin="5px 0"
                  />
                  <FormSample
                    id="email"
                    label="Email"
                    height="55px"
                    type="email"
                    width={{ xs: '100%', md: '85%' }}
                    generalbgcolor={`${mode}.primary`}
                    fieldsetbgcolor={`${mode}.primary`}
                    fieldsetborder={`1px solid ${theme['palette'][mode].primary}`}
                    fieldsetborderradius="10px"
                    InputProps={{
                      style: {
                        color: `${theme['palette'][mode]['text']}`,
                        fontFamily: 'Montserrat',
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        color: `${theme['palette'][mode]['text']}`,
                        fontFamily: 'Montserrat',
                        fontSize: '12px',
                      },
                    }}
                    value={signUp.email}
                    onChange={setSignUp}
                    name={'email'}
                    generalcolor="#00584A"
                    margin="5px 0"
                  />
                  <FormSample
                    id="password"
                    label="Password"
                    height="55px"
                    type={showPassword ? 'text' : 'password'}
                    width={{ xs: '100%', md: '85%' }}
                    generalbgcolor={`${mode}.primary`}
                    fieldsetbgcolor={`${mode}.primary`}
                    fieldsetborder={`1px solid ${theme['palette'][mode].primary}`}
                    fieldsetborderradius="10px"
                    InputProps={{
                      style: {
                        color: `${theme['palette'][mode]['text']}`,
                        fontFamily: 'Montserrat',
                      },
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setShowPassword(!showPassword)}
                            // onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    InputLabelProps={{
                      style: {
                        color: `${theme['palette'][mode]['text']}`,
                        fontFamily: 'Montserrat',
                        fontSize: '12px',
                      },
                    }}
                    value={signUp.password}
                    onChange={setSignUp}
                    name={'password'}
                    generalcolor="#00584A"
                    margin="5px 0"
                  />
                  <FormSample
                    id="cpassword"
                    label="Confirm Password"
                    height="55px"
                    type={showPassword ? 'text' : 'password'}
                    width={{ xs: '100%', md: '85%' }}
                    generalbgcolor={`${mode}.primary`}
                    fieldsetbgcolor={`${mode}.primary`}
                    fieldsetborder={`1px solid ${theme['palette'][mode].primary}`}
                    fieldsetborderradius="10px"
                    InputProps={{
                      style: {
                        color: `${theme['palette'][mode]['text']}`,
                        fontFamily: 'Montserrat',
                      },
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setShowPassword(!showPassword)}
                            // onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    InputLabelProps={{
                      style: {
                        color: `${theme['palette'][mode]['text']}`,
                        fontFamily: 'Montserrat',
                        fontSize: '12px',
                      },
                    }}
                    value={signUp.cpassword}
                    onChange={setSignUp}
                    name={'cpassword'}
                    generalcolor="#00584A"
                    margin="5px 0"
                  />
                </Box>
                <Button
                  type="submit"
                  sx={{
                    backgroundColor: `${theme.palette[mode].primary}`,
                    '&:hover': {
                      backgroundColor: `${theme.palette[mode].primary}`,
                    },
                    textTransform: 'none',
                    fontFamily: 'Montserrat',
                    width: { xs: '50vw', sm: '50%' },
                    height: '50px',
                    color: `${mode}.background`,
                    fontSize: '1.1rem',
                  }}
                >
                  Sign Up
                </Button>
              </Box>
              {error.length !== 0 && (
                <Box
                  sx={{
                    width: '100%',
                    height: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      color: `${mode}.primary`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    Error: {error}
                  </Typography>
                </Box>
              )}
              <Box
                sx={{
                  height: '20px',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  margin: '20px 0',
                }}
              >
                <Box
                  component={'span'}
                  sx={{
                    backgroundColor: `${mode}.primary`,
                    width: '35%',
                    height: '1px',
                  }}
                ></Box>
                <Typography
                  sx={{
                    color: `${mode}.primary`,
                    fontSize: '0.8rem',
                    fontFamily: 'Montserrat',
                  }}
                >
                  Or
                </Typography>
                <Box
                  component={'span'}
                  sx={{
                    backgroundColor: `${mode}.primary`,
                    width: '35%',
                    height: '1px',
                  }}
                ></Box>
              </Box>

              <Button
                // type="submit"
                sx={{
                  backgroundColor: `${theme.palette[mode].primary}`,
                  '&:hover': {
                    backgroundColor: `${theme.palette[mode].primary}`,
                  },
                  textTransform: 'none',
                  fontFamily: 'Montserrat',
                  width: { xs: '50vw', sm: '75%' },
                  height: '50px',
                  color: `${mode}.background`,
                  fontSize: '1.1rem',
                }}
                onClick={handleGoogleClick}
              >
                Sign In with Google
                <GoogleIcon
                  sx={{ color: `${mode}.background`, marginLeft: '5px' }}
                />
              </Button>
            </Box>
          </Box>
        ) : (
          <Box
            // component={'form'}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              boxSizing: 'border-box',
              padding: '15px',
              minHeight: 'calc(100% - 75px)',
              backgroundColor: `${theme.palette[mode].primary}20`,
              borderBottomLeftRadius: '10px',
              borderBottomRightRadius: '10px',
            }}
          >
            {/* <Typography color={`${mode}.text`}>Sign Up</Typography> */}
            <Box
              component={'form'}
              onSubmit={handleSubmit}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                boxSizing: 'border-box',
                flexDirection: 'column',
                backgroundColor: `${theme.palette[mode].primary}20`,
                borderRadius: '10px',
                height: '100%',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  boxSizing: 'border-box',
                  flexDirection: 'column',
                  height: '50%',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    boxSizing: 'border-box',
                    flexDirection: 'column',
                  }}
                >
                  <FormSample
                    id="email"
                    label="Email"
                    height="55px"
                    type="email"
                    width={{ xs: '100%', md: '85%' }}
                    generalbgcolor={`${mode}.primary`}
                    fieldsetbgcolor={`${mode}.primary`}
                    fieldsetborder={`1px solid ${theme['palette'][mode].primary}`}
                    fieldsetborderradius="10px"
                    InputProps={{
                      style: {
                        color: `${theme['palette'][mode]['text']}`,
                        fontFamily: 'Montserrat',
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        color: `${theme['palette'][mode]['text']}`,
                        fontFamily: 'Montserrat',
                        fontSize: '12px',
                      },
                    }}
                    value={signUp.email}
                    onChange={setSignUp}
                    name={'email'}
                    generalcolor="#00584A"
                    margin="5px 0"
                  />
                  <FormSample
                    id="password"
                    label="Password"
                    height="55px"
                    type={showPassword ? 'text' : 'password'}
                    width={{ xs: '100%', md: '85%' }}
                    generalbgcolor={`${mode}.primary`}
                    fieldsetbgcolor={`${mode}.primary`}
                    fieldsetborder={`1px solid ${theme['palette'][mode].primary}`}
                    fieldsetborderradius="10px"
                    InputProps={{
                      style: {
                        color: `${theme['palette'][mode]['text']}`,
                        fontFamily: 'Montserrat',
                      },
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setShowPassword(!showPassword)}
                            // onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    InputLabelProps={{
                      style: {
                        color: `${theme['palette'][mode]['text']}`,
                        fontFamily: 'Montserrat',
                        fontSize: '12px',
                      },
                    }}
                    value={signUp.password}
                    onChange={setSignUp}
                    name={'password'}
                    generalcolor="#00584A"
                    margin="5px 0"
                  />
                </Box>
                <Button
                  type="submit"
                  sx={{
                    backgroundColor: `${theme.palette[mode].primary}`,
                    '&:hover': {
                      backgroundColor: `${theme.palette[mode].primary}`,
                    },
                    textTransform: 'none',
                    fontFamily: 'Montserrat',
                    width: { xs: '50vw', sm: '50%' },
                    height: '50px',
                    color: `${mode}.background`,
                    fontSize: '1.1rem',
                  }}
                >
                  Log In
                </Button>
              </Box>
              {error.length !== 0 && (
                <Box
                  sx={{
                    width: '100%',
                    height: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      color: `${mode}.accent`,
                    }}
                  >
                    {error}
                  </Typography>
                </Box>
              )}
              <Box
                sx={{
                  height: '20px',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  margin: '20px 0',
                }}
              >
                <Box
                  component={'span'}
                  sx={{
                    backgroundColor: `${mode}.primary`,
                    width: '35%',
                    height: '1px',
                  }}
                ></Box>
                <Typography
                  sx={{
                    color: `${mode}.primary`,
                    fontSize: '0.8rem',
                    fontFamily: 'Montserrat',
                  }}
                >
                  Or
                </Typography>
                <Box
                  component={'span'}
                  sx={{
                    backgroundColor: `${mode}.primary`,
                    width: '35%',
                    height: '1px',
                  }}
                ></Box>
              </Box>

              <Button
                // type="submit"
                sx={{
                  backgroundColor: `${theme.palette[mode].primary}`,
                  '&:hover': {
                    backgroundColor: `${theme.palette[mode].primary}`,
                  },
                  textTransform: 'none',
                  fontFamily: 'Montserrat',
                  width: { xs: '50vw', sm: '75%' },
                  height: '50px',
                  color: `${mode}.background`,
                  fontSize: '1.1rem',
                }}
                onClick={handleGoogleClick}
              >
                Sign In with Google
                <GoogleIcon
                  sx={{ color: `${mode}.background`, marginLeft: '5px' }}
                />
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Drawer>
  );
};

export default UserModal;
