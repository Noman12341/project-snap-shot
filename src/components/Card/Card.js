import React from "react";
import { Box, Paper, IconButton } from "@material-ui/core";
import useStyles from "./styles";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { useDispatch } from "react-redux";
import FavoriteIcon from "@material-ui/icons/Favorite";

function Card({ imgSrc, isLiked, onClick, currBreed }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Paper className={classes.root} elevation={4}>
      <Box className={classes.imgBox}>
        <img className={classes.rootImage} src={imgSrc} onClick={onClick} alt="Image" />
      </Box>
      <Box>
        {isLiked ? (
          <IconButton onClick={() => dispatch({ type: "REMOVE_FROM_FAV", payload: imgSrc })}>
            <FavoriteIcon className={classes.likedHeart} />
          </IconButton>
        ) : (
          <IconButton onClick={() => dispatch({ type: "ADD_INTO_FAV", payload: { imgSrc, currBreed } })}>
            <FavoriteBorderIcon />
          </IconButton>
        )}
      </Box>
    </Paper>
  );
}
export default Card;
