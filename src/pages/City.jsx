import avaxPlanetBg from "../images/landing-page/avaxPlanetBg.png";
import avaxPlanetLogo from "../images/landing-page/avaxPlanetLogo.png";
import solCityBg from "../images/landing-page/solCityBg.png";
import solCityLogo from "../images/landing-page/solCityLogo.png";
import tronTownBg from "../images/landing-page/tronTownBg.jpeg";
import tronTownLogo from "../images/landing-page/tronTownLogo.png";
import turkishMetaverseBg from "../images/landing-page/turkishMetaverse.jpeg";
import turkishMetaverseLogo from "../images/landing-page/turkishMetaverseLogo.png";
import { Link, useParams } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import ForwardIcon from "@mui/icons-material/Forward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useEffect, useState } from "react";

const cities = [
  {
    title: "Avax Planet",
    desc: "",
    bg: avaxPlanetBg,
    logo: avaxPlanetLogo,
    slug: "avax-planet",
    href: "https://metaverse247.live:3001/avax-planet",
  },
  {
    title: "Sol City",
    desc: "",
    bg: solCityBg,
    logo: solCityLogo,
    slug: "sol-city",
    href: "https://metaverse247.live:3001/sol-city",
  },
  {
    title: "Tron Town",
    desc: "",
    bg: tronTownBg,
    logo: tronTownLogo,
    slug: "tron-town",
    href: "https://metaverse247.live:3001/trontown",
  },
  {
    title: "Turkish Metaverse",
    desc: "",
    bg: turkishMetaverseBg,
    logo: turkishMetaverseLogo,
    slug: "turkish-metaverse",
    href: "https://metaverse247.live:3001",
  },
];

const City = () => {
  const { slug } = useParams();
  const [city, setCity] = useState(null);

  useEffect(() => {
    setCity(cities.find((c) => c.slug === slug));
  }, []);

  return (
    <Box
      sx={{ backgroundImage: `url('${city?.bg}')` }}
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      px={2}
      py={10}
    >
      <Box className="fixed top-10 right-5">
        <Button
          component={Link}
          to="/"
          className="text-white flex w-full text-2xl py-3 px-20"
          startIcon={<ArrowBackIcon fontSize="large" />}
          sx={{
            background:
              "linear-gradient(0deg, rgba(79,179,255,0.78) 0%, rgba(194,214,255,0.78) 100%)",
            borderRadius: 5,
          }}
        >
          Back
        </Button>
      </Box>
      <Card
        className="bg-transparent overflow-hidden backdrop-filter backdrop-blur-2xl backdrop-brightness-75 text-white max-w-screen-sm py-3"
        sx={{ borderRadius: 10 }}
        disableElevation
      >
        <CardContent>
          <Box maxWidth={100} className="mx-auto">
            <img src={city?.logo} alt="Avax plaent logo" />
          </Box>
          <Box className="text-center">
            <Typography
              component="h1"
              fontSize="clamp(2.2rem, 5vw, 3rem)"
              className="font-bold"
            >
              {city?.title}
            </Typography>
            <Typography>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem,
              rerum aliquid et fugiat cum molestias illo ex ab fuga nostrum,
              ipsum tempora non dolor eaque temporibus neque modi placeat sit.
              Asperiores enim suscipit recusandae consectetur aspernatur neque
              ex ad repudiandae?
            </Typography>
          </Box>
        </CardContent>
        <CardActions className="justify-center">
          <Button
            href={city?.href}
            variant="contained"
            size="large"
            endIcon={<ForwardIcon fontSize="large" />}
          >
            Go to {city?.title}
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default City;
