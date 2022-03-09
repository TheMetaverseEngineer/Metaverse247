import { useRef } from "react";
import { Box, Typography } from "@mui/material";
import avaxPlanet from "../../images/landing-page/avaxPlanet.png";
import avaxPlanetLogo from "../../images/landing-page/avaxPlanetLogo.png";
import solCity from "../../images/landing-page/solCity.png";
import solCityLogo from "../../images/landing-page/solCityLogo.png";
import africaMap from "../../images/landing-page/africaMap.png";
import tronTownLogo from "../../images/landing-page/tronTownLogo.png";
import tronTown from "../../images/landing-page/tronTown.jpeg";
import turkishMetaverse from "../../images/landing-page/turkishMetaverse.jpeg";
import turkishMetaverseLogo from "../../images/landing-page/turkishMetaverseLogo.png";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { Link } from "react-router-dom";

const cities = [
  {
    name: "Avax Planet",
    img: avaxPlanet,
    logo: avaxPlanetLogo,
    tagline: "A planet for Avax",
    slug: "avax-planet",
    address: "Metaverse247.live/avax-planet",
    href: "https://metaverse247.live:3001/avax-planet",
  },
  {
    name: "Sol City",
    tagline: "A place for Solana projects",
    img: solCity,
    logo: solCityLogo,
    slug: "sol-city",
    address: "Metaverse247.live/sol-city",
    href: "https://metaverse247.live:3001/sol-city",
  },
  {
    name: "Tron Town",
    img: tronTown,
    logo: tronTownLogo,
    slug: "tron-town",
    tagline: "Play with your car in Tron Town",
    address: "Metaverse247.live/trontown",
    href: "https://metaverse247.live:3001/trontown",
  },
  {
    name: "Turkish Metaverse",
    img: turkishMetaverse,
    logo: turkishMetaverseLogo,
    slug: "turkish-metaverse",
    tagline: "A metaverse for turk culture",
    address: "Metaverse247.live/turkish-metaverse",
    href: "https://metaverse247.live:3001",
  },
];

const HeroSection = () => {
  const wrapper = useRef(null);

  return (
    <section id="hero-section">
      <Box
        sx={{ backgroundImage: `url('${cities[0].img}')` }}
        className="min-h-screen bg-cover bg-center flex items-center justify-center flex-col min-w-0"
        px={{ xxs: 2, xs: 5, md: 10 }}
        pt={20}
        pb={10}
        ref={wrapper}
      >
        <Box className="container mx-auto">
          <Box
            sx={{
              "& .swiper": {
                width: "100%",
                maxWidth: "100%",
                minWidth: 0,
                minHeight: 0,
                pt: { lg: 15 },
                pb: { xxs: 10, lg: 20 },
                px: { xxs: 2, xs: 5 },
              },
              "& .swiper-slide-active": {
                transform: { lg: "scale(1.3)" },
                transition: "transform .6s ease-out",
              },
              "& .swiper-button-next, & .swiper-button-prev": {
                color: "#fff",
                textShadow: "0 2px 5px #333",
                fontWeight: "bold",
                "&::after": {
                  fontSize: { xxs: 30, xs: 40 },
                },
              },
              "& .swiper-pagination-bullet": {
                bgcolor: "#fff",
                width: 12,
                height: 12,
              },
              "& .swiper-button-prev": {
                left: 0,
              },
              "& .swiper-button-next": {
                right: 0,
              },
            }}
          >
            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={100}
              centeredSlides={true}
              speed={500}
              onActiveIndexChange={(swiper) => {
                if (!wrapper?.current) return;
                wrapper.current.style.backgroundImage = `url('${
                  cities[swiper.realIndex]?.img
                }')`;
              }}
              breakpoints={{
                1024: {
                  slidesPerView: 2,
                },
                1536: {
                  slidesPerView: 3,
                },
              }}
            >
              {cities.map((city, i) => (
                <SwiperSlide key={i}>
                  <Box className="space-y-5">
                    <Box
                      component={Link}
                      to={`cities/${city.slug}`}
                      sx={{ backgroundImage: `url('${city.img}')` }}
                      className="bg-cover bg-center bg-no-repeat p-5 relative flex items-center justify-center"
                      minHeight={{ xxs: 300, xs: 400, sm: 500 }}
                      borderRadius={15}
                    >
                      <Box className="relative z-50 flex flex-col items-center gap-5">
                        <Box
                          component="img"
                          src={city.logo}
                          alt={`${city.name} logo`}
                          maxWidth={120}
                        />
                        <Box className="text-center text-white">
                          <Typography
                            fontSize="clamp(1.3rem, 5vw, 3rem)"
                            sx={{ textShadow: "0 1px 10px #555" }}
                            className="font-black leading-none mb-3"
                          >
                            {city.name}
                          </Typography>
                          <Typography
                            fontSize="clamp(1.2rem, 4vw, 1.5rem)"
                            sx={{ textShadow: "0 1px 10px #555" }}
                            className="leading-none"
                          >
                            {city.tagline}
                          </Typography>
                        </Box>
                      </Box>
                      <Box
                        className="absolute inset-0"
                        sx={{
                          background:
                            "linear-gradient(0deg, rgba(79,179,255,0.42) 0%, rgba(194,214,255,0.42) 100%)",
                        }}
                        borderRadius={15}
                      />
                    </Box>
                    <Box className="flex flex-col items-center gap-x-5 xs:flex-row justify-center">
                      {/* <Box
                      component="img"
                      src={city.logo}
                      alt={`${city.name} logo`}
                      maxWidth={100}
                      className="flex-grow-0"
                    /> */}
                      <Box className="text-white">
                        <Box className="flex justify-between gap-5 items-center">
                          <Typography
                            className="font-black self-end leading-none"
                            fontSize="clamp(1.3rem, 3vw, 3rem)"
                            sx={{ textShadow: "0 2px 5px #333" }}
                          >
                            {city.name}
                          </Typography>
                          <Box
                            component="img"
                            src={africaMap}
                            alt="Map"
                            maxWidth={40}
                          />
                        </Box>
                        <Typography
                          fontSize="clamp(1rem, 2vw, 1.3rem)"
                          className="leading-none mt-2 font-bold"
                          sx={{ textShadow: "0 2px 5px #333" }}
                        >
                          Address: <br />
                          <Box
                            component="a"
                            href={city.href}
                            className="font-medium text-gray-400"
                            fontSize="clamp(.8rem, 1.5vw, 1.1rem)"
                          >
                            {city.address}
                          </Box>
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default HeroSection;
