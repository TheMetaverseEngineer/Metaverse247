import React from "react";
import { Box, List, ListItem, Typography } from "@mui/material";

const Roadmap = () => {
  return (
    <Box className="w-full flex flex-col items-center">
      <Box className="text-center mb-7 space-y-1">
        <Typography
          className="uppercase"
          color="#004D63"
          fontSize="clamp(1.5rem, 3vw, 3rem)"
        >
          Lorem ipsum
        </Typography>
        <Typography className="text-white" fontSize="clamp(1rem, 2vw, 1.5rem)">
          fagtdudm jguk ox9j kjsij
        </Typography>
      </Box>
      <Box className="w-full relative flex justify-center items-center max-w-screen-md">
        <List
          sx={{
            "&::after": {
              content: "''",
              width: 5,
              bgcolor: "#000",
              position: "absolute",
              left: { xxs: 0, md: "50%" },
              transform: { md: "translateX(-50%)" },
              top: 0,
              bottom: 0,
              zIndex: 50,
              borderRadius: 10,
            },
          }}
          className="pl-14 md:pl-0 md:w-full py-0"
        >
          {Array.from(new Array(8)).map((_, i) => (
            <ListItem
              key={i}
              className="px-0 md:w-1/2"
              sx={{
                "&::after": {
                  content: "''",
                  background: "#fff",
                  borderRadius: "50%",
                  width: 25,
                  height: 25,
                  position: "absolute",
                  border: "3px solid #000",
                  left: "-3.3rem",
                  transform: "translateX(-50%)",
                },
                "&::before": {
                  content: "''",
                  width: "2.5rem",
                  height: 0,
                  position: "absolute",
                  borderTop: "3px dotted #000",
                  right: "100%",
                  transform: "translateX(-10%)",
                },
                "&:nth-of-type(odd)": {
                  float: { md: "right" },
                  clear: { md: "left" },
                  transform: { md: "translateX(50px)" },
                  zIndex: 60,
                  "&::after": {
                    left: { md: "-3.1rem" },
                  },
                },
                "&:nth-of-type(even)": {
                  float: { md: "left" },
                  clear: { md: "right" },
                  justifyContent: { md: "flex-end" },
                  transform: { md: "translateX(-50px)" },
                  zIndex: 60,
                  "& .wrapper": {
                    justifyContent: { md: "flex-end" },
                  },
                  "&::after": {
                    left: { md: "auto" },
                    right: { md: "-3.1rem" },
                    transform: { md: "translateX(50%)" },
                  },
                  "&::before": {
                    right: { md: "auto" },
                    left: { md: "100%" },
                  },
                },
              }}
            >
              <Box
                className="wrapper flex flex-col xs:flex-row items-center gap-y-2 gap-x-3 w-full"
              >
                <Box
                  sx={{
                    background:
                      "linear-gradient(0deg, rgba(79,179,255,.78) 0%, rgba(194,214,255,.78) 100%)",
                  }}
                  width={60}
                  height={60}
                  className="rounded-full shadow-lg"
                />
                <Box className="text-center xs:text-left" maxWidth={200}>
                  <Typography color="#004C63" className="font-black">
                    Lorem
                  </Typography>
                  <Typography className="text-white">
                    kjhuihu kjhgu kjiij
                  </Typography>
                </Box>
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Roadmap;
