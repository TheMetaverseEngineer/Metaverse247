import React from "react";
import bg from "../../images/landing-page/bg1.png";
import { Box, Button, Typography } from "@mui/material";
import map from "../../images/landing-page/map.png";

const WorldMap = () => {
  return (
    <section id="world-map">
      <Box
        sx={{ backgroundImage: `url('${bg}')` }}
        className="bg-cover bg-left flex items-center justify-center flex-col"
        px={{ xxs: 2, xs: 5, md: 10 }}
        py={15}
      >
        <Box className="container mx-auto">
          <Box className="flex flex-col gap-10 lg:flex-row items-center">
            <Box maxWidth="max(400px, 50%)" className="flex-shrink-0">
              <Box component="img" src={map} alt="World map" />
            </Box>
            <Box className="text-center space-y-7 text-white lg:text-left">
              <Typography
                className="uppercase"
                fontSize="clamp(1.5rem, 4vw, 3.5rem)"
              >
                Pangea Ultima
              </Typography>
              <Typography fontSize="clamp(1rem, 2vw, 1.2rem)">
                Pangea Ultima also known as Pangaea II is a possible future
                supercontinent configuration. Consistent with the supercontinent
                cycle, Pangaea Ultima could occur within the next 200 million
                years. You can Buy Metaverse Land In Pangea Ultima Map
              </Typography>
              <Button
                sx={{
                  background:
                    "linear-gradient(0deg, rgba(42,127,191,0.78) 0%, rgba(125,166,248,0.78) 100%)",
                }}
                className="text-white px-16 py-3 text-lg rounded-xl"
              >
                Get whitelisted now
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default WorldMap;
