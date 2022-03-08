import React from "react";
import { Box, Button, Typography } from "@mui/material";

const Whitepaper = () => {
  return (
    <Box
      className="text-center space-y-5 2xl:text-left order-2 2xl:order-none"
      flexShrink={2}
      maxWidth={{ xxs: 700, "2xl": 500 }}
      px={2}
    >
      <Typography
        className="uppercase leading-none font-black"
        color="#004D63"
        fontSize="clamp(1.5rem, 4vw, 3rem)"
      >
        Milestone
      </Typography>
      <Typography fontSize="clamp(1rem, 2vw, 1.2rem)" className="text-white">
        A Metaverse made by people. Here is the roadmap and what we achived for.
      </Typography>
      <Button
        sx={{
          background:
            "linear-gradient(0deg, rgba(9,55,90,0.78) 0%, rgba(11,89,247,0.78) 100%)",
          maxWidth: 400,
        }}
        className="text-white px-5 py-5 normal-case text-lg"
        fullWidth
      >
        Download Whitepaper
      </Button>
    </Box>
  );
};

export default Whitepaper;
