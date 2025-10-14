import React from 'react';
import { Box, Typography, Container, Fade } from '@mui/material';
import { useInView } from 'react-intersection-observer';

const Vision = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <Box id="vision" sx={{ py: 8, backgroundColor: 'background.paper' }} ref={ref}>
      <Fade in={inView} timeout={1000}>
        <Container maxWidth="md">
          <Typography variant="h3" component="h2" gutterBottom align="center">
            Our Vision
          </Typography>
          <Typography variant="h6" component="p" align="center" paragraph>
            A land blessed with prosperity and abundance, Kota Sabak is a visionary project that aims to create a modern metropolis in harmony with nature. We are building a city that learns from the lessons of the past to create a resilient and sustainable future for generations to come.
          </Typography>
          <Typography variant="body1" component="p" align="center">
            Our vision is to create a city that is not only economically prosperous but also socially inclusive and environmentally responsible. A city where innovation and tradition coexist, and where the well-being of our citizens is our highest priority.
          </Typography>
        </Container>
      </Fade>
    </Box>
  );
};

export default Vision;