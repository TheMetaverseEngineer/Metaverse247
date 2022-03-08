import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Nav from "../components/landing_page/Nav";
import HeroSection from "../components/landing_page/HeroSection";
import WorldMap from "../components/landing_page/WorldMap";
import TopRooms from "../components/landing_page/TopRooms";
import About from "../components/landing_page/About";
import RegisterWhitelist from "../components/landing_page/RegisterWhitelist";
import { Helmet } from "react-helmet";

const theme = createTheme({
  breakpoints: {
    values: {
      xxs: 0,
      xs: 400,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      "2xl": 1536,
    },
  },
});

const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>Metaverse247</title>
      </Helmet>
      <ThemeProvider theme={theme}>
        <Nav />
        <HeroSection />
        <WorldMap />
        <RegisterWhitelist />
        <TopRooms />
        <About />
      </ThemeProvider>
    </>
  );
};

export default LandingPage;
