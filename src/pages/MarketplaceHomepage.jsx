import React from "react";
import SearchNFts from "../components/marketplace/SearchNFts";
import { Box, IconButton } from "@mui/material";
import Account from "../components/marketplace/Account";
import TrendingNFTs from "../components/marketplace/TrendingNFTs";
import RecentlyAdd from "../components/marketplace/RecentlyAdd";
import TopNFTs from "../components/marketplace/TopNFTs";
import TopCollections from "../components/marketplace/TopCollections";
import { useMoralis } from "react-moralis";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import bg from "../images/marketplace/marketplaceBg.png";
import YourBalance from "../components/marketplace/YourBalance";

const MarketplaceHomepage = ({ setShowAuthModal }) => {
  const { isAuthenticated } = useMoralis();

  return (
    <>
      <Box
        sx={{ backgroundImage: `url('${bg}')` }}
        className="flex-grow p-5 pb-20 sm:p-8 sm:pb-20 md:p-8 text-white bg-cover bg-right"
      >
        <div className="flex justify-between items-center gap-5">
          <Box className="w-full" fontFamily="candara" maxWidth={600}>
            <SearchNFts />
          </Box>
        </div>
        <div className="grid grid-cols-1 2xl:grid-cols-4 2xl:gap-x-5 gap-y-8 pt-8">
          <TrendingNFTs />
          <RecentlyAdd />
          <TopNFTs />
          <TopCollections />
        </div>
        {isAuthenticated && (
          <Box className="md:hidden pt-8">
            <YourBalance />
          </Box>
        )}
      </Box>
    </>
  );
};

export default MarketplaceHomepage;
