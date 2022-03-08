import bg from "../images/marketplace/marketplaceBg.png";
import {
  Box,
  IconButton,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import { Link } from "react-router-dom";
import img from "../images/marketplace/collectionPic.png";
import Logo from "../components/marketplace/Logo";

const Collection = () => {
  return (
    <Box
      sx={{ backgroundImage: `url('${bg}')` }}
      className="bg-cover bg-center min-h-screen w-full p-5 pb-20 xs:px-10 md:p-10 flex items-center justify-center"
    >
      <Box>
        <Box className="flex gap-x-5 items-center justify-between md:hidden">
          <IconButton component={Link} to="/marketplace" className="text-white">
            <i className="fa-solid fa-arrow-left" />
          </IconButton>
          <Box className="flex-shrink">
            <Logo />
          </Box>
          <IconButton className="text-white">
            <i className="fa-solid fa-ellipsis-vertical" />
          </IconButton>
        </Box>
        <Card
          className="bg-transparent relative overflow-visible mt-14 md:mt-0  xl:flex xl:gap-x-10 xl:items-center justify-center"
          elevation={0}
          sx={{ maxWidth: { md: 600, xl: "100%" } }}
        >
          <CardMedia className="relative xl:order-2">
            <Box
              component="img"
              src={img}
              className="rounded-3xl object-cover w-full object-center"
            />
            <Button
              color="primary"
              startIcon={<i className="fa-solid fa-stopwatch" />}
              className="absolute top-0 transform -translate-y-1/2 bg-white normal-case flex-shrink left-1/2 -translate-x-1/2 px-10 whitespace-nowrap"
            >
              Lorem ipsum
            </Button>
            <IconButton className="text-white absolute left-1/2 transform -translate-x-1/2">
              <i className="fa-solid fa-ellipsis" />
            </IconButton>
            <IconButton className="text-white absolute right-0 -bottom-16">
              <i className="fa-solid fa-heart text-2xl border-2 rounded px-2" />
            </IconButton>
          </CardMedia>
          <CardContent className="pt-8" sx={{ maxWidth: { xl: 600 } }}>
            <Box className="flex justify-between items-center gap-x-5 mb-1 flex-wrap">
              <Box className="uppercase">
                <Typography color="primary" fontSize="clamp(1.5rem, 5vw, 3rem)">
                  Lorem ipsum
                </Typography>
                <Typography
                  color="primary"
                  className="font-bold"
                  fontSize="clamp(1rem, 2vw, 2rem)"
                >
                  Lorem ipsum dolor sit amet
                </Typography>
              </Box>
            </Box>
            <Typography
              className="text-white"
              fontSize="clamp(1rem, 2vw, 1.2rem)"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
              voluptatum provident dolor rerum. Architecto pariatur dolores
              minus vitae consequuntur obcaecati nemo porro quas, maxime in fuga
              provident fugiat eaque saepe ab. Quasi perferendis rerum aut.
            </Typography>
            <Box className="flex justify-between flex-wrap gap-x-5 gap-y-2 mt-3">
              <Typography
                className="uppercase font-black text-white flex items-center gap-x-3"
                fontSize="clamp(1.3rem, 3vw, 2rem)"
              >
                <Box
                  component="span"
                  bgcolor="#3A33CE"
                  className="text-white w-10 h-10 inline-flex items-center justify-center rounded-full"
                >
                  <i className="fa-brands fa-ethereum text-xl" />
                </Box>{" "}
                0.8 eth
              </Typography>
              <Button className="bg-white normal-case px-5 xs:px-10">
                Place BID
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Collection;
