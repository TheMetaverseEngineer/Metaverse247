import React, { useState } from "react";
import Navbar from "../components/marketplace/Navbar";
import SearchNFts from "../components/marketplace/SearchNFts";
import { Box, IconButton } from "@mui/material";
import Account from "../components/marketplace/Account";
import TrendingNFTs from "../components/marketplace/TrendingNFTs";
import RecentlyAdd from "../components/marketplace/RecentlyAdd";
import TopNFTs from "../components/marketplace/TopNFTs";
import TopCreators from "../components/marketplace/TopCreators";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AuthModal from "../components/marketplace/AuthModal";
import { useMoralis } from "react-moralis";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import bg from "../images/marketplaceBg.png";

const theme = createTheme({
  palette: {
    primary: {
      main: "#003B60",
    },
  },
  breakpoints: {
    values: {
      xss: 0,
      xs: 400,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      "2xl": 1536,
    },
  },
});

const Marketplace = () => {
  const { isAuthenticated } = useMoralis();
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="flex">
          <Navbar />
          <Box
            sx={{ backgroundImage: `url('${bg}')` }}
            className="flex-grow min-h-screen p-5 sm:p-8 text-white bg-cover bg-right"
          >
            <div className="flex justify-between items-center gap-5">
              <SearchNFts />
              {isAuthenticated ? (
                <Box
                  sx={{
                    display: "none",
                    background:
                      "linear-gradient(0deg, rgba(154,216,255,1) 0%, rgba(127,200,246,1) 100%)",
                    "@media (min-width: 850px)": {
                      display: "flex",
                    },
                  }}
                  className="p-3 rounded-lg shadow justify-center cursor-pointer"
                  onClick={() => setShowAuthModal(true)}
                >
                  <Account size={7} />
                </Box>
              ) : (
                <IconButton
                  onClick={() => setShowAuthModal(true)}
                  sx={{ color: "primary.main" }}
                  className="hidden xs:block"
                >
                  <AccountBalanceWalletOutlinedIcon
                    sx={{ color: "primary.main" }}
                    fontSize="large"
                  />
                </IconButton>
              )}
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-x-5 gap-y-8 pt-8">
              <TrendingNFTs />
              <RecentlyAdd />
              <TopNFTs />
              <TopCreators />
            </div>
          </Box>
        </div>
      </ThemeProvider>
      <AuthModal showModal={showAuthModal} setShowModal={setShowAuthModal} />
    </>
  );
};

export default Marketplace;
