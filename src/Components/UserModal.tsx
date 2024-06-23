import React, { useContext } from 'react';
import { Box, Typography, Button, Drawer } from '@mui/material';
import { MyContext } from '../contexts/ColorMode';

type ModalProps = {
  close: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  yesFunction: any;
  noFunction: any;
};
const UserModal = ({ close, onClose, yesFunction, noFunction }: ModalProps) => {
  const { mode } = useContext(MyContext);

  return (
    <Drawer
      open={close}
      onClose={() => onClose(false)}
      anchor='left'
    >
      <Box
        sx={{
          backgroundColor: '#FEFAE0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '300px',
          minWidth: { xs: '90vw', sm: '500px' },
          padding: '50px',
          boxSizing:'border-box',
          position:'fixed',
          left:'50%',
          translate:'-50% -50%',
          top: '50%',
          borderRadius:'10px'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height:'150px',
            flexDirection:'column',
            minWidth:'300px'
          }}
        >
          <Typography
            component={'h3'}
            sx={{
              fontSize: {xs:'1.5rem',md: '2rem'},
              color: `${mode}.text`,
            }}
          >
            Are you already an user?
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
              width:'100%'
            }}
          >
            <Button
              sx={{
                backgroundColor: `${mode}.text`,
                minHeight: '40px',
                minWidth: '140px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color:'#FEFAE0',
                '&:hover': {
                  backgroundColor: `${mode}.text`,
                },
              }}
              onClick={() => {
                onClose(false)
                yesFunction('/shipping')
              }}
            >
              Yes
            </Button>
            <Button
              sx={{
                backgroundColor: `${mode}.text`,
                minHeight: '40px',
                minWidth: '140px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color:'#FEFAE0',
                '&:hover': {
                  backgroundColor: `${mode}.text`,
                },
              }}
              onClick={() => {
                onClose(false)
                noFunction('/checkout')
              }}
            >
              No
            </Button>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};

export default UserModal;
