import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";

const TopCreators = () => {
  return (
    <Box bgcolor="primary.main" className="px-5 py-5 flex-grow" borderRadius={10}>
      <div className="flex justify-between items-center gap-5 mb-5">
        <Typography
          component="h2"
          fontFamily="candara"
          className="font-semibold"
          fontSize="clamp(1.5rem, 3vw, 2rem)"
        >
          Top creators
        </Typography>
        <Link
          href="#"
          underline="hover"
          fontFamily="erastic"
          className="text-white text-xs"
        >
          See all
        </Link>
      </div>
      <div className="flex flex-col gap-8">
        {Array.from(new Array(6)).map((_, i) => (
          <div className="flex items-center gap-x-3 gap-y-1 flex-wrap" key={i}>
            <Avatar />
            <Typography fontFamily="candara" className="font-semibold text-xl">
              Lorem ipsum
            </Typography>
            <Button
              color="primary"
              size="small"
              sx={{
                fontFamily: "candara",
                background:
                  "linear-gradient(0deg, rgba(154,216,255,1) 0%, rgba(127,200,246,1) 100%)",
              }}
              className="px-5 rounded-full ml-auto"
            >
              Follow
            </Button>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default TopCreators;
