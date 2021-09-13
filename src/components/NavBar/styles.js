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
    fontSize: theme.spacing(4),
    fontWeight: 600,
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
}));
