import React from "react";
import { Avatar, Box, Typography } from "@mui/material";

const Profile = () => {
  return (
    <div className="flex items-center gap-2">
      <Avatar />
      <Typography fontFamily="candara" className="font-semibold text-xl whitespace-nowrap">
        Lorem ipsum
      </Typography>
      <Box bgcolor="#200530" width={20} height={20} ml={10} className="rounded"/>
    </div>
  );
};

export default Profile;
