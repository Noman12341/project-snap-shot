import React from "react";
import { Paper, CircularProgress, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    heigth: "100%",
    width: "100%",
  },
}));
function Loader() {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <CircularProgress size={30} />
    </Paper>
  );
}
export default Loader;
