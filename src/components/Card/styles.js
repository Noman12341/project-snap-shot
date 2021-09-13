import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    height: theme.spacing(40),
    width: "100%",
  },
  imgBox: {
    width: "100%",
    height: theme.spacing(34),
    overflow: "hidden",
  },
  rootImage: {
    width: "100%",
    cursor: "pointer",
    height: "100%",
    transition: "transform .4s",
    "&:hover": {
      transform: "scale(1.2,1.2)",
    },
  },
  likedHeart: {
    color: "orangered",
  },
}));
