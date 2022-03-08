import { Box, Typography, useMediaQuery } from "@mui/material";
import { Scrollbars } from "react-custom-scrollbars";
import roadmapDesktop from "../../images/landing-page/roadmap-desktop.png";
import roadmapMobile from "../../images/landing-page/roadmap-mobile.png";

const roadmapPoints = [
  {
    title: (
      <>
        Q4
        <br />
        2021
      </>
    ),
    content: (
      <>
        - Starts Building Team
        <br /> - Start Developing Metaverse 1.1 Alpha
        <br /> - Start Creating exclusive Collections
        <br /> - Start Creating Websites
        <br /> - Start Creating Contents
      </>
    ),
  },
  {
    title: (
      <>
        Q1
        <br />
        2022
      </>
    ),
    content: (
      <>
        - Start Building the Brand
        <br />
        - Build Social Medias (Discord - Instagram)
        <br />
        - Add more Content
        <br />
        - Start Whitelist for exclusive nfts and lands
        <br />
        - Adding Services
        <br />
        - Launch Metaverse v 1.1 Alpha testnet
        <br /> - Expand dev team
      </>
    ),
  },
  {
    title: (
      <>
        Q2
        <br />
        2022
      </>
    ),
    content: (
      <>
        - Metaverse 1.1 Mainnet Launch
        <br />
        - Airdrops For Whitelisted
        <br />
        - Land Presales for whitelisted <br />
        - Expand the brand
        <br />
        - Expand the Metaverse
        <br />
        - Start play 2 earn missions testnet
        <br />
        - Developing DAO
        <br /> - Developing And Testing 1.2 Beta
      </>
    ),
  },
  {
    title: (
      <>
        Q3
        <br />
        2022
      </>
    ),
    content: (
      <>
        -Launching Version 1.2 Beta
        <br />
        -More Drops -airdrops for whitelisted
        <br />
        -Play2Earn Missions Mainnet Launch
        <br />
        -Expanding Brand
        <br />
        -Expanding Network
        <br />
        -Start Token Presale for Whitelisted and Stake plans
        <br />
        -Metaverse 1.x Updates
        <br />
        -VR + AR integration
      </>
    ),
  },
  {
    title: (
      <>
        Q4
        <br />
        2022
      </>
    ),
    content: (
      <>
        -Collection Drops-Airdrops
        <br />
        -Expanding Metaverse
        <br />
        -Metaverse 1.x Updates
        <br />
        -More Service - Play 2 Earn Missions
        <br />
        -Expanding Brand
        <br />
        -Expanding Community
      </>
    ),
  },
  {
    title: <>2023</>,
    content: (
      <>
        Launching Token On DEXes
        <br />
        Metaverse 1 Final Release <br />
        Expand Network
        <br />
        Expand Metaverse
        <br />
        Starts Developing V2
        <br />
        More Drops - Airdrops <br />
        Defi Services: Lend - Borrow <br />
        More Play2Earn-Services
        <br />
        Listing On More Exchanges
        <br />
        Grow Team
        <br />
        Start DAO
      </>
    ),
  },
  {
    title: <>2024</>,
    content: (
      <>
        Launching Metaverse Version 2 Final
        <br />
        Roadmap Updates with DAO votes
        <br />
        for the Metaverse 2.0 <br />
        Growing Network
        <br />
        Growing Brand
        <br />
        More Exchanges
        <br />
        More Exclusive Collections
      </>
    ),
  },
];

const Roadmap = () => {
  const mdScreen = useMediaQuery("(min-width: 768px)");

  return (
    <Box className="w-full flex flex-col items-center">
      <Box className="text-center mb-7 space-y-1">
        <Typography
          className="uppercase font-black"
          color="#004D63"
          fontSize="clamp(2rem, 4vw, 3rem)"
        >
          Roadmap
        </Typography>
      </Box>
      <Scrollbars
        autoHeight
        autoHeightMin={750}
        style={{ width: "100%" }}
        renderView={(props) => (
          <Box className="flex items-center" {...props}></Box>
        )}
      >
        <Box className="relative mx-auto">
          <Box
            component="img"
            src={mdScreen ? roadmapDesktop : roadmapMobile}
            alt="Roadmap"
            className="max-w-none"
          />
          {roadmapPoints.map((point, i) => (
            <Box
              key={i}
              className={`absolute border-l pl-3 py-5 flex flex-col gap-5 ${
                point?.classes
              } ${(i + 1) % 2 === 0 ? "bottom-1/2" : "top-1/2"}`}
              left={
                ((mdScreen ? 1126 : 2335) / 8) * (i + 1) - (mdScreen ? 50 : 120)
              }
              maxWidth={200}
            >
              <Typography
                color="#025277"
                className={`font-black leading-none ${
                  (i + 1) % 2 === 0 ? "order-2" : "order-none"
                }`}
                fontSize="clamp(1.3rem, 5vw, 2rem)"
              >
                {point.title}
              </Typography>
              <Typography className="text-white text-sm">
                {point.content}
              </Typography>
            </Box>
          ))}
        </Box>
      </Scrollbars>
    </Box>
  );
};

export default Roadmap;
