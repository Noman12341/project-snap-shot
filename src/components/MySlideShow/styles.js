import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
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
}));
