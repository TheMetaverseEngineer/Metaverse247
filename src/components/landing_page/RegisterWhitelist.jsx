import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
// images
import bg from "../../images/landing-page/bg1.png";
import club from "../../images/landing-page/slider-images/club.png";
import concert from "../../images/landing-page/slider-images/concert.png";
import classroom from "../../images/landing-page/slider-images/classroom.png";
import conference from "../../images/landing-page/slider-images/conference-room.png";
import tower from "../../images/landing-page/slider-images/tower.png";
import gallery from "../../images/landing-page/slider-images/gallery.png";
import tools from "../../images/landing-page/slider-images/tools.png";
import googleTower from "../../images/landing-page/slider-images/search.png";
import commingSoon from "../../images/landing-page/slider-images/comming-soon.png";

const RegisterWhitelist = () => {
  const slides = [
    {
      img: classroom,
      title: (
        <Typography
          className="font-black leading-none"
          fontSize="clamp(1.5rem, 4vw, 2.5rem)"
        >
          Metaverse Class Rooms
        </Typography>
      ),
      subtitle: (
        <Typography
          fontSize="clamp(1.2rem, 2.5vw, 1.8rem)"
          className="leading-tight font-medium mx-auto"
        >
          Create Free Metaverse <br />
          Classroom For Whitelisted
        </Typography>
      ),
    },
    {
      img: conference,
      title: (
        <Typography
          className="font-black leading-none"
          fontSize="clamp(1.5rem, 4vw, 2.5rem)"
        >
          Conference Room
        </Typography>
      ),
      subtitle: (
        <Typography
          fontSize="clamp(1.2rem, 2.5vw, 1.8rem)"
          className="leading-tight font-medium mx-auto"
        >
          Talk About Your idea In Social <br />
          And Conference Rooms
        </Typography>
      ),
    },
    {
      img: gallery,
      title: (
        <Typography
          className="font-black leading-none"
          fontSize="clamp(1.5rem, 4vw, 2.5rem)"
        >
          Metaverse NFT Galleries
        </Typography>
      ),
      subtitle: (
        <Typography
          fontSize="clamp(1.2rem, 2.5vw, 1.8rem)"
          className="leading-tight font-medium mx-auto"
        >
          Create your gallery <br /> and invite friends. Earn reward
        </Typography>
      ),
    },
    {
      img: concert,
      title: (
        <Typography
          className="font-black leading-none"
          fontSize="clamp(1.5rem, 4vw, 2.5rem)"
          maxWidth={650}
        >
          Concert Hall
        </Typography>
      ),
      subtitle: (
        <Typography
          fontSize="clamp(1.2rem, 2.5vw, 1.8rem)"
          className="leading-tight font-medium mx-auto"
        >
          Join concerts in the metaverse
        </Typography>
      ),
    },
    {
      img: club,
      title: (
        <Typography
          className="font-black leading-none"
          fontSize="clamp(1.5rem, 4vw, 2.5rem)"
          maxWidth={650}
        >
          Rent Or Join Clubs with Your Favorite Genres. Pop, Rap, DJs, …
        </Typography>
      ),
      subtitle: (
        <Typography
          fontSize="clamp(1.2rem, 2.5vw, 1.8rem)"
          className="leading-tight font-medium mx-auto"
        >
          Invite Friend , Earn Reward
        </Typography>
      ),
    },
    {
      img: tools,
      title: (
        <Typography
          className="font-black leading-none"
          fontSize="clamp(1.5rem, 4vw, 2.5rem)"
        >
          NFTTools
        </Typography>
      ),
      subtitle: (
        <Typography
          fontSize="clamp(1.2rem, 2.5vw, 1.8rem)"
          className="leading-tight font-medium mx-auto"
        >
          Tools you can use in Metaverse
          <br />
          Furniture, Laptop, Speacker, ...
        </Typography>
      ),
    },
    {
      img: tower,
      title: (
        <Typography
          className="font-black leading-none"
          fontSize="clamp(1.5rem, 4vw, 2.5rem)"
        >
          Towers / shops
        </Typography>
      ),
      subtitle: (
        <Typography
          fontSize="clamp(1.2rem, 2.5vw, 1.8rem)"
          className="leading-tight font-medium mx-auto"
        >
          find top shops and business
          <br />
          Rent / buy shops in available towers
        </Typography>
      ),
    },
    {
      img: googleTower,
      title: (
        <Typography
          className="font-black leading-none"
          fontSize="clamp(1.5rem, 4vw, 2.5rem)"
        >
          Search in metavers
        </Typography>
      ),
      subtitle: (
        <Typography
          fontSize="clamp(1.2rem, 2.5vw, 1.8rem)"
          className="leading-tight font-medium mx-auto"
        >
          Experience future search exploring <br />
          in google tower
        </Typography>
      ),
    },
    {
      img: commingSoon,
      title: (
        <Typography
          className="font-black leading-none"
          fontSize="clamp(1.5rem, 4vw, 2.5rem)"
        >
          More coming soon
        </Typography>
      ),
      subtitle: (
        <Typography
          fontSize="clamp(1.2rem, 2.5vw, 1.8rem)"
          className="leading-tight font-medium mx-auto"
        >
          Vehicle, wearable, buildings
        </Typography>
      ),
    },
  ];

  return (
    <section id="top-events">
      <Box
        sx={{ backgroundImage: `url('${bg}')` }}
        className=" bg-cover bg-center flex items-center justify-end flex-col"
        px={{ xxs: 2, xs: 6 }}
        py={15}
      >
        <Box
          // box attrs
          component={Swiper}
          maxWidth="max(90%, 210px)"
          sx={{
            "& .swiper-wrapper": {},
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
          modules={[Navigation]}
          slidesPerView={1}
          navigation
          centeredSlides={true}
          speed={500}
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i} className="h-auto">
              <Card className="bg-transparent rounded-lg shadow-none h-full flex flex-col">
                <CardMedia
                  image={slide.img}
                  component="img"
                  sx={{ minHeight: 220 }}
                  className="rounded-t-lg"
                />
                <CardContent
                  sx={{ bgcolor: "#50A1B7" }}
                  className="flex-grow flex items-center"
                >
                  <Box className="flex flex-col flex-grow gap-y-5 gap-x-32 max-w-screen-xl mx-auto xl:flex-row xl:justify-between xl:items-center xl:p-10">
                    <Button
                      sx={{
                        bgcolor: "#D0FFFF",
                        color: "#000",
                        "&:hover": {
                          bgcolor: "#D0FFFF",
                        },
                        maxWidth: 600,
                      }}
                      disableElevation
                      className="capitalize order-2 text-lg rounded-xl flex-grow py-3 flex-shrink-0 self-center w-full xl:w-auto xl:py-5 xl:order-none"
                    >
                      Register For Whitelist
                    </Button>
                    <Box className="text-white capitalize text-center space-y-3 self-center flex-shrink-1">
                      {slide.title}
                      {slide.subtitle}
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Box>
      </Box>
    </section>
  );
};

export default RegisterWhitelist;
