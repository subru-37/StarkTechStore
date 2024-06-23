import React, { Dispatch, SetStateAction } from 'react';
import { Box, Typography, Drawer, Button, TextField } from '@mui/material';
import { FormData } from '../Pages/Checkout';
type formProps = {
  id: string;
  label: string;
  height: string;
  width: any;
  generalbgcolor: string;
  fieldsetbgcolor: string;
  fieldsetborder: string;
  fieldsetborderradius: string;
  InputProps: any;
  InputLabelProps: any;
  value: string | number | undefined;
  onChange: Dispatch<SetStateAction<FormData>>;
  generalcolor: string;
  name: string;
  type?:string;
  margin: string;
  max?:number;
};
const FormSample = ({
  id,
  label,
  height,
  width,
  generalbgcolor,
  type,
  generalcolor,
  max,
  fieldsetbgcolor,
  fieldsetborder,
  fieldsetborderradius,
  InputProps,
  InputLabelProps,
  value,
  onChange,
  name,
  margin
}: formProps) => {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    onChange((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }
  return (
    <Box sx={{margin: margin, width: width}}>
      <TextField
        id={id}
        label={label}
        required
        type={type}
        sx={{
          height: { height },
          width: '100%',
          '& .MuiOutlinedInput-root': {
            height: { height },
            backgroundColor: { fieldsetbgcolor },
            color: { generalcolor },
            '& fieldset': {
              border: fieldsetborder,
              borderRadius:  fieldsetborderradius ,
              color:  generalcolor ,
            },
            '&.Mui-focused fieldset': {
              border: fieldsetborder,
              borderRadius: fieldsetborderradius ,
              color: generalcolor ,
            },
          },
          '& .MuiOutlinedInput-root:hover': {
            '& fieldset': {
              border: fieldsetborder,
              color:  generalcolor ,
            },
          },
        }}
        InputLabelProps={InputLabelProps}
        InputProps={InputProps}
        value={value}
        onChange={handleChange}
        name={name}
      />
    </Box>
  );
};

export default FormSample;
