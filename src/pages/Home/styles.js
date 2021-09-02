import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  rootTopBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(2),
  },
  mainHeading: {
    fontSize: theme.spacing(5),
    fontWeight: 700,
  },
  searchInput: {
    fontSize: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
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
    margin: theme.spacing(0, 1),
    "&:hover": {
      boxShadow: theme.shadows[7],
    },
  },
  rootImage: {
    width: "100%",
    cursor: "pointer",
    height: 200,
  },
  cataBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  scrollWrapper: {
    display: "flex",
    maxWidth: 1151,
    overflowX: "auto",
    scrollBehavior: "smooth",
    paddingBottom: theme.spacing(1.5),
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
}));
