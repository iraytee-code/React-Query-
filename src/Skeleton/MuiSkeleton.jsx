/** @format */

import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";

const Image = styled("img")({
  width: "100%",
});

function SkeletonChildrenDemo(props) {
  const { loading = false } = props;

  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ margin: 1 }}>
          <Skeleton variant="circular">
            <Avatar />
          </Skeleton>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Skeleton width="100%">
            <Typography>.</Typography>
          </Skeleton>
        </Box>
      </Box>

      <Skeleton variant="rectangular" width="100%">
        <div style={{ paddingTop: "57%" }} />
      </Skeleton>
    </div>
  );
}

SkeletonChildrenDemo.propTypes = {
  loading: PropTypes.bool,
};

export default function MuiSkeleton() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs>
          <SkeletonChildrenDemo />
        </Grid>
        <Grid item xs>
          <SkeletonChildrenDemo />
        </Grid>
        <Grid item xs>
          <SkeletonChildrenDemo />
        </Grid>
        <Grid item xs>
          <SkeletonChildrenDemo />
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs>
          <SkeletonChildrenDemo />
        </Grid>
        <Grid item xs>
          <SkeletonChildrenDemo />
        </Grid>
        <Grid item xs>
          <SkeletonChildrenDemo />
        </Grid>
        <Grid item xs>
          <SkeletonChildrenDemo />
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs>
          <SkeletonChildrenDemo />
        </Grid>
        <Grid item xs>
          <SkeletonChildrenDemo />
        </Grid>
        <Grid item xs>
          <SkeletonChildrenDemo />
        </Grid>
        <Grid item xs>
          <SkeletonChildrenDemo />
        </Grid>
      </Grid>
    </Fragment>
  );
}
