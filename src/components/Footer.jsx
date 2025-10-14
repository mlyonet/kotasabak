import React from 'react';
import { Box, Typography, Container, Grid, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ py: 6, backgroundColor: 'primary.main', color: 'white' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={4}>
            <Typography variant="h6" component="div">
              Kota Sabak
            </Typography>
            <Typography variant="body2">
              Building a Legacy of Prosperity and Resilience.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'center' } }}>
            <IconButton href="https://www.facebook.com/kotasabak" target="_blank" color="inherit">
              <Facebook />
            </IconButton>
            <IconButton href="#" target="_blank" color="inherit">
              <Twitter />
            </IconButton>
            <IconButton href="#" target="_blank" color="inherit">
              <LinkedIn />
            </IconButton>
          </Grid>
          <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
            <Typography variant="body2">
              {'Copyright © '}
              Kota Sabak Development {new Date().getFullYear()}
              {'.'}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
