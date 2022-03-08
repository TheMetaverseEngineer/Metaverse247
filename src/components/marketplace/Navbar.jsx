import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import GridViewIcon from "@mui/icons-material/GridView";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Paper,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useMoralis } from "react-moralis";
import { Link } from "react-router-dom";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import AuthModal from "./AuthModal";
import Logo from "./Logo";
import YourBalance from "./YourBalance";

const Navbar = () => {
  const { isAuthenticated } = useMoralis();
  const mdScreen = useMediaQuery("(min-width: 768px");
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const links = [
    {
      name: "Home",
      icon: <HomeOutlinedIcon />,
      props: {
        component: Link,
        to: "/",
      },
    },
    {
      name: "Dashboard",
      icon: <GridViewIcon />,
      props: {
        component: Link,
        to: "/marketplace",
      },
    },
    {
      name: "Market",
      icon: <LocalGroceryStoreOutlinedIcon />,
      props: {
        component: Link,
        to: "nfts",
      },
    },
    {
      name: "Active Bids",
      icon: <ConfirmationNumberOutlinedIcon />,
    },
    {
      name: "My Portfolio",
      icon: <StarBorderOutlinedIcon />,
      props: {
        className: "md:mt-7",
      },
    },
    {
      name: "History",
      icon: <FolderOpenOutlinedIcon />,
    },
    {
      name: isAuthenticated ? "My Wallet" : "Connect Wallet",
      icon: <AccountBalanceWalletOutlinedIcon />,
      props: {
        onClick: () => setShowAuthModal(true),
      },
    },
    { name: "Setting", icon: <SettingsOutlinedIcon /> },
  ];

  if (!mdScreen)
    return (
      <>
        <Paper
          elevation={10}
          className="fixed bottom-0 inset-x-0 py-1 rounded-none"
          sx={{ bgcolor: "primary.main", zIndex: 500 }}
        >
          <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            sx={{ bgcolor: "primary.main" }}
          >
            {links
              .filter((_, i) => i < 3)
              .map((link, i) => (
                <BottomNavigationAction
                  key={i}
                  {...link.props}
                  // label={link.name}
                  icon={link.icon}
                  className="text-gray-400"
                  sx={{
                    minWidth: 0,
                    "&.Mui-selected": {
                      color: "#fff !important",
                    },
                  }}
                />
              ))}
            <BottomNavigationAction
              aria-controls={open ? "more-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              id="more-button"
              icon={<MoreVertIcon />}
              className="text-gray-400"
              sx={{
                minWidth: 0,
                "&.Mui-selected": {
                  paddingTop: 2,
                },
              }}
              onClick={(event) => setAnchorEl(event.currentTarget)}
            />
            <Menu
              id="more-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={() => setAnchorEl(null)}
              MenuListProps={{
                "aria-labelledby": "more-button",
              }}
              PaperProps={{
                sx: {
                  bgcolor: "primary.main",
                },
              }}
            >
              {links
                .filter((_, i) => i > 3)
                .map((link, i) => (
                  <MenuItem key={i} {...link.props}>
                    <ListItemIcon className="text-white">
                      {link.icon}
                    </ListItemIcon>
                    <ListItemText className="text-white">
                      {link.name}
                    </ListItemText>
                  </MenuItem>
                ))}
            </Menu>
          </BottomNavigation>
        </Paper>
        {/* <AppBar className="top-auto bottom-0">
          <Toolbar className="py-4">
            <Box
              className="flex justify-between gap-5 overflow-x-auto flex-grow"
              sx={{
                "&::-webkit-scrollbar": {
                  height: 3,
                },
                "&::-webkit-scrollbar-track": {
                  background: "transparent",
                },
                "&::-webkit-scrollbar-thumb": {
                  bgcolor: "grey.500",
                  borderRadius: 5,
                },
                msOverflowStyle: "none",
                scrollbarWidth: "thin",
                scrollbarColor: "grey.500 transparent",
              }}
            >
              {links.map((link, i) => (
                <IconButton key={i} {...link.props} sx={{ color: "#fff" }}>
                  {link.icon}
                </IconButton>
              ))}
            </Box>
          </Toolbar>
        </AppBar> */}
        <AuthModal showModal={showAuthModal} setShowModal={setShowAuthModal} />
      </>
    );

  return (
    <>
      <Drawer
        anchor="left"
        variant="permanent"
        sx={{
          width: 250,
          "& .MuiDrawer-paper": {
            borderRight: 0,
            bgcolor: "primary.main",
            overflow: "hidden auto",
          },
        }}
        className="hidden md:block"
      >
        <Box
          bgcolor="primary.main"
          className="h-full text-white relative"
          width={250}
        >
          <Box className="px-4 py-5">
            <Logo />
          </Box>
          <List>
            {links.map((link, i) => (
              <ListItemButton key={i} {...link.props}>
                <ListItemIcon className="text-white">{link.icon}</ListItemIcon>
                <ListItemText>
                  <Typography sx={{ fontFamily: "erastic" }}>
                    {link.name}
                  </Typography>
                </ListItemText>
              </ListItemButton>
            ))}
          </List>
          {isAuthenticated && (
            <Box px={2}>
              <YourBalance />
            </Box>
          )}
        </Box>
      </Drawer>
      <AuthModal showModal={showAuthModal} setShowModal={setShowAuthModal} />
    </>
  );
};

export default Navbar;
