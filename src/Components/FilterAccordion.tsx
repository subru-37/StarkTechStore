import React, { useContext } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material';
import DownArrow from '../utils/DownArrow';
import { MyContext } from '../contexts/ColorMode';
type props = {
  question: string;
  answer: any;
  handleChange: Function;
  expanded: string | boolean;
  setExpanded: Function;
  panel: string;
};
const FilterAccordion = (props: props) => {
  const { mode } = useContext(MyContext);

  return (
    <Box>
      <Accordion
        expanded={props.expanded === props.panel}
        onChange={props.handleChange(props.panel)}
        sx={{
          background: 'transparent',
          boxShadow: 'none',
          padding: '0px',
          marginTop: '15px',
        }}
      >
        <AccordionSummary expandIcon={<DownArrow />} sx={{ padding: '0px' }}>
          <Typography
            sx={{
              color: `${mode}.text`,
              fontSize: '20px',
              fontWeight: '400',
              lineHeight: '19px',
              letterSpacing: '-0.72px',
            }}
          >
            {props.question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            padding: '0px',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            flexDirection: 'column',
          }}
        >
          {props.answer}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FilterAccordion;
