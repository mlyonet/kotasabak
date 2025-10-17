import React from 'react';
import { Box, Typography, Container, Button, TextField, InputAdornment, Slide } from '@mui/material';
import { Person, Email } from '@mui/icons-material';

const Invest = () => {
  return (
    <Box id="invest" sx={{ py: 8 }}>
      <Container maxWidth="sm">
        <Typography variant="h3" component="h2" gutterBottom align="center">
          Invest in the Future
        </Typography>
        <Box>
          <Typography variant="h6" component="p" align="center" paragraph>
            Be a part of the next great city. Register your interest to receive our investment prospectus and learn more about the opportunities available in Kota Sabak.
          </Typography>
          <Box component="form" sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField 
              id="name" 
              label="Your Name" 
              variant="outlined" 
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person />
                  </InputAdornment>
                ),
              }}
            />
            <TextField 
              id="email" 
              label="Your Email" 
              variant="outlined" 
              type="email"
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
            />
            <Button type="submit" variant="contained" color="primary" size="large" disabled>
              Register Your Interest
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Invest;
