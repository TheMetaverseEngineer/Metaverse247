import React from "react";
import { Box, Link, Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <Box
        className="text-white flex flex-col gap-5 gap-x-10 pt-20 max-w-screen-md mx-auto sm:flex-row sm:justify-between"
        mt={5}
        pb={5}
      >
        <Box className="text-center space-y-1.5 sm:text-left relative">
          <Box className="space-x-1.5 absolute bottom-full inset-x-0">
            <i className="fa-brands fa-twitter" />
            <i className="fa-brands fa-twitter" />
            <i className="fa-brands fa-twitter" />
          </Box>
          <Typography className="font-black text-2xl">Lorem</Typography>
          <Box className="flex flex-wrap justify-center gap-x-5 gap-y-1 sm:flex-col">
            <Link href="#" className="text-white text-lg" underline="hover">
              Lorem ipsum
            </Link>
            <Link href="#" className="text-white text-lg" underline="hover">
              Lorem ipsum
            </Link>
            <Link href="#" className="text-white text-lg" underline="hover">
              Lorem ipsum
            </Link>
          </Box>
        </Box>
        <Box className="text-center space-y-1.5 sm:text-left">
          <Typography className="font-black text-2xl">Lorem</Typography>
          <Box className="flex flex-wrap justify-center gap-x-5 gap-y-1 sm:flex-col">
            <Link href="#" className="text-white text-lg" underline="hover">
              Lorem ipsum
            </Link>
            <Link href="#" className="text-white text-lg" underline="hover">
              Lorem ipsum
            </Link>
            <Link href="#" className="text-white text-lg" underline="hover">
              Lorem ipsum
            </Link>
          </Box>
        </Box>
        <Box className="text-center space-y-1.5 sm:text-left">
          <Typography className="font-black text-2xl">Lorem</Typography>
          <Box className="flex flex-wrap justify-center gap-x-5 gap-y-1 sm:flex-col">
            <Link href="#" className="text-white text-lg" underline="hover">
              Lorem ipsum
            </Link>
            <Link href="#" className="text-white text-lg" underline="hover">
              Lorem ipsum
            </Link>
            <Link href="#" className="text-white text-lg" underline="hover">
              Lorem ipsum
            </Link>
          </Box>
        </Box>
        <Box className="text-center space-y-1.5 sm:text-left">
          <Typography className="font-black text-2xl">Lorem</Typography>
          <Box className="flex flex-wrap justify-center gap-x-5 gap-y-1 sm:flex-col">
            <Link href="#" className="text-white text-lg" underline="hover">
              Lorem ipsum
            </Link>
            <Link href="#" className="text-white text-lg" underline="hover">
              Lorem ipsum
            </Link>
            <Link href="#" className="text-white text-lg" underline="hover">
              Lorem ipsum
            </Link>
          </Box>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
