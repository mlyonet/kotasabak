import React, { useState } from 'react';
import { Box, Typography, Container, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const itemData = [
  {
    img: '/Screenshot From 2025-10-14 11-58-55.png',
    title: 'Master Plan',
  },
  {
    img: '/Screenshot From 2025-10-14 11-59-05.png',
    title: 'Concept Art',
  },
  {
    img: '/Screenshot From 2025-10-14 11-59-19.png',
    title: 'Development',
  },
];

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = itemData.map((item) => ({
    src: item.img,
    title: item.title,
  }));

  return (
    <Box id="gallery" sx={{ py: 8, backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" gutterBottom align="center">
          Gallery
        </Typography>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item, i) => (
            <ImageListItem key={item.img} onClick={() => { setIndex(i); setOpen(true); }} sx={{ cursor: 'pointer' }}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar title={item.title} />
            </ImageListItem>
          ))}
        </ImageList>
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={slides}
          index={index}
        />
      </Container>
    </Box>
  );
};

export default Gallery;