import React, { useState } from 'react';
import { Box, Typography, Container, Button, TextField, InputAdornment, Slide } from '@mui/material';
import { Person, Email } from '@mui/icons-material';

const Invest = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <Box id="invest" sx={{ py: 8 }}>
      <Container maxWidth="sm">
        <Typography variant="h3" component="h2" gutterBottom align="center">
          Invest in the Future
        </Typography>
        <Slide direction="up" in={!submitted} mountOnEnter unmountOnExit>
          <Box>
            <Typography variant="h6" component="p" align="center" paragraph>
              Be a part of the next great city. Register your interest to receive our investment prospectus and learn more about the opportunities available in Kota Sabak.
            </Typography>
            <Box component="form" sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 2 }} onSubmit={handleSubmit}>
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
              <Button type="submit" variant="contained" color="primary" size="large">
                Register Your Interest
              </Button>
            </Box>
          </Box>
        </Slide>
        <Slide direction="up" in={submitted} mountOnEnter unmountOnExit>
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <Typography variant="h4" component="p" gutterBottom>
              Thank You!
            </Typography>
            <Typography variant="h6" component="p">
              We have received your interest. We will be in touch with you shortly.
            </Typography>
          </Box>
        </Slide>
      </Container>
    </Box>
  );
};

export default Invest;
