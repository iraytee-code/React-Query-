/** @format */

import React, { Fragment, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import MuiSkeleton from "../Skeleton/MuiSkeleton";
import DetailsCard from "../components/DetailsCard";
import { Grid } from "@mui/material";

const Details = () => {
  const [result, setResult] = useState([]);
  const { isLoading, data } = useQuery("details", () => {
    return axios.get("https://randomuser.me/api/?results=24");
  });

  if (isLoading) {
    return (
      <div>
        <MuiSkeleton />
      </div>
    );
  }

  //   const result = data?.data?.results;

  console.log(result, typeof result);

  return (
    <Fragment>
      <div>
        <MuiSkeleton />
      </div>
    </Fragment>
  );
};

export default Details;
