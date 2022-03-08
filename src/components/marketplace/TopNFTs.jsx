import { Box, Button, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { FreeMode, Grid, Navigation, Scrollbar } from "swiper";
import "swiper/modules/free-mode/free-mode.min.css";
import "swiper/modules/grid/grid.min.css";
import "swiper/modules/navigation/navigation.min.css";
import "swiper/modules/scrollbar/scrollbar.min.css";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";
import hero1 from "../../images/marketplace/bg 3.png";
import hero2 from "../../images/marketplace/bg4.png";

const categories = [
  { name: "Wearable", icon: <i className="fa-solid fa-shirt" /> },
  { name: "Land", icon: <i className="fa-solid fa-earth-europe" /> },
  { name: "Keys", icon: <i className="fa-solid fa-key" /> },
  { name: "NftTools", icon: <i className="fa-solid fa-screwdriver-wrench" /> },
  { name: "Others", icon: <i className="fa-solid fa-ellipsis" /> },
];

const TopNfTs = () => {
  return (
    <div className="flex flex-col flex-grow xl:col-span-3">
      <div className="flex flex-col xs:flex-row justify-between items-center gap-5 py-3 mb-4">
        <Typography
          component="h2"
          fontFamily="candara"
          className="font-semibold leading-none"
          fontSize="clamp(1.5rem, 3vw, 2rem)"
        >
          Top NFT's
        </Typography>
        <div className="flex gap-7">
          <Button
            color="primary"
            variant="contained"
            className="px-5 py-2.5 normal-case rounded-full"
          >
            Last 7 days
          </Button>
          <Button
            color="primary"
            variant="contained"
            className="px-5 py-2.5 normal-case rounded-full"
          >
            All times
          </Button>
        </div>
      </div>
      <Box
        bgcolor="primary.main"
        borderRadius={{ md: 10 }}
        className="p-5 -mx-5 sm:-mx-8 md:mx-0"
      >
        <Box className="text-right mb-2 hidden xl:block">
          <Link
            href="#"
            className="text-sm text-white text-right"
            underline="hover"
          >
            See more
          </Link>
        </Box>
        <Box
          className="grid"
          sx={{
            "& .swiper": {
              width: "100%",
              maxWidth: "100%",
              minWidth: 0,
              minHeight: 0,
            },
          }}
        >
          <Swiper
            className="pb-4 mb-1"
            slidesPerView={1}
            spaceBetween={20}
            freeMode={true}
            scrollbar={{
              hide: true,
            }}
            modules={[FreeMode, Scrollbar]}
            breakpoints={{
              400: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1280: {
                slidesPerView: 5,
              },
            }}
          >
            {categories.map((category, i) => (
              <SwiperSlide key={i}>
                <Button
                  key={i}
                  disableElevation
                  sx={{
                    background:
                      "linear-gradient(0deg, rgba(154,216,255,.5) 0%, rgba(127,200,246,.5) 100%)",
                    color: "#fff",
                  }}
                  className="rounded-full w-full py-3 self-start flex-shrink-0"
                  startIcon={category.icon}
                >
                  {category.name}
                </Button>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
        {/* for screens befor xl breakpoint */}
        <Box
          className="xl:hidden"
          sx={{
            "& .swiper": {
              width: "100%",
              maxWidth: "100%",
              minWidth: 0,
              minHeight: 0,
            },
            "& .swiper-button-next, & .swiper-button-prev": {
              color: "primary.main",
              "&::after": {
                display: "flex",
                fontWeight: "bold",
                fontSize: 20,
                bgcolor: "#fff",
                width: 25,
                height: 25,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
              },
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
            slidesPerView={1}
            grid={{
              rows: 2,
              fill: "row",
            }}
            navigation
            modules={[Grid, Navigation]}
            spaceBetween={40}
            // centeredSlides={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                grid: { rows: 2 },
              },
              768: {
                slidesPerView: 1,
                grid: { rows: 2 },
              },
              950: {
                slidesPerView: 2,
                grid: { rows: 2 },
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {Array.from(new Array(8)).map((_, i) => (
              <SwiperSlide key={i}>
                <Box
                  className="flex flex-col text-center gap-2 items-center p-2 rounded-2xl xs:flex-row xs:text-left xl:flex-col xl:items-start"
                  bgcolor="#266186"
                >
                  <RouterLink to={`collection/${i + 1}`}>
                    <Box
                      component="img"
                      src={(i + 1) % 2 === 0 ? hero2 : hero1}
                      borderRadius="25%"
                    />
                  </RouterLink>
                  <Box className="xs:self-end">
                    <Typography className="font-bold">Lorem</Typography>
                    <Typography>Lorem ipsum dolor sit amet</Typography>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
        {/* for screens after xl breakpoint */}
        <Box className="hidden xl:grid grid-cols-5 gap-y-5 gap-x-10 w-full">
          {Array.from(new Array(10)).map((_, i) => (
            <Box
              className="flex flex-col text-center gap-2 items-center xs:justify-center xs:flex-row xs:text-left xl:flex-col xl:items-start"
              key={i}
            >
              <RouterLink to={`collection/${i + 1}`}>
                <Box
                  component="img"
                  src={(i + 1) % 2 === 0 ? hero2 : hero1}
                  borderRadius="25%"
                />
              </RouterLink>
              <Box className="xs:self-end">
                <Typography className="font-bold">Lorem</Typography>
                <Typography>Lorem ipsum dolor sit amet</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default TopNfTs;
