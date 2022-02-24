import React from "react";
import bg from "../images/bg1.png";
import { Box, Typography } from "@mui/material";
import card1 from "../images/card1.png";
import card2 from "../images/card2.png";
import card3 from "../images/card3.png";
import card4 from "../images/card4.png";
import card5 from "../images/card5.png";

const cards = [card1, card2, card3, card4, card5, card1, card2, card3];

const TopEvents = () => {
  return (
    <section id="top-events">
      <Box
        sx={{ backgroundImage: `url('${bg}')` }}
        className=" bg-cover bg-center flex items-center justify-end flex-col"
        px={6}
        py={15}
      >
        <Box className="max-w-screen-xl w-full">
          <Typography
            className="uppercase text-white mb-7 text-center sm:text-left"
            fontSize="clamp(1.5rem, 7vw, 3rem)"
          >
            Top Events
          </Typography>
          <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {cards.map((card, i) => (
              <Box
                key={i}
                sx={{ background: `url('${card}')` }}
                minHeight={350}
                className="bg-cover bg-center bg-no-repeat flex items-end border-4"
                borderRadius={12}
                borderColor="#09F2CE"
              >
                <Box
                  bgcolor="#09F2CE"
                  className="flex flex-col w-full items-center gap-2 px-8 py-8 uppercase"
                  borderRadius={10}
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
        </Box>
      </Box>
    </section>
  );
};

export default TopEvents;
