import React, { useState } from "react";
import { Box, IconButton, Card, CardMedia } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const images = [
  "https://img.freepik.com/free-psd/gender-reveal-background_23-2151024536.jpg",
  "https://img.freepik.com/premium-photo/table-top-view-decoration-kid-toys-develop-background-concept_1921-1820.jpg",
  "https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/1734602312Home-Page-banner-Desktop-1817x747-px.webp",
  "https://img.freepik.com/free-photo/fluffy-toy-texture-close-up_23-2149686896.jpg",
  "https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/1739960164Hamleys_Promo_Web_Banner_1817x747px_02.webp",
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const nextImage = () => setIndex((index + 1) % images.length);
  const prevImage = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      mt={2}
    >
      <IconButton onClick={prevImage} sx={{ position: "absolute", left: 0 }}>
        <ArrowBackIos />
      </IconButton>
      <Card sx={{ maxWidth: 1400, width: "100%" }}>
        <CardMedia
          component="img"
          height="500"
          image={images[index]}
          alt={`Image ${index + 1}`}
        />
      </Card>
      <IconButton onClick={nextImage} sx={{ position: "absolute", right: 0 }}>
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default Carousel;
