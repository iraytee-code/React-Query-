/** @format */

import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

const Image = styled("img")({
  width: "100%",
});

export default function DetailsCard({ src, alt, title }) {
  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ margin: 1 }}>
          <Avatar src={src} />
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography>{title}</Typography>
        </Box>
      </Box>

      <Image src={src} alt={alt} />
    </div>
  );
}

DetailsCard.propTypes = {
  loading: PropTypes.bool,
};
