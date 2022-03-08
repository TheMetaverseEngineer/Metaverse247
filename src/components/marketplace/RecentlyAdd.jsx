import {
  Box,
  Button,
  Card, CardContent,
  CardMedia,
  Link,
  Typography
} from "@mui/material";
import rooster from "../../images/marketplace/rooster-desktop.png";

const RecentlyAdd = () => {
  return (
    <Box
      bgcolor="primary.main"
      className="px-5 py-5 flex-grow"
      borderRadius={10}
    >
      <Box className="flex justify-between items-center gap-5 mb-4 pl-1.5 pr-3">
        <Typography
          component="h2"
          fontFamily="candara"
          className="font-semibold leading-none"
          fontSize="clamp(1.5rem, 3vw, 2rem)"
        >
          Recently add
        </Typography>
        <Link
          href="#"
          underline="hover"
          fontFamily="erastic"
          className="text-white text-xs"
        >
          See more
        </Link>
      </Box>
      <Card sx={{ bgcolor: "transparent" }} className="shadow-none">
        <CardMedia
          component="img"
          image={rooster}
          sx={{ borderRadius: 10, height: 280 }}
          className="object-cover object-center"
        />
        <CardContent className="text-white pt-10">
          <div className="flex flex-col gap-2">
            <Typography fontFamily="candara">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              ea facilis fugiat hic impedit molestias qui rem vel vero
              voluptatibus?
            </Typography>
            <Button
              color="primary"
              size="small"
              sx={{
                fontFamily: "candara",
                background:
                  "linear-gradient(0deg, rgba(154,216,255,1) 0%, rgba(127,200,246,1) 100%)",
              }}
              className="self-end px-5 rounded-full"
            >
              Place bid
            </Button>
          </div>
        </CardContent>
      </Card>
    </Box>
  );
};

export default RecentlyAdd;
