import React from "react";
import bg from "../images/bgRoadmap.png";
import { Box } from "@mui/material";
import Whitepaper from "./Whitepaper";
import Roadmap from "./Roadmap";
import Footer from "./Footer";

const About = () => {
  return (
    <Box
      sx={{ backgroundImage: `url("${bg}")`, overflowX: "hidden" }}
      className="bg-cover bg-center"
      px={2}
      pt={15}
    >
      <section id="about">
        <Box className="flex items-center justify-center flex-col gap-y-20 gap-x-5 max-w-screen-xl mx-auto lg:flex-row lg:justify-between">
          <Whitepaper />
          <Roadmap />
        </Box>
      </section>
      <Footer />
    </Box>
  );
};

export default About;
