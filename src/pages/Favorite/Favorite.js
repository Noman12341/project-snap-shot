import React, { useState } from "react";
import { Box, Container, Grid } from "@material-ui/core";
import Card from "../../components/Card/Card";
import NavBar from "../../components/NavBar/NavBar";
import MySlideShow from "../../components/MySlideShow/MySlideShow";
import { useSelector } from "react-redux";

function Favorite() {
  const [currBreed, setCurrBreed] = useState("No Breed Selected !");

  const [str, setStr] = useState("");
  const { favImages, likedBreeds } = useSelector((state) => state.favorites);
  return (
    <Box>
      <NavBar currBreed={currBreed} str={str} setStr={setStr} />
      <MySlideShow currBreed={currBreed} breeds={likedBreeds} searchStr={str} />
      <Box>
        <Container>
          <Grid container spacing={4}>
            {favImages.length > 0 ? (
              favImages.map((img, index) => (
                <Grid item lg={3} key={index}>
                  <Card imgSrc={img} isLiked={true} />
                </Grid>
              ))
            ) : (
              <h2>No Images to show</h2>
            )}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
export default Favorite;
