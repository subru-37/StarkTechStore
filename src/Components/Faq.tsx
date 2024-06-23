import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import MUIAccordion from './MUIAccordion';
import { MyContext } from '../contexts/ColorMode';
const Faq = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const { mode } = useContext(MyContext);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        minWidth: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '1000',
        position: 'relative',
        backgroundColor: `${mode}.background`,
      }}
    >
      <Box
        sx={{
          width: { xs: '100vw', sm: '90vw', md: '80vw' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        <Box
          sx={{
            width: { xs: '90vw', sm: '45%', md: '30%' },
            display: 'flex',
            justifyContent: 'center',
            padding: { xs: '10px', sm: '20px' },
            flexDirection: 'column',
            marginTop: { xs: '0px', sm: '20px', md: '80px' },
          }}
        >
          <Typography
            component={'h4'}
            sx={{
              color: `${mode}.text`,
              fontSize: '45px',
              fontWeight: '600',
              lineHeight: '68px',
            }}
          >
            FAQ
          </Typography>
          <Typography
            component={'h4'}
            sx={{
              color: `${mode}.primary`,
              fontFamily: 'Lucida Sans',
              fontSize: '20px',
              fontWeight: '500',
              lineHeight: 'normal',
            }}
          >
            We are an up and coming retail distributor. Contact us for bulk orders
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: '90vw', sm: '55%', md: '70%' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: { xs: '10px', sm: '20px', md: '80px' },
            flexDirection: 'column',
          }}
        >
          <MUIAccordion
            panel="panel1"
            handleChange={handleChange}
            expanded={expanded}
            setExpanded={setExpanded}
            question="Lorem ipsum dolor sit amet, consectetuer Lorem ipsum dolor sit amet, consectetuer adipiscing elit. "
            answer="Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam."
          />
          <MUIAccordion
            panel="panel2"
            handleChange={handleChange}
            expanded={expanded}
            setExpanded={setExpanded}
            question="Lorem ipsum dolor sit amet, consectetuer Lorem ipsum dolor sit amet, consectetuer adipiscing elit. "
            answer="Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
          Aliquam eget maximus est, id dignissim quam."
          />
          <MUIAccordion
            panel="panel3"
            handleChange={handleChange}
            expanded={expanded}
            setExpanded={setExpanded}
            question="Lorem ipsum dolor sit amet, consectetuer Lorem ipsum dolor sit amet, consectetuer adipiscing elit. "
            answer="Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
        Aliquam eget maximus est, id dignissim quam."
          />
          <MUIAccordion
            panel="panel4"
            handleChange={handleChange}
            expanded={expanded}
            setExpanded={setExpanded}
            question="Lorem ipsum dolor sit amet, consectetuer Lorem ipsum dolor sit amet, consectetuer adipiscing elit. "
            answer="Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
      Aliquam eget maximus est, id dignissim quam."
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Faq;
