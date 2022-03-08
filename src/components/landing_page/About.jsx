import React from "react";
import bg from "../../images/landing-page/bgRoadmap.png";
import { Box } from "@mui/material";
import Whitepaper from "./Whitepaper";
import Roadmap from "./Roadmap";
import Footer from "./Footer";

const About = () => {
  return (
    <Box
      sx={{ backgroundImage: `url("${bg}")`, overflowX: "hidden" }}
      className="bg-cover bg-center"
      pt={15}
    >
      <section id="about">
        <Box className="flex items-center justify-center flex-col gap-y-20 gap-x-10 mx-auto max-w-screen-2xl 2xl:flex-row 2xl:justify-between">
          <Whitepaper />
          <Roadmap />
        </Box>
      </section>
      <Footer />
    </Box>
  );
};

export default About;
