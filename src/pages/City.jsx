import avaxPlanetBg from "../images/landing-page/avaxPlanetBg.png";
import avaxPlanetLogo from "../images/landing-page/avaxPlanetLogo.png";
import solCityBg from "../images/landing-page/solCityBg.png";
import solCityLogo from "../images/landing-page/solCityLogo.png";
import { useParams } from "react-router-dom";
import { Box, Button } from "@mui/material";

const cities = [
  {
    name: "Avax Planet",
    bg: avaxPlanetBg,
    logo: avaxPlanetLogo,
    slug: "avax-planet",
  },
  { name: "Sol City", bg: solCityBg, logo: solCityLogo, slug: "sol-city" },
];

const City = () => {
  const { slug } = useParams();
  const city = cities.find((c) => c.slug === slug);

  return (
    <Box
      sx={{ backgroundImage: `url('${city.bg}')` }}
      className="min-h-screen bg-cover bg-center"
      px={2}
      py={10}
    >
      <Button
        className="text-white normal-case flex ml-auto w-full text-2xl py-3"
        startIcon={
          <Box
            component="img"
            src={city.logo}
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
        {city.name}
      </Button>
    </Box>
  );
};

export default City;
