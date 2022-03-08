import { useState } from "react";
import Navbar from "./Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AuthModal from "./AuthModal";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#003B60",
    },
  },
  breakpoints: {
    values: {
      xxs: 0,
      xs: 400,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      "2xl": 1536,
    },
  },
});

const MarketplaceHomepage = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box className="flex">
          <Navbar />
          <Outlet />
        </Box>
      </ThemeProvider>
    </>
  );
};

export default MarketplaceHomepage;
