import React from "react";
import { Box, Typography, Link } from "@material-ui/core";
import useStyles from "./styles.js";
import { Link as RouterLink } from "react-router-dom";

function LandingPage() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box>
        <Typography className={classes.mainHeading}>Welcome to Snap Shot</Typography>
        <Link to="/home" className={classes.rootLink} component={RouterLink}>
          Want to visit Home Page
        </Link>
      </Box>
    </Box>
  );
}
export default LandingPage;
