import React, { useContext } from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@mui/material';
import Plus from '../utils/Plus';
import { MyContext } from '../contexts/ColorMode';
import { theme } from '../App';
type props = {
  question: string;
  answer: string;
  handleChange: Function;
  expanded: string | boolean;
  setExpanded: Function;
  panel: string;
};
const MUIAccordion = (props: props) => {
  //   const [expanded, setExpanded] = React.useState<string | false>(false);

  //   const handleChange =
  //     (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
  //       setExpanded(isExpanded ? panel : false);
  //     };
  const {mode} = useContext(MyContext);
  return (
    <Box sx={{ margin: '5px 0' }}>
      <Accordion
        expanded={props.expanded === props.panel}
        onChange={props.handleChange(props.panel)}
        sx={{
          backgroundColor: `${theme['palette'][mode]['primary']}D0`,
          borderRadius: '20px !important',
          border: `1px dashed ${mode}.primary`,
        }}
      >
        <AccordionSummary
          expandIcon={<Plus color={theme['palette'][mode]['background']}/>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{ padding: { xs: '25px 15px', sm: '25px 50px' } }}
        >
          <Typography
            sx={{
              width: '90%',
              flexShrink: 0,
              color: `${mode}.background`,
              fontSize: '16px',
              fontWeight: '400',
              lineHeight: 'normal',
            }}
          >
            {props.question}
          </Typography>
          {/* <Typography sx={{ color: 'background.secondary' }}>
            I am an accordion
          </Typography> */}
        </AccordionSummary>
        <AccordionDetails sx={{ padding: '25px 50px' }}>
          <Typography
            sx={{
              fontSize: '16px',
              color: `${mode}.background`,
              fontWeight: '400',
            }}
          >
            {props.answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default MUIAccordion;
