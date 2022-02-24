import React from "react";
import bg from "../images/bg2.png";
import { Box, Button } from "@mui/material";
import solCityLogo from "../images/solCityLogo.png";

const SolCity = () => {
  return (
    <section id="sol-city">
      <Box
        sx={{ backgroundImage: `url('${bg}')` }}
        className="min-h-screen bg-cover bg-center"
        px={2}
        py={10}
      >
        <Button
          className="text-white normal-case flex ml-auto w-full text-2xl"
          startIcon={
            <Box
              component="img"
              src={solCityLogo}
              alt="Sol city logo"
              maxWidth={75}
              className="mr-3"
            />
          }
          sx={{
            background:
              "linear-gradient(0deg, rgba(79,179,255,0.78) 0%, rgba(194,214,255,0.78) 100%)",
            borderRadius: 5,
            maxWidth: 300,
          }}
        >
          Sol City
        </Button>
      </Box>
    </section>
  );
};

export default SolCity;
