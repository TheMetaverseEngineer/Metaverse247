import { Box, Button, Typography } from "@mui/material";
import { useMoralis } from "react-moralis";
import { useSelector } from "react-redux";
import { tokenValueTxt } from "../../helpers/formatter";
import {
  AvaxLogo,
  BSCLogo,
  EthereumLogo,
  PolygonCurrency,
  SolanaLogo
} from "./ChainLogos";

const YourBalance = () => {
  const { user, logout } = useMoralis();
  const { coins, solInfo } = useSelector((state) => state.user);

  return (
    <Box
      sx={{
        background:
          "linear-gradient(0deg, rgba(154,216,255,1) 0%, rgba(127,200,246,1) 100%)",
      }}
      className="px-5 py-5 rounded-2xl space-y-5"
    >
      <Typography color="primary.main" className="text-center text-2xl mb-3">
        Your Balance
      </Typography>
      <Box
        fontFamily="candara"
        className="grid gap-y-5 gap-x-10 grid-cols-1 justify-items-center  xs:grid-cols-2 md:grid-cols-1 md:gap-y-3"
      >
        {user?.get("ethAddress") &&
          coins?.map((coin, i) => (
            <Box
              className="flex items-center justify-between gap-1.5 w-full"
              key={i}
              maxWidth={{ xs: 170 }}
            >
              <Box className="text-xl" color="primary.main">
                {tokenValueTxt(coin.balance, 18, coin.symbol)}
              </Box>
              {(coin.symbol === "ETH" && <EthereumLogo />) ||
                (coin.symbol === "MATIC" && (
                  <div className="bg-white rounded-full">
                    <PolygonCurrency />
                  </div>
                )) ||
                (coin.symbol === "BNB" && <BSCLogo />) ||
                (coin.symbol === "AVAX" && <AvaxLogo />)}
            </Box>
          ))}
        {user?.get("solAddress") && (
          <Box
            className="flex items-center justify-between gap-1.5 w-full"
            maxWidth={{ xs: 170 }}
          >
            <span className="text-xl">
              {solInfo?.nativeBalance?.solana} SOL
            </span>
            <Box className="rounded-full bg-white flex items-center justify-center">
              <SolanaLogo />
            </Box>
          </Box>
        )}
      </Box>
      <Box>
        <Button
          variant="contained"
          className="font-bold mt-3 text-lg capitalize rounded-xl"
          fullWidth
        >
          Top Up Balance
        </Button>
        <Button
          variant="contained"
          color="error"
          className="font-bold mt-2 text-lg rounded-xl normal-case"
          fullWidth
          onClick={() => logout()}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
};

export default YourBalance;
