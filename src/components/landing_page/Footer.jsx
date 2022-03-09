import React from "react";
import { Box, Button, IconButton, Link, Typography } from "@mui/material";

const Footer = () => {
  const columns = [
    {
      name: "Main Menu",
      links: [
        {
          name: "Home",
          href: "",
          disabled: true,
        },
        {
          name: "Contact",
          href: "",
          disabled: true,
        },
        {
          name: "About",
          href: "",
          disabled: true,
        },
      ],
    },
    {
      name: "Top Metaverse Cities",
      links: [
        {
          name: "Avax Planet",
          href: "https://metaverse247.live:3001/avax-planet",
        },
        {
          name: "Sol City",
          href: "https://metaverse247.live:3001/sol-city",
        },
        {
          name: "Tron Town",
          href: "https://metaverse247.live:3001/trontown",
        },
      ],
    },
    {
      name: "Top Metaverse Rooms",
      links: [
        {
          name: "Shop",
          href: "",
        },
        {
          name: "Concert",
          href: "",
        },
        {
          name: "Classroom",
          href: "",
        },
      ],
    },
    {
      name: "Docs",
      links: [
        {
          name: "Whitepaper",
          href: "",
        },
        {
          name: "Roadmap",
          href: "",
        },
        {
          name: "Partnership",
          href: "",
        },
      ],
    },
  ];

  return (
    <footer>
      <Box
        className="text-white grid gap-5 gap-x-10 pt-20 container relative mx-auto justify-center justify-items-center md:justify-items-stretch md:justify-evenly"
        mt={20}
        pb={5}
        gridTemplateColumns={{
          md: "repeat(2, fit-content(50%))",
          xl: "repeat(4, fit-content(25%))",
        }}
      >
        <Box className="text-center space-y-1.5 absolute top-0 w-full">
          <Box className="flex flex-wrap gap-1.5 justify-center">
            <IconButton disabled>
              <i className="fa-brands fa-twitter" />
            </IconButton>
            <IconButton disabled>
              <i className="fa-brands fa-instagram" />
            </IconButton>
            <IconButton disabled>
              <i className="fa-brands fa-discord" />
            </IconButton>
            <IconButton disabled>
              <i className="fa-brands fa-youtube" />
            </IconButton>
            <IconButton href="https://github.com/TheMetaverseEngineer/metaverse-247-reactjs">
              <i className="fa-brands fa-github" />
            </IconButton>
          </Box>
        </Box>
        {columns.map((col, i) => (
          <Box
            className="text-center space-y-1.5 relative md:text-left"
            key={i}
          >
            <Typography className="font-black text-2xl">{col.name}</Typography>
            <Box className="flex flex-wrap justify-center gap-x-5 gap-y-1 md:flex-col">
              {col.links.map((link, i) => (
                <Button
                  href={link.href}
                  key={i}
                  className="text-white normal-case md:justify-start"
                  disabled={link?.disabled}
                >
                  {link.name}
                </Button>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </footer>
  );
};

export default Footer;
