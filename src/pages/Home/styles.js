import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  rootTopBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(3, 4, 0),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  mainHeading: {
    fontSize: theme.spacing(5),
    fontWeight: 700,
  },
  searchInput: {
    fontSize: theme.spacing(2),
    backgroundColor: "transparent",
    border: "2px solid grey",
    padding: theme.spacing(1.5),
    borderRadius: theme.spacing(0.5),
    width: theme.spacing(37.5),
    margin: theme.spacing(2, 0),
  },
  chipBtn: {
    backgroundColor: "transparent",
    fontSize: theme.spacing(2),
    padding: theme.spacing(1.5, 3.5),
    border: "2px solid lightgrey",
    borderRadius: theme.spacing(0.5),
    color: "grey",
    cursor: "pointer",
    margin: theme.spacing(1),
    transition: "box-shadow .3s",
    "&:hover": {
      boxShadow: theme.shadows[5],
    },
  },
  activeChipBtn: {
    backgroundColor: "transparent",
    fontSize: theme.spacing(2),
    padding: theme.spacing(1.5, 3.5),
    border: "2px solid orangered",
    borderRadius: theme.spacing(0.5),
    color: "orangered",
    cursor: "pointer",
    margin: theme.spacing(1),
    boxShadow: "0px 0px 4px 2px orangered",
  },
  rootImage: {
    width: "100%",
    cursor: "pointer",
    height: "100%",
    transition: "transform .4s",
    "&:hover": {
      transform: "scale(1.3,1.3)",
    },
  },
  cataBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  scrollWrapper: {
    display: "flex",
    overflowX: "auto",
    scrollBehavior: "smooth",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  imgWrapper: {
    overflow: "hidden",
    height: 200,
  },
}));
