import React from 'react';
import { Box, Typography, Container, Grid, Slide } from '@mui/material';
import { Spa, Devices, People } from '@mui/icons-material';
import { useInView } from 'react-intersection-observer';

const pillars = [
  {
    icon: <Spa sx={{ fontSize: 60 }} />,
    title: 'Green Living',
    description: 'Inspired by the "two gardens on the right and left," Kota Sabak is designed to be a green city, with lush parks, vertical gardens, and sustainable agriculture.',
  },
  {
    icon: <Devices sx={{ fontSize: 60 }} />,
    title: 'Smart Technology',
    description: 'We are building a city of the future, with a state-of-the-art infrastructure that leverages technology to improve the quality of life for our citizens.',
  },
  {
    icon: <People sx={{ fontSize: 60 }} />,
    title: 'Vibrant Community',
    description: 'Kota Sabak will be a city for everyone, with a diverse and inclusive community, world-class amenities, and a thriving cultural scene.',
  },
];

const Pillars = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <Box id="pillars" sx={{ py: 8 }} ref={ref}>
      <Container maxWidth="md">
        <Typography variant="h3" component="h2" gutterBottom align="center">
          The Pillars of Kota Sabak
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {pillars.map((pillar, index) => (
            <Grid item xs={12} md={4} key={pillar.title}>
              <Slide direction="up" in={inView} timeout={500 * (index + 1)}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                  {pillar.icon}
                  <Typography variant="h5" component="h3" gutterBottom>
                    {pillar.title}
                  </Typography>
                  <Typography variant="body1" component="p">
                    {pillar.description}
                  </Typography>
                </Box>
              </Slide>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Pillars;