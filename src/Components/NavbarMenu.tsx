import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box, Typography } from '@mui/material';
import ColorMode, { MyContext } from '../contexts/ColorMode';
import { theme } from '../App';
import { LogOut } from '../supabase/routes';
import { useDispatch, useSelector } from 'react-redux';
import { authInitialState, setProfile } from '../Redux/features/AuthSlice';
import { AuthContext } from '../contexts/AuthContext';
import { AccountCircle } from '@mui/icons-material';
import { RootState } from '../app/combine';
type navbarMenuType = {
  anchorEl: HTMLElement | null;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
};
export default function NavbarMenu({ anchorEl, setAnchorEl }: navbarMenuType) {
  const menuopen = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { mode } = React.useContext(MyContext);
  const dispatch = useDispatch();
  const { setIsProfile } = React.useContext(AuthContext);
  const profileDetails = useSelector(
    (state: RootState) => state.profile.profileDetails
  );
  return (
    <Menu
      id="demo-positioned-menu"
      aria-labelledby="demo-positioned-button"
      anchorEl={anchorEl}
      open={menuopen}
      onClose={handleClose}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      sx={{
        '& .MuiPaper-root': {
          backgroundColor: `${mode}.background`,
          paddingTop: '0px',
          paddingBottom: '0px',
        },
        '& .MuiList-root': {
          paddingTop: '0px',
          paddingBottom: '0px',
        },
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          //   backgroundColor: `${theme.palette[mode].primary}80`,
          background: 'rgba(217, 217, 217, 0.25)',
          color: `${mode}.primary`,
          padding: '8px 0',
        }}
      >
        {/*
                  <MenuItem>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <AccountCircle /> 
            <Typography sx={{textAlign:'center', margin:'8px 0'}}>
                Welcome <br/>
              {profileDetails.first_name} {profileDetails.last_name}
            </Typography>
          </Box>
        </MenuItem>
          */}
        <MenuItem onClick={handleClose}>
          <Typography fontFamily={'Montserrat'}>Profile</Typography>
        </MenuItem>
        <MenuItem
          onClick={() => {
            LogOut();
            dispatch(setProfile(authInitialState.profileDetails));
            setIsProfile(false);
            localStorage.removeItem('profileDetails');
            handleClose();
          }}
        >
          <Typography fontFamily={'Montserrat'}>Logout</Typography>
        </MenuItem>
      </Box>
    </Menu>
  );
}
