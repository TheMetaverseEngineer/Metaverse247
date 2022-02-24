import React from "react";
import bg from "../images/bg1.png";
import { Box, Button, Typography } from "@mui/material";
import map from "../images/map.png";

const WorldMap = () => {
  return (
    <section id="world-map">
      <Box
        sx={{ backgroundImage: `url('${bg}')` }}
        className="bg-cover bg-left flex items-center justify-center flex-col"
        px={2}
        py={15}
      >
        <Box className="flex flex-col gap-10 max-w-screen-xl md:flex-row items-center">
          <Box maxWidth="max(400px, 50%)" className="flex-shrink-0">
            <Box component="img" src={map} alt="World map" />
          </Box>
          <Box className="text-center space-y-7 text-white md:text-left">
            <Typography className="uppercase" fontSize="clamp(1.5rem, 5vw, 3.5rem)">Lorem ipsum</Typography>
            <Typography fontSize="clamp(1rem, 2vw, 1.2rem)">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              architecto debitis dolore eligendi error est fugiat illum
              laboriosam neque nesciunt, nihil odio odit optio quo suscipit,
              temporibus unde velit voluptatem?
            </Typography>
            <Button
              sx={{
                background:
                  "linear-gradient(0deg, rgba(42,127,191,0.78) 0%, rgba(125,166,248,0.78) 100%)",
              }}
              className="text-white px-16 py-3 text-lg rounded-xl"
            >
              Lorem ipsum
            </Button>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default WorldMap;
