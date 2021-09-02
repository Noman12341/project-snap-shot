import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "100vh",
    alignItems: "center",
    justifyContent: "center",
  },
  mainHeading: {
    fontSize: theme.spacing(4),
    fontWeight: 800,
    fontFamily: "Oswald",
    textAlign: "center",
  },
  rootLink: {
    display: "block",
    // width: "100%",
    textAlign: "center",
  },
}));
