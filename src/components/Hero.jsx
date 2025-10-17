import React from 'react';
import { Box, Typography, Button, Container, useTheme } from '@mui/material';
import { useParallax } from 'react-scroll-parallax';

const Hero = () => {
  const { ref } = useParallax({ speed: -15 });
  const theme = useTheme();
  const toolbarHeight = theme.mixins.toolbar.minHeight;

  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        color: 'white',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        ref={ref}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url('/herocontent.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
          }}
        />
      </Box>
      <Container maxWidth="md" sx={{ marginTop: toolbarHeight }}>
        <Typography 
          variant="h2" 
          component="h1" 
          gutterBottom 
          sx={{ 
            fontWeight: 700,
            fontSize: { xs: '3rem', sm: '4rem', md: '5rem' }
          }}
        >
          Kota Sabak: Building a Legacy of Prosperity and Resilience
        </Typography>
        <Typography 
          variant="h5" 
          component="p" 
          gutterBottom 
          sx={{ 
            mb: 4,
            fontSize: { xs: '1.2rem', sm: '1.5rem' }
          }}
        >
          A new city, inspired by the past, built for the future.
        </Typography>
        <Button variant="contained" color="secondary" size="large" href="#invest">
          Invest in the Future
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;