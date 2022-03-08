import React from "react";
import { Avatar, Box, Tooltip, Typography } from "@mui/material";
import { useMoralis } from "react-moralis";
import { getEllipsisTxt } from "../../helpers/formatter";

const Account = ({ size }) => {
  const { user } = useMoralis();

  return (
    <div className="flex items-center gap-2 flex-wrap justify-center">
      <Avatar />
      <Tooltip title={user?.get("ethAddress") || user?.get("solAddress")} arrow>
        <Typography
          fontFamily="candara"
          className="text-xl whitespace-nowrap"
        >
          {getEllipsisTxt(user?.get("ethAddress") || user?.get("solAddress"), size)}
        </Typography>
      </Tooltip>
    </div>
  );
};

export default Account;
