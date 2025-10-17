import React, { useState, useEffect, useRef, memo, useCallback } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, MenuItem, Box, useScrollTrigger } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';

const Navbar = memo(() => {
  const [open, setOpen] = useState(false);
  const openRef = useRef(open);
  openRef.current = open;

  const handleOpen = useCallback(() => {
    setOpen(!openRef.current);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (openRef.current) {
        handleClose();
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleClose]);

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

  const allNavLinks = [...mainNavLinks, ...alwaysVisibleNavLinks];

  return (
    <AppBar position="sticky" color={trigger ? 'primary' : 'white'} elevation={trigger ? 4 : 0} sx={{
      bgcolor: trigger ? undefined : 'white',
      backgroundImage: trigger ? undefined : 'linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.6))',
      boxShadow: trigger ? undefined : '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
    }}>
      <Toolbar>
                  <Link to="top" smooth={true} duration={500}>
                    <Button color="inherit" sx={{ fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }, fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif', fontWeight: 700, cursor: 'pointer', mr: 2, textTransform: 'none' }}>
                      Kota Sabak
                    </Button>
                  </Link>
        <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center' }}>
          {/* Always visible links (these will be present regardless of hamburger) */}
          {alwaysVisibleNavLinks.map((item) => (
            <Link key={item.title} to={item.path} smooth={true} duration={500}>
              <Button color="inherit" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' }, mx: { xs: 0.5, sm: 1, md: 1 } }}>{item.title}</Button>
            </Link>
          ))}

          {/* Main navigation links (visible on md and up) */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: { xs: 0.5, sm: 1, md: 2 } }}>
            {mainNavLinks.map((item) => (
              <Link key={item.title} to={item.path} smooth={true} duration={500}>
                <Button color="inherit" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' } }}>{item.title}</Button>
              </Link>
            ))}
          </Box>

          {/* Hamburger icon (visible on xs and sm) */}
          <IconButton
            color="inherit"
            aria-label="open menu"
            edge="end"
            onClick={handleOpen}
            sx={{ ml: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Custom Dropdown Menu */}
        {open && (
          <Box
            sx={{
              position: 'absolute',
              top: { xs: '56px', sm: '64px' },
              left: 0,
              right: 0,
              bgcolor: 'white',
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
              display: { xs: 'block', md: 'none' },
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', px: 0, py: 1, gap: 1 }}>
              {allNavLinks.map((item) => (
              <MenuItem key={item.title} onClick={handleClose} sx={{ flexGrow: 1, textAlign: 'center', minWidth: '80px', p: { xs: 1, sm: 1.5 }, '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.04)' } }}>
                  <Link to={item.path} smooth={true} duration={500} onClick={handleClose}>
                    <Typography textAlign="center" sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem' }, color: '#616161' }}>{item.title}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Box>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
});

export default Navbar;