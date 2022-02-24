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

  const handleLoginClicked = async (provider) => {
    if (isAuthenticated || isAuthenticating) return;
    try {
      await authenticate({
        provider,
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
            bgcolor: "#200530",
            border: "2px solid #5d0f8a",
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
            sx={{
              background:
                "linear-gradient(145deg, rgba(189,139,209,1) 0%, rgba(107,27,207,1) 100%)",
              filter:
                ' progid:DXImageTransform.Microsoft.gradient(startColorstr="#bd8bd1",endColorstr="#6b1bcf",GradientType=1)',
            }}
            className="flex w-full p-3 rounded-lg shadow-lg justify-center"
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
            bgcolor: "#200530",
            border: "2px solid #5d0f8a",
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
          <div className="flex flex-col sm:flex-row items-center justify-evenly gap-3 w-full">
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
