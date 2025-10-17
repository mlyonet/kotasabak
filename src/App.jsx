import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { ParallaxProvider } from 'react-scroll-parallax';
import theme from './theme';
import MainLayout from './layouts/MainLayout';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Pillars from './components/Pillars';
import Gallery from './components/Gallery';
import Invest from './components/Invest';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ParallaxProvider>
        <CssBaseline />
        <Box id="top" />
        <MainLayout>
          <Hero />
          <Vision />
          <Pillars />
          <Gallery />
          <Invest />
        </MainLayout>
      </ParallaxProvider>
    </ThemeProvider>
  );
}

export default App;
