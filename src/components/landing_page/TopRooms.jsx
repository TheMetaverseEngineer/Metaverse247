import { useState, useEffect } from "react";
import bg from "../../images/landing-page/bg1.png";
import { Box, Button, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Scrollbar, FreeMode } from "swiper";
import "swiper/modules/scrollbar/scrollbar.min.css";
import "swiper/modules/free-mode/free-mode.min.css";
import "swiper/swiper.min.css";
import NightlifeIcon from "@mui/icons-material/Nightlife";
import CasinoIcon from "@mui/icons-material/Casino";
import SchoolIcon from "@mui/icons-material/School";
import MicExternalOnIcon from "@mui/icons-material/MicExternalOn";

export default function TopRooms() {
  const [allImages, setAllImages] = useState([]);
  const [filteredImages, setFilterdImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    let images = [];

    // using webpack to get all the images inside top-rooms folder
    const modules = require.context(
      "../../images/landing-page/top-rooms",
      false,
      /\.(png|jpe?g|svg|PNG)$/
    );

    modules.keys().forEach((item) => {
      images.push(modules(item).default);
    });

    setAllImages(images);
    setFilterdImages(images);
  }, []);

  return (
    <section id="top-events">
      <Box
        sx={{ backgroundImage: `url('${bg}')` }}
        className=" bg-cover bg-center flex items-center justify-end flex-col overflow-x-hidden"
        px={{ xxs: 2, xs: 5, md: 10 }}
        py={15}
      >
        <Box className="container mx-auto w-full space-y-5">
          <Box className="flex justify-between gap-10 items-center text-white">
            <Typography
              className="uppercase text-center sm:text-left leading-none"
              fontSize="clamp(1.5rem, 7vw, 3rem)"
            >
              Top Rooms{" "}
              <Box component="span" className="text-sm">
                (demo version)
              </Box>
            </Typography>
            <Button className="text-xs text-white">See more</Button>
          </Box>
          <Categories
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            allImages={allImages}
            setFilterdImages={setFilterdImages}
          />
          <Cards images={filteredImages} />
        </Box>
      </Box>
    </section>
  );
}

const Cards = ({ images }) => {
  return (
    <Box
      className="grid gap-5"
      sx={{ gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr));" }}
    >
      {images.map((e, i) => (
        <Box
          key={i}
          sx={{ background: `url('${e}')` }}
          minHeight={350}
          className="bg-cover bg-center bg-no-repeat flex items-end"
          borderRadius={5}
        >
          <Box
            bgcolor="rgba(255, 255, 255, 0.25)"
            className="flex flex-col w-full items-center gap-2 px-8 py-8 uppercase text-white"
            borderRadius={5}
            sx={{ backdropFilter: "blur(10px)" }}
          >
            <Typography className="font-semibold">Title</Typography>
            <Box className="flex justify-between w-full">
              <Typography className="font-light">Day</Typography>
              <Typography className="font-light">Date</Typography>
              <Typography className="font-light">Hour</Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

const Categories = ({
  selectedCategory,
  setSelectedCategory,
  setFilterdImages,
  allImages,
}) => {
  const categories = [
    { icon: <i className="fa-solid fa-ellipsis" />, name: "All" },
    { icon: <CasinoIcon />, name: "Casino" },
    {
      icon: <i className="fa-solid fa-cart-shopping" />,
      name: "Shop",
    },
    {
      icon: <SchoolIcon />,
      name: "Classroom",
    },
    {
      icon: <MicExternalOnIcon />,
      name: "Concert",
    },
    {
      icon: <i class="fa-solid fa-building" />,
      name: "Tower",
    },
    {
      icon: <i class="fa-solid fa-house-laptop" />,
      name: "Workspace",
    },
    { icon: <i className="fa-solid fa-image" />, name: "Gallery" },
    { icon: <NightlifeIcon />, name: "Club" },
    {
      icon: <i className="fa-solid fa-users" />,
      name: "Conference",
    },
  ];

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);

    if (category === "All") {
      setFilterdImages(allImages);
      return;
    }

    const regex = new RegExp(`${category}`, "i");
    setFilterdImages(() => allImages.filter((image) => image.match(regex)));
  };

  return (
    <Box className="min-w-0">
      <Swiper
        className="pb-4"
        slidesPerView={"auto"}
        spaceBetween={20}
        freeMode={true}
        scrollbar={{
          hide: true,
        }}
        modules={[FreeMode, Scrollbar]}
      >
        {categories.map((e, i) => (
          <SwiperSlide key={i} className="w-auto">
            <Button
              variant="contained"
              startIcon={e.icon}
              sx={{
                minWidth: 230,
                bgcolor:
                  selectedCategory === e.name
                    ? "#0f488a !important"
                    : "rgba(76, 138, 174, 0.5)",
                color: "#fff",
                backdropFilter: "brightness(130%) blur(50px)",
              }}
              className="py-3 rounded-full flex-shrink-0"
              onClick={() => handleSelectCategory(e.name)}
            >
              {e.name}
            </Button>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
