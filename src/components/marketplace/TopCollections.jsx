import {
  Avatar,
  Box, Collapse, Link, List,
  ListItem, ListItemAvatar, ListItemText, Typography
} from "@mui/material";
import { useState } from "react";

const CollectionListItem = ({ index }) => {
  const [seeMore, setSeeMore] = useState(false);

  return (
    <ListItem disablePadding className="my-1 flex-col items-stretch">
      <Box className="flex items-center">
        <Typography className="mr-5">{index + 1}</Typography>
        <ListItemAvatar>
          <Avatar />
        </ListItemAvatar>
        <ListItemText
          primary="Lorem ipsum"
          secondary={
            <>
              <Typography component="span" variant="body2" color="grey.500">
                Floor price:{" "}
                <span className="inline-block">
                  <i className="fa-brands fa-ethereum ml-1" /> 13.7
                </span>
              </Typography>
              <Typography
                component="span"
                variant="caption"
                color="grey.500"
                className="block xs:hidden cursor-pointer"
                onClick={() => setSeeMore((prev) => !prev)}
              >
                {seeMore ? (
                  <i className="fa-solid fa-minus mr-1" />
                ) : (
                  <i className="fa-solid fa-plus mr-1" />
                )}
                See more
              </Typography>
            </>
          }
        />

        <ListItemText
          className="text-right hidden xs:block"
          primary="50%"
          secondary={
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="grey.500"
            >
              <i className="fa-brands fa-ethereum mr-1" />
              12,663.224
            </Typography>
          }
        />
      </Box>
      <Collapse in={seeMore} className="xs:hidden">
        <Box className="flex gap-x-5 justify-center">
          <Box>
            <Typography variant="body1">7days</Typography>
            <Typography variant="body2" color="grey.500">
              50%
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1">Lorem</Typography>
            <Typography variant="body2" color="grey.500">
              12,663.224
            </Typography>
          </Box>
        </Box>
      </Collapse>
    </ListItem>
  );
};

const TopCollections = () => {
  return (
    <Box
      bgcolor="primary.main"
      className="px-5 py-5 flex-grow"
      borderRadius={10}
    >
      <div className="flex justify-between items-center gap-5 mb-5">
        <Typography
          component="h2"
          fontFamily="candara"
          className="font-semibold"
          fontSize="clamp(1.5rem, 3vw, 2rem)"
        >
          Top Collections
        </Typography>
        <Link
          href="#"
          underline="hover"
          fontFamily="erastic"
          className="text-white text-xs"
        >
          See all
        </Link>
      </div>
      <List disablePadding>
        {Array.from(new Array(6)).map((_, i) => (
          <CollectionListItem index={i} key={i} />
        ))}
      </List>
    </Box>
  );
};

export default TopCollections;
