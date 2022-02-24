import React from "react";
import { Box, Typography } from "@mui/material";

const Nav = () => {
  return (
    <Box component="header" px={2} className="fixed top-5" zIndex={60} >
      <nav>
        <Box>
          <Box id="logo" className="text-white border-l py-5">
            <Typography className="uppercase text-3xl pl-3">
              Metavers <Box component="span" className="text-5xl">247</Box>
            </Typography>
          </Box>
        </Box>
      </nav>
    </Box>
  );
};

export default Nav;
