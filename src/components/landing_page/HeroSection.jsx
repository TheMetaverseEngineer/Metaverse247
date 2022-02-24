import { useRef } from "react";
import { Box, Typography } from "@mui/material";
import avaxPlanet from "../images/avaxPlanet.png";
import avaxPlanetLogo from "../images/avaxPlanetLogo.png";
import solCity from "../images/solCity.png";
import solCityLogo from "../images/solCityLogo.png";
import africaMap from "../images/africaMap.png";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

const cities = [
  { name: "Avax Planet", img: avaxPlanet, logo: avaxPlanetLogo },
  { name: "Sol City", img: solCity, logo: solCityLogo },
  { name: "Avax Planet", img: avaxPlanet, logo: avaxPlanetLogo },
  { name: "Sol City", img: solCity, logo: solCityLogo },
];

const HeroSection = () => {
  const wrapper = useRef(null);

  return (
    <section id="hero-section">
      <Box
        sx={{ backgroundImage: `url('${cities[0].img}')` }}
        className="min-h-screen bg-cover bg-center flex items-center justify-center flex-col"
        px={2}
        pt={20}
        pb={10}
        ref={wrapper}
      >
        <Box
          // Box attrs
          component={Swiper}
          pt={{ lg: 15 }}
          pb={{ xxs: 10, lg: 20 }}
          maxWidth="max(90%, 210px)"
          sx={{
            "& .swiper-slide-active": {
              transform: { lg: "scale(1.3)" },
              transition: "transform .6s ease-out",
            },
            "& .swiper-button-next, & .swiper-button-prev": {
              color: "#fff",
              textShadow: "0 2px 5px #333",
            },
            "& .swiper-pagination-bullet": {
              bgcolor: "#fff",
              width: 12,
              height: 12,
            },
          }}
          // Swiper attrs
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={100}
          centeredSlides={true}
          loop={true}
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
            <SwiperSlide key={i} className="max-w-full">
              <Box className="space-y-5">
                <Box
                  sx={{ backgroundImage: `url('${city.img}')` }}
                  className="bg-cover bg-center bg-no-repeat p-5 relative flex items-center justify-center cursor-pointer"
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
                        fontSize="clamp(1rem, 3vw, 2.5rem)"
                        sx={{ textShadow: "0 1px 10px #555" }}
                        className="leading-none"
                      >
                        lorem ipsum
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
                  <Box
                    component="img"
                    src={city.logo}
                    alt={`${city.name} logo`}
                    maxWidth={125}
                    className="flex-grow-0"
                  />
                  <Box className="text-white">
                    <Box className="flex justify-between gap-5 items-center">
                      <Typography
                        className="font-black self-end leading-none"
                        fontSize="clamp(1.3rem, 5vw, 3rem)"
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
                      fontSize="clamp(1rem, 2.3vw, 2rem)"
                      sx={{ textShadow: "0 2px 5px #333" }}
                    >
                      Address{" "}
                      <Box
                        component="span"
                        className="font-thin"
                        fontSize="clamp(.8rem, 1.5vw, 1.1rem)"
                      >
                        Lorem ipsum dolor sit amet
                      </Box>
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Box>
        {/*<Box className="flex flex-col w-full max-w-screen-xl gap-20 gap-x-14 md:flex-row"></Box>*/}
      </Box>
    </section>
  );
};

export default HeroSection;
