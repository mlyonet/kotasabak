import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Box, useScrollTrigger } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const mainNavLinks = [
    { title: 'Our Vision', path: 'vision' },
    { title: 'Pillars', path: 'pillars' },
  ];

  const alwaysVisibleNavLinks = [
    { title: 'Gallery', path: 'gallery' },
    { title: 'Invest', path: 'invest' },
  ];

  return (
    <AppBar position="sticky" color={trigger ? 'primary' : 'white'} elevation={trigger ? 4 : 0} sx={{ 
      bgcolor: trigger ? undefined : 'white',
      backgroundImage: trigger ? undefined : 'linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.6))',
      boxShadow: trigger ? undefined : '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
    }}>
      <Toolbar>
        <Link to="top" smooth={true} duration={500} spy={true} exact='true'>
          <Typography variant="h6" component="div" sx={{ fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }, cursor: 'pointer', mr: 2 }}>
            Kota Sabak
          </Typography>
        </Link>

        <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center' }}>
          {/* Always visible links */}
          {alwaysVisibleNavLinks.map((item) => (
            <Link key={item.title} to={item.path} smooth={true} duration={500} spy={true} exact='true'>
              <Button color="inherit" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' }, mx: { xs: 0.5, sm: 1, md: 1 } }}>{item.title}</Button>
            </Link>
          ))}

          {/* Main navigation links (visible on sm and up) */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: { xs: 0.5, sm: 1, md: 2 } }}>
            {mainNavLinks.map((item) => (
              <Link key={item.title} to={item.path} smooth={true} duration={500} spy={true} exact='true'>
                <Button color="inherit" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' } }}>{item.title}</Button>
              </Link>
            ))}
          </Box>

          {/* Hamburger icon (visible on xs) */}
          <IconButton
            color="inherit"
            aria-label="open menu"
            edge="end"
            onClick={handleClick}
            sx={{ ml: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Hamburger Menu content */}
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={handleClose}
          sx={{
            display: { sm: 'none' },
          }}
        >
          {mainNavLinks.map((item) => (
            <MenuItem key={item.title} onClick={handleClose}>
              <Link to={item.path} smooth={true} duration={500} spy={true} exact='true'>
                <Typography textAlign="center">{item.title}</Typography>
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;