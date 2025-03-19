import { Box } from "@mui/material";
import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router";


const Layout = () => {
  return (
    <>
      <Box>
        <NavBar />
      </Box>
      <Box>
        <Outlet />
      </Box>
      <Box>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
