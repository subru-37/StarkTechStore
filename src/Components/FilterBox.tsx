import React, { Dispatch, SetStateAction, useContext } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Checkbox,
  FormControlLabel,
  Slider,
  Typography,
} from '@mui/material';
import FilterAccordion from './FilterAccordion';
import DownArrow from '../utils/DownArrow';
import { MyContext } from '../contexts/ColorMode';
import { theme } from '../App';
import { categoryFilterType } from '../Pages/Products';
type filtertypes = {
  [key: string]: any;
};
type props = {
  categories: string[];
  payments: string[];
  paymentFilters?: filtertypes;
  categoryFilters: categoryFilterType;
  slideValue: number[];
  setPaymentFilters?: Dispatch<SetStateAction<filtertypes>>;
  setCategoryFilters: Dispatch<SetStateAction<categoryFilterType>>;
  setSlideValue: Dispatch<SetStateAction<number[]>>; //Dispatch<SetStateAction<number>>;
};
const FilterBox = ({
  categories,
  payments,
  paymentFilters,
  categoryFilters,
  setPaymentFilters,
  setCategoryFilters,
  setSlideValue,
  slideValue,
}: props) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  function handleSlider(event: any, newValue: number[] | number) {
    setSlideValue(newValue as number[]);
  }
  const { mode } = useContext(MyContext);

  return (
    <Box
      sx={{
        borderRadius: '20px',
        border: `1px solid ${theme['palette'][mode]['primary']}`,
        boxSizing: 'border-box',
        padding: { xs: '50px 20px', md: '20px' },
        position: { xs: 'fixed', md: 'relative' },
        width: { xs: '80vw', sm: '30%', md: '30%', lg: '23%' },
        top: { xs: '180px', md: '0px' },
        left: { xs: '40px', md: '0px' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: `${mode}.background`,
        marginTop: '25px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          flexDirection: 'column',
        }}
      >
        <Typography
          sx={{
            color: `${mode}.text`,
            fontWeight: '600',
            fontSize: '20px',
            borderBottom: `1px solid ${theme.palette[mode].text}`,
            width: '100%',
          }}
        >
          Filter
        </Typography>

        <FilterAccordion
          question="Categories"
          panel="panel1"
          handleChange={handleChange}
          expanded={expanded}
          setExpanded={setExpanded}
          answer={categories.map((value, index) => {
            return (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    name={value}
                    checked={categoryFilters[value]}
                    sx={{
                      '& .MuiSvgIcon-root': {
                        fontSize: 16,
                        color: `${mode}.text`,
                      },
                    }}
                    onChange={(event) =>
                      setCategoryFilters((preValue) => {
                        return {
                          ...preValue,
                          [value]: event.target.checked,
                        };
                      })
                    }
                    // value={categoryFilters[value]}
                  ></Checkbox>
                }
                label={value}
                sx={{
                  fontSize: '14px',
                  color: `${mode}.text`,
                }}
              />
            );
          })}
        />
        <Box
          sx={{
            width: '100%',
            height: '0.4px',
            backgroundColor: `${mode}.text`,
            marginTop: '15px',
          }}
        />
        <Typography
          sx={{
            color: `${mode}.text`,
            fontSize: '20px',
            fontWeight: '400',
            lineHeight: '19px',
            letterSpacing: '-0.72px',
            marginTop: '15px',
          }}
        >
          {' '}
          Price
        </Typography>
        <Slider
          sx={{ color: `${mode}.text` }}
          size="small"
          onChange={handleSlider}
          valueLabelDisplay="auto"
          //   aria-label='Small'
          getAriaValueText={(value) => `${value}/-`}
          getAriaLabel={() => 'Price Range'}
          step={50}
          min={0}
          max={1200}
          defaultValue={[0, 1200]}
        />
        <Box
          sx={{
            width: '100%',
            paddingLeft: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            flexDirection: 'row',
          }}
        >
          <Typography sx={{ color: `${mode}.text`, fontSize: '16px' }}>
            $ {slideValue[0]} - $ {slideValue[1]}
          </Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
            height: '0.4px',
            backgroundColor: `${mode}.text`,
            marginTop: '15px',
          }}
        />
        {/* <FilterAccordion
          question="Payment"
          panel="panel2"
          handleChange={handleChange}
          expanded={expanded}
          setExpanded={setExpanded}
          answer={payments.map((value, index) => {
            return (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    name={value}
                    checked={paymentFilters.value}
                    sx={{
                      '& .MuiSvgIcon-root': {
                        fontSize: 16,
                        color: `${mode}.text`,
                      },
                    }}
                    onChange={setPaymentFilters}
                  ></Checkbox>
                }
                label={value}
                sx={{
                  fontSize: '14px',
                  color: `${mode}.text`,
                }}
              />
            );
          })}
        />
        <Box
          sx={{
            width: '100%',
            height: '0.4px',
            backgroundColor: `${mode}.text`,
            margin: '15px 0',
          }}
        /> */}
      </Box>
    </Box>
  );
};

export default FilterBox;
