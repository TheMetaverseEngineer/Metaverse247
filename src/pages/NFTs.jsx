import React from "react";
import bg from "../images/marketplace/marketplaceBg.png";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";
import hero from "../images/marketplace/111.png";
import cardImg from "../images/marketplace/bg 3.png";
import Filter from "../components/marketplace/Filter";
import YourBalance from "../components/marketplace/YourBalance";
import { useMoralis } from "react-moralis";

const NfTs = () => {
  const { isAuthenticated } = useMoralis();

  return (
    <Box
      sx={{ backgroundImage: `url('${bg}')` }}
      className="flex-grow bg-cover bg-right flex flex-col 2xl:flex-row overflow-x-hidden"
    >
      <Box className="hidden 2xl:block">
        <Filter />
      </Box>
      <Box className="p-5 pb-20 sm:p-8 sm:pb-20 md:p-8 text-white flex-grow">
        <Typography
          component="h1"
          className="font-black"
          fontSize="clamp(1.5rem, 5vw, 3.5rem)"
        >
          Lorem ipsum
        </Typography>
        <Box
          className="flex flex-col border-8 border-white p-3 gap-y-1 md:flex-row justify-center mb-12"
          borderRadius={10}
        >
          <Button
            variant="contained"
            sx={{ bgcolor: "#0F7599" }}
            className="rounded-3xl px-10 py-2 order-2 md:order-none md:self-center"
          >
            Lorem
          </Button>
          <Box>
            <Box component="img" src={hero} />
          </Box>
        </Box>
        <Box className="2xl:hidden mt-12">
          <Filter />
        </Box>
        <Box className="mt-4 mb-12">
          <Box className="flex gap-x-5 justify-between pb-3">
            <Typography
              fontSize="clamp(1.5rem, 3vw, 2rem)"
              className="font-bold leading-none"
            >
              Top NFTs
            </Typography>
            <Link
              href="#"
              className="uppercase text-sm"
              color="white"
              underline="hover"
            >
              see more
            </Link>
          </Box>
          <Box className="grid grid-cols-1 gap-x-10 gap-y-5 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-20">
            {Array.from(new Array(6)).map((_, i) => (
              <Card
                className="bg-transparent border-2 border-white"
                key={i}
                elevation={0}
                sx={{ borderRadius: 10 }}
              >
                <CardMedia
                  component="img"
                  image={cardImg}
                  className="p-4"
                  sx={{ borderRadius: 10 }}
                />
                <CardContent className="text-white">
                  <Typography className="font-bold">Lorem</Typography>
                  <Typography>Lorem ipsum dolor sit amet</Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
        {isAuthenticated && (
          <Box className="md:hidden mt-12">
            <YourBalance />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default NfTs;
