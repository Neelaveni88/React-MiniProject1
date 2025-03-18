import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  IconButton,
  Grid2,
} from "@mui/material";
import {
  Facebook,
  Instagram,
  WhatsApp,
  YouTube,
  Telegram,
  Phone,
  Email,
  LocationOn,
} from "@mui/icons-material";

function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    childAge: "",
    phoneNumber: "",
    altPhoneNumber: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("formData", JSON.stringify(formData));
    setFormData({
      name: "",
      childAge: "",
      phoneNumber: "",
      altPhoneNumber: "",
      email: "",
    });
    alert("Form data saved successfully!");
  };

  return (
    <Box
      sx={{
        backgroundImage:
          'url("data:image/jpeg;base64,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")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        p: 4,
        position: "relative",
        fontWeight: "bold",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(102, 99, 99, 0.7)",
        }}
      />
      <Container sx={{ position: "relative" }}>
        <Grid2 container spacing={4} sx={{ flexWrap: "nowrap" }}>
          <Grid2 item xs={4}>
            <Box display="flex" alignItems="center" gap={1}>
              <img
                width="70"
                height="70"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6v-FUtIzbGdCPCtTNp9cE1EblFcj9cSZ5hA&s"
                alt="Logo"
              />
              <Typography variant="h3" sx={{ marginTop: "20px" }}>
                Dojana Little Treasures
              </Typography>
            </Box>
            <Typography sx={{ mt: 2, textAlign: "justify" }}>
              Sparking minds one toy at a time.” “Unwrap the Wonder”: Surprise
              and delight await.” “Toys that Talk, Characters that Care”:
              Building empathy through play.” “Little Hands, Big Dreams”:
              Inspiring tomorrow's visionaries.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton
                component="a"
                href="https://facebook.com"
                target="_blank"
                sx={{ color: "lightblue", fontSize: "46px" }}
              >
                <Facebook fontSize="large" />
              </IconButton>
              <IconButton
                component="a"
                href="https://instagram.com"
                target="_blank"
                sx={{ color: "lightblue", fontSize: "46px" }}
              >
                <Instagram fontSize="large" />
              </IconButton>
              <IconButton
                component="a"
                href="https://wa.me/9843128734"
                target="_blank"
                sx={{ color: "lightblue", fontSize: "46px" }}
              >
                <WhatsApp fontSize="large" />
              </IconButton>
              <IconButton
                component="a"
                href="https://youtube.com"
                target="_blank"
                sx={{ color: "lightblue", fontSize: "46px" }}
              >
                <YouTube fontSize="large" />
              </IconButton>
              <IconButton
                component="a"
                href="https://telegram.org"
                target="_blank"
                sx={{ color: "lightblue", fontSize: "46px" }}
              >
                <Telegram fontSize="large" />
              </IconButton>
            </Box>
          </Grid2>
          <Grid2 item xs={4} sx={{ ml: 4 }}>
            <Typography
              variant="h4"
              sx={{
                textDecoration: "underline",
                textDecorationColor: "lightblue",
                textDecorationThickness: "3px",
                textUnderlineOffset: "8px",
                mb: 2,
                mt: 3,
              }}
            >
              Contact Us
            </Typography>
            <Box display="flex" alignItems="center" gap={1}>
              <Phone
                sx={{
                  padding: "3px",
                  marginTop: "5px",
                  color: "lightblue",
                  fontSize: "36px",
                }}
              />
              <Typography sx={{ marginTop: "5px" }}>
                Phone: 9876540980, 8886655599
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1} sx={{ mt: 1 }}>
              <Email
                sx={{
                  padding: "3px",
                  marginTop: "25px",
                  color: "lightblue",
                  fontSize: "36px",
                }}
              />
              <Typography sx={{ marginTop: "20px" }}>
                Email: dojanatreasures@gmail.com
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1} sx={{ mt: 1 }}>
              <LocationOn
                sx={{
                  padding: "3px",
                  marginTop: "25px",
                  color: "lightblue",
                  fontSize: "36px",
                }}
              />
              <Typography sx={{ marginTop: "20px" }}>
                Address: #38, Old By pass Road, ICICI bank Opp,KovaiPudur,Karur,
                Tamilnadu-638182
              </Typography>
            </Box>
          </Grid2>
          <Grid2
            item
            xs={4}
            sx={{
              backgroundColor: "white",
              padding: "30px",
              marginLeft: "100px",
              borderRadius: "15px",
            }}
          >
            <Typography variant="h5" sx={{ color: "blue" }}>
              Send Message
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
              <TextField
                fullWidth
                label="Enter Your Name*"
                name="childName"
                value={formData.Name}
                onChange={handleChange}
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Enter Your Child Age*"
                name="childAge"
                value={formData.childAge}
                onChange={handleChange}
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Enter Phone Number*"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Enter Alternative Phone Number*"
                name="altPhoneNumber"
                value={formData.altPhoneNumber}
                onChange={handleChange}
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Enter E-Mail*"
                name="email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}
export default Footer;
