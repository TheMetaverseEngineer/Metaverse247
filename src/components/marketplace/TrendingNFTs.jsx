import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Box, Card,
  CardContent,
  CardMedia,
  IconButton,
  Link, Menu, MenuItem,
  Typography
} from "@mui/material";
import { useState } from "react";
import { Navigation } from "swiper";
import "swiper/modules/navigation/navigation.min.css";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";
import heros from "../../images/marketplace/allllll.png";
import chicken from "../../images/marketplace/chicken.gif";
import knights from "../../images/marketplace/ub0s0b07jwi511.png";

const nfts = [heros, chicken, knights];

const TrendingNfTs = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const showMenu = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex flex-col xl:col-span-3">
      <div className="flex justify-between items-center gap-5 py-3">
        <Typography
          component="h2"
          fontFamily="candara"
          className="font-semibold leading-none"
          fontSize="clamp(1.5rem, 3vw, 2rem)"
        >
          Trending NFT's
        </Typography>
        <div className="gap-7 md:gap-4 lg:gap-7 hidden sm:flex">
          {["Art", "Music", "Collectibles", "See more"].map((e, i) => (
            <Link
              href="#"
              underline="hover"
              fontFamily="erastic"
              className="text-white"
              key={i}
            >
              {e}
            </Link>
          ))}
        </div>
        <div className="block sm:hidden">
          <IconButton
            id="menu-btn"
            className="text-white"
            onClick={handleClick}
            aria-controls={showMenu ? "trending-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={showMenu ? "true" : undefined}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="trending-menu"
            anchorEl={anchorEl}
            open={showMenu}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "menu-btn",
            }}
          >
            {["Art", "Music", "Collectibles", "See more"].map((e, i) => (
              <MenuItem key={i} className="pr-20">
                {e}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </div>
      <Box
        className="grid"
        sx={{
          "& .swiper": {
            width: "100%",
            maxWidth: "100%",
            minWidth: 0,
            minHeight: 0,
          },
          "& .swiper-button-next, & .swiper-button-prev": {
            color: "#fff",
            textShadow: "0 2px 5px #333",
          },
        }}
      >
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          navigation
          spaceBetween={40}
          breakpoints={{
            1024: {
              slidesPerView: 2,
            },
            // 1280: {
            //   slidesPerView: 2,
            // },
            1536: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {nfts.map((nft, i) => (
            <SwiperSlide key={i} className="max-w-full">
              <Card
                sx={{ bgcolor: "primary.main", borderRadius: 10 }}
                className="p-5"
              >
                <CardMedia
                  component="img"
                  image={nft}
                  sx={{ borderRadius: 10, height: 280 }}
                  className="object-cover object-center"
                />
                <CardContent className="text-white flex items-center pt-10">
                  <Typography fontFamily="candara">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    hic inventore laboriosam minima unde? A deleniti id
                    quibusdam tempora voluptate?
                  </Typography>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </div>
  );
};

export default TrendingNfTs;
