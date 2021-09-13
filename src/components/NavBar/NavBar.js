import React from "react";
import useStyles from "./styles";
import { Box, Typography, Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

function NavBar({ currBreed, str, setStr }) {
  const classes = useStyles();
  return (
    <Box className={classes.rootTopBox}>
      <Box>
        <Typography className={classes.mainHeading} component="h1">
          {currBreed}
        </Typography>
      </Box>
      <Box>
        <input
          className={classes.searchInput}
          placeholder="Search..."
          type="text"
          value={str}
          onChange={(e) => {
            setStr(e.target.value.toLowerCase());
          }}
        />
      </Box>
      <Box>
        <Link to="/favorites" component={RouterLink}>
          Favorites
        </Link>
      </Box>
    </Box>
  );
}
export default NavBar;
