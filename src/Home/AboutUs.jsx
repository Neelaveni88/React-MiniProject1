import React from "react";
import { Grid } from "@mui/material";
import {
  Typography,
  CardMedia,
  CardContent,
  Box,
  Container,
} from "@mui/material";

const AboutUs = () => {
  return (
    <Container sx={{ padding: 1 }}>
      <Typography variant="h5" color="info" align="center" gutterBottom>
        Our Story
      </Typography>
      <Grid container spacing={4} sx={{ marginTop: 2 }}>
        {/* Grid 1 */}
        <Grid item xs={12} md={6} sx={{ display: "flex"}}>
          <CardMedia
            component="img"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsQEhAX3y4V6xV4wyCNeCA4OUgVZm_L7KoyA&s"
            sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 0,
                
            }}
          />
        </Grid>

        {/* Grid 2 */}
        <Grid item xs={12} md={6} sx={{ display: "flex" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              padding: 3,
            }}
          >
            <CardContent>
              <Typography variant="h5" color="success" gutterBottom>
                Our Showroom
              </Typography>
              <Typography variant="body1">
                Welcome to our exclusive furniture showroom, where elegance
                meets comfort. With years of experience in crafting high-quality
                furniture, we bring you a collection that is both stylish and
                functional. Visit us to explore handcrafted pieces, premium
                materials, and customizable furniture solutions designed to
                enhance your living space.
              </Typography>
            </CardContent>
          </Box>
        </Grid>

        {/* Grid 3 */}
        <Grid item xs={12} md={6} sx={{ display: "flex" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              padding: 3,
            }}
          >
            <CardContent>
              <Typography variant="h5" color="success" gutterBottom>
                Why Choose Us?
              </Typography>
              <Typography variant="body1">
                * Premium materials and craftsmanship * Elegant and functional
                designs * Customization options available * Expert customer
                service
              </Typography>
            </CardContent>
          </Box>
        </Grid>

        {/* Grid 4 */}
        <Grid item xs={12} md={6} sx={{ display: "flex" }}>
          <CardMedia
            component="img"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA0J1cCssLSepLcAx1_psTc9Ru6cZgU2o1cw&s"
            sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 0,
                
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;
