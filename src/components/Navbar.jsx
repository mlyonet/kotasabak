import React from 'react';
import { AppBar, Toolbar, Typography, Button, useScrollTrigger } from '@mui/material';
import { Link } from 'react-scroll';

const Navbar = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <AppBar position="sticky" color={trigger ? 'primary' : 'transparent'} elevation={trigger ? 4 : 0}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Kota Sabak
        </Typography>
        <Link to="vision" smooth={true} duration={500} spy={true} exact='true' offset={-70}>
          <Button color="inherit">Our Vision</Button>
        </Link>
        <Link to="pillars" smooth={true} duration={500} spy={true} exact='true' offset={-70}>
          <Button color="inherit">Pillars</Button>
        </Link>
        <Link to="gallery" smooth={true} duration={500} spy={true} exact='true' offset={-70}>
          <Button color="inherit">Gallery</Button>
        </Link>
        <Link to="invest" smooth={true} duration={500} spy={true} exact='true' offset={-70}>
          <Button color="inherit">Invest</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;