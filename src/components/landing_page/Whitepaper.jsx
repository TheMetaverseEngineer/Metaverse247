import React from "react";
import { Box, Button, Typography } from "@mui/material";

const Whitepaper = () => {
  return (
    <Box className="text-center space-y-7 lg:text-left" flexShrink={2} maxWidth={700} pl={{lg: 3}}>
      <Typography className="uppercase" color="#004D63" fontSize="clamp(1.5rem, 4vw, 3.5rem)">Lorem ipsum</Typography>
      <Typography fontSize="clamp(1rem, 2vw, 1.2rem)" className="text-white">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
        architecto debitis dolore eligendi error est fugiat illum laboriosam
        neque nesciunt, nihil odio odit optio quo suscipit, temporibus unde
        velit voluptatem?
      </Typography>
      <Button
        sx={{
          background:
            "linear-gradient(0deg, rgba(9,55,90,0.78) 0%, rgba(11,89,247,0.78) 100%)",
        }}
        className="text-white px-5 normal-case text-lg"
      >
        Download Whitepaper
      </Button>
    </Box>
  );
};

export default Whitepaper;
