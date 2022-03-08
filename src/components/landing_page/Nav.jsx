import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import logo from "../../images/landing-page/logo.png";

const Nav = () => {
  return (
    <Box
      component="header"
      px={2}
      className="fixed top-5 inset-x-0"
      zIndex={200}
    >
      <nav className="container mx-auto">
        <Box className="flex justify-between gap-x-10 gap-y-5 flex-col xs:items-center xs:flex-row">
          <Box>
            <img src={logo} alt="Logo" width={400} />
          </Box>
          {/* <Button
            sx={{
              background: "#003B60",
              "&:hover": {
                background: "#003B60",
              },
              boxShadow: {
                xxs: "0 -5px 10px 0 rgba(0, 0, 0, 0.6)",
                md: "0 5px 10px 0 rgba(0, 0, 0, 0.6)",
              },
            }}
            className="fixed bottom-0 inset-x-0 text-white px-16 py-5 text-lg rounded-none normal-case md:relative md:rounded-xl"
            component={Link}
            to="/marketplace"
            startIcon={<LocalGroceryStoreOutlinedIcon />}
          >
            Marketplace
          </Button> */}
        </Box>
      </nav>
    </Box>
  );
};

export default Nav;
