import React, { LegacyRef, createRef, useContext, useRef } from 'react';
import CollectionCard from './CollectionCard';
import { Box, Typography, useMediaQuery } from '@mui/material';
import SlideShow from './Slideshow';
import ExploreMore from '../utils/ExploreMore';
import SampleCard from './SampleCard';
// import useOnScreen from '../hooks/useOnScreen';
import collection1 from '../assets/flside1.png';
import collection2 from '../assets/fslide2.png';
import collection3 from '../assets/fslide3.png';
import collection4 from '../assets/fslide4.png';
import grass from '../assets/grass.png'
import { MyContext } from '../contexts/ColorMode';
const Collections = () => {
  const { mode } = useContext(MyContext);

  const contentItems = [
    { name: 'Ready To Eat', background: collection1 },
    { name: 'Rice', background: collection2 },
    { name: 'Millets', background: collection3 },
    { name: 'Oats', background:collection4}
  ];
  const collectionItems = contentItems.map((value) => {
    return (
      <CollectionCard content={value.name} background={value.background} />
    );
  });
  const slides = [
    <SampleCard background={collection1} />,
    <SampleCard background={collection2} />,
    <SampleCard background={collection3} />,
    <SampleCard background={collection4} />,
  ];
  // const ref1 = props.ref1;
  // const width1100 = useMediaQuery('(min-width:1100px)');
  // const width900 = useMediaQuery('(min-width:900px)');
  // const width600 = useMediaQuery('(min-width:600px)');
  // const width400 = useMediaQuery('(min-width:400px)');
  // const rootmargin = !width1100
  //   ? !width900
  //     ? !width600
  //       ? !width400
  //         ? '10px 0px -90px 0px'
  //         : '10px 0px -90px 0px'
  //       : '55px 0px -90px 0px'
  //     : '220px 0px -145px 0px'
  //   : '140px 0px -155px 0px';
  // console.log(rootmargin);
  // const onscreen = useOnScreen(ref1, rootmargin);
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        minHeight: '100dvh',
        position: 'relative',
        width: '100vw',
        backgroundImage: `url(${grass})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize:{xs:'1300px 700px', lg:'100vw 700px'},
        backgroundPosition: 'bottom left'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: '70vh',
          flexDirection: 'column',
          width: '80vw',
        }}
      >
        <Typography
          sx={{
            width: '100%',
            textAlign: 'left',
            color: `${mode}.text`,
            fontSize: '40px',
            fontWeight: '500',
            lineHeight: '47.4px',
          }}
        >
          Collections
        </Typography>
        <SlideShow
          show1100={4}
          show900={3}
          show600={2}
          show400={1}
          arrows={false}
          width="95vw"
          components={collectionItems}
          // margin='50px'
          // ref1={ref1}
        />
        <ExploreMore />
        {/* sample boxes */}
      </Box>
      <Box
        sx={{
          marginTop: { xs: '100px', lg: '200px' },
          width: { xs: '350px', sm: '600px', md: '80vw' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        <SlideShow
          components={slides}
          indicators={false}
          arrows={false}
          show1100={4}
          show900={3}
          show600={2}
          show400={1}
          width="95vw"
        />
      </Box>
    </Box>
  );
};

export default Collections;
