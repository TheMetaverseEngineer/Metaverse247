import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import metamask from "../../images/wallets/metamaskWallet.png";
import walletConnect from "../../images/wallets/wallet-connect.svg";
import phantom from "../../images/wallets/phantom.jpg";
import { useMoralis } from "react-moralis";
import CustomAlert from "../CustomAlert";
import Account from "./Account";

const AuthModal = ({ showModal, setShowModal }) => {
  const { authenticate, isAuthenticated, isAuthenticating, logout } =
    useMoralis();
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleError = () => {
    setShowAlert(true);
    setAlertMessage("Connection failed");
  };

  const handleSuccess = async () => {
    setShowModal(false);
  };

  const handleLoginClicked = async (provider, type) => {
    if (isAuthenticated || isAuthenticating) return;
    try {
      await authenticate({
        provider,
        type,
        onSuccess: handleSuccess,
        onError: handleError,
      });
    } catch (e) {
      setAlertMessage(e?.message || "Something went wrong!");
    }
  };

  const handleLogout = () => {
    logout();
    setShowModal(false);
  };

  if (isAuthenticated)
    return (
      <Dialog
        maxWidth="xs"
        fullWidth
        open={showModal}
        onClose={() => setShowModal(false)}
        sx={{
          "& .MuiDialog-paper": {
            bgcolor: "primary.main",
            borderRadius: 5,
          },
        }}
      >
        <IconButton
          onClick={() => setShowModal(false)}
          className="absolute top-0 right-2 text-white"
        >
          <CloseIcon />
        </IconButton>
        <DialogTitle className="text-center text-white">
          Your Wallet
        </DialogTitle>
        <DialogContent className="flex flex-col items-center gap-3">
          <Box
            className="flex w-full p-3 rounded-lg shadow-xl justify-center text-white"
            sx={{
              background:
                "linear-gradient(0deg, rgba(154,216,255,1) 0%, rgba(127,200,246,1) 100%)",
            }}
          >
            <Account size={7} />
          </Box>
          <Button
            fullWidth
            color="error"
            variant="contained"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </DialogContent>
      </Dialog>
    );

  return (
    <>
      <Dialog
        maxWidth="xs"
        fullWidth
        open={showModal}
        onClose={() => setShowModal(false)}
        sx={{
          "& .MuiDialog-paper": {
            bgcolor: "primary.main",
            borderRadius: 5,
          },
        }}
      >
        <IconButton
          onClick={() => setShowModal(false)}
          className="absolute top-0 right-2 text-white"
        >
          <CloseIcon />
        </IconButton>
        <DialogTitle className="text-center text-white">
          Connect Wallet
        </DialogTitle>
        <DialogContent className="flex flex-col items-center gap-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-3 w-full">
            <Button
              onClick={() => handleLoginClicked("injected")}
              className="flex w-full sm:w-auto flex-row sm:flex-col justify-start gap-2 text-black normal-case text-white"
              disabled={isAuthenticating}
              sx={{ "&.Mui-disabled": { opacity: 0.5 } }}
            >
              <img src={metamask} alt="MetaMask" className="w-12 h-12" />
              <span className="text-white">MetaMask</span>
            </Button>
            <Button
              onClick={() => handleLoginClicked("walletconnect")}
              className="flex w-full sm:w-auto flex-row sm:flex-col justify-start gap-2 normal-case text-white"
              sx={{ "&.Mui-disabled": { opacity: 0.5 } }}
              disabled={isAuthenticating}
            >
              <img
                src={walletConnect}
                alt="WalletConnect"
                className="w-12 h-12"
              />
              <span className="text-white">WalletConnect</span>
            </Button>
            <Button
              onClick={() => handleLoginClicked(null, "sol")}
              className="flex w-full sm:w-auto flex-row sm:flex-col justify-start gap-2 normal-case text-white"
              sx={{ "&.Mui-disabled": { opacity: 0.5 } }}
              disabled={isAuthenticating}
            >
              <img
                src={phantom}
                alt="Phantom"
                className="w-12 h-12 rounded-full"
              />
              <span className="text-white">Phantom</span>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      <CustomAlert
        message={alertMessage}
        setShowAlert={setShowAlert}
        showAlert={showAlert}
        variant="filled"
      />
    </>
  );
};

export default AuthModal;
