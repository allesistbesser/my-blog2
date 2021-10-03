import BlogCard from "./BlogCard";
import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import Box from "@mui/material/Box";
import CircularProgress from '@mui/material/CircularProgress';
import { useFetch } from "../utils/Functions"

const Cards = () => {
  const { info , loginInfo} = useContext(BlogContext);
  const { isLoading } = useFetch()
 
  return (

    <div>
      <h1
        style={{
          textAlign: "center",
          fontFamily: "Girassol",
        }}
      >
        <sup>_______</sup>D A S H B O A R D<sup>_______</sup>
      </h1>
      <h6 style={{textAlign:"center"}}>{loginInfo.email}</h6>
      {isLoading ?
        <CircularProgress size="7rem"sx={{position:"relative", left:"47%"}}/> : null}
      <Box
        sx={{
          display: "flex",
          flexFlow: "row wrap",
        }}
      >
        {info.map((item) => (
          <BlogCard item={item} key={item.id} />
        ))}
      </Box>
    </div>
  );
};

export default Cards;
