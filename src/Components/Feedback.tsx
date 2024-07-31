import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import FeedbackCard from './FeedbackCard';
import SlideShow from './Slideshow';
import { MyContext } from '../contexts/ColorMode';
const Feedback = () => {
  const { mode } = useContext(MyContext);

  const cards = [
    {
      bgcolor: '#F8E6CA',
      titlecolor: '#9C823F',
      rotate: '5deg',
      name: 'John Doe',
      profession: 'profession',
      feedback:
        'Lorem ipsum dolor sit amet, consectetuer Lorem ipsum dolor sitLorem ipsum dolor sit amet, consectetuer Lorem ipsum dolor sit ',
    },
    {
      bgcolor: '#C2D76D',
      titlecolor: '#7C903F',
      rotate: '-5deg',
      name: 'John Doe',
      profession: 'profession',
      feedback:
        'Lorem ipsum dolor sit amet, consectetuer Lorem ipsum dolor sitLorem ipsum dolor sit amet, consectetuer Lorem ipsum dolor sit ',
    },
    {
      bgcolor: '#B18655',
      titlecolor: '#75553E',
      rotate: '5deg',
      name: 'John Doe',
      profession: 'profession',
      feedback:
        'Lorem ipsum dolor sit amet, consectetuer Lorem ipsum dolor sitLorem ipsum dolor sit amet, consectetuer Lorem ipsum dolor sit ',
    },
  ];
  return (
    <Box sx={{ backgroundColor: `${mode}.text` }}>
      <Box
        sx={{
          display: { xs: 'none', sm: 'flex' },
          alignItems: 'flex-start',
          justifyContent: 'center',
          flexDirection: { xs: 'column', sm: 'row' },
          minHeight: '80vh',
          minWidth: '100vw',
          paddingTop: '100px',
          flexWrap: 'wrap',
        }}
      >
        {cards.map((value, index) => {
          return (
            <FeedbackCard
              bgcolor={value.bgcolor}
              titlecolor={value.titlecolor}
              rotate={value.rotate}
              name={value.name}
              profession={value.profession}
              feedback={value.feedback}
            />
          );
        })}
      </Box>
      <Box
        sx={{
          display: { xs: 'flex', sm: 'none' },
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <SlideShow
          components={cards.map((value, index) => {
            return (
              <FeedbackCard
                bgcolor={value.bgcolor}
                titlecolor={value.titlecolor}
                rotate={'5deg'}
                name={value.name}
                profession={value.profession}
                feedback={value.feedback}
                margin="0px 30px"
              />
            );
          })}
          indicators={false}
          arrows={false}
          show1100={1}
          show900={1}
          show600={1}
          show400={1}
          width="95vw"
          height="600px"
        />
      </Box>
    </Box>
  );
};

export default Feedback;
