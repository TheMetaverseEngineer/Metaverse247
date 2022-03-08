import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Drawer,
  Fab,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Scrollbar, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/modules/scrollbar/scrollbar.min.css";
import "swiper/modules/free-mode/free-mode.min.css";
import "swiper/swiper.min.css";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import SearchNFts from "./SearchNFts";

const categories = [
  { name: "Wearable", icon: <i className="fa-solid fa-shirt" /> },
  { name: "Land", icon: <i className="fa-solid fa-earth-europe" /> },
  { name: "Keys", icon: <i className="fa-solid fa-key" /> },
  { name: "NftTools", icon: <i className="fa-solid fa-screwdriver-wrench" /> },
  { name: "Others", icon: <i className="fa-solid fa-ellipsis" /> },
];

const Filter = () => {
  const towXlScreen = useMediaQuery("(min-width: 1536px");

  if (!towXlScreen)
    return (
      <Box className="flex flex-col">
        <Box maxWidth={{ md: 500 }}>
          <SearchNFts />
        </Box>
        <Box className="mt-3">
          <Swiper
            className="pb-4 mb-1"
            slidesPerView={1}
            spaceBetween={30}
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
                  disableElevation
                  variant="contained"
                  sx={{
                    background: "rgba(0,59,96,0.7)",
                    color: "#fff",
                  }}
                  className="rounded-full px-5 py-2.5 flex-shrink-0 w-full"
                  startIcon={category.icon}
                >
                  {category.name}
                </Button>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    );

  return (
    <>
      <Drawer
        anchor="left"
        variant="permanent"
        sx={{
          width: { sm: 312.5 },
          "& .MuiDrawer-paper": {
            width: { sm: 312.5 },
            borderRight: 0,
            bgcolor: "rgba(0,59,96,0.5)",
            backdropFilter: "blur(31px) brightness(112%)",
            left: { "2xl": 250 },
          },
        }}
      >
        <Box className="px-5 py-12 sm:p-5 flex-shrink-0 z-50">
          <Box className="relative w-full" fontFamily="candara">
            <Box
              component="input"
              placeholder="Search NFTs ..."
              className="outline-none pl-12 rounded-full py-4 font-semibold text-xl leading-none w-full"
              color="#fff"
              bgcolor="#0F7599"
              sx={{
                "::placeholder": {
                  color: "#fff",
                  fontStyle: "italic",
                },
              }}
            />
            <span className="absolute top-1/2 left-4 transform -translate-y-1/2 text-lg text-white">
              <i className="fa-solid fa-magnifying-glass" />
            </span>
          </Box>
          <List className="text-white">
            {categories.map((category, i) => (
              <Box key={i}>
                <ListItemButton className="py-5 border-b-2 border-white">
                  <ListItemIcon className="text-2xl text-white">
                    {category.icon}
                  </ListItemIcon>
                  <Typography className="text-xl">{category.name}</Typography>
                </ListItemButton>
                <Divider light className="border-white" />
              </Box>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Filter;
