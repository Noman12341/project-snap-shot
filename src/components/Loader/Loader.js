import React from "react";
import { Box, CircularProgress, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "inherit",
  },
}));
function Loader() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <CircularProgress size={70} />
    </Box>
  );
}
export default Loader;
