import { Box } from "@mui/material";

const SearchNFts = () => {
  return (
    <Box
      className="relative w-full"
      fontFamily="candara"
    >
      <Box
        component="input"
        placeholder="Search NFTs ..."
        className="outline-none pl-12 rounded-2xl py-4 font-semibold text-xl leading-none w-full"
        color="#fff"
        bgcolor="primary.main"
        sx={{
          "::placeholder": {
            color: "#fff",
            fontStyle: "italic",
          },
        }}
      />
      <span className="absolute top-1/2 left-4 transform -translate-y-1/2 text-lg text-white">
        <i className="fa-solid fa-magnifying-glass" />
      </span>
    </Box>
  );
};

export default SearchNFts;
