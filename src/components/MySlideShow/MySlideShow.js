import React, { useRef } from "react";
import { Box, IconButton, Typography } from "@material-ui/core";
import useStyles from "./styles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useHistory } from "react-router-dom";

function MySlideShow({ currBreed, breeds, searchStr }) {
  const classes = useStyles();
  const history = useHistory();
  const sliderRef = useRef(null);
  const handlePrev = () => {
    const slide = sliderRef.current;
    slide.scrollLeft -= slide.offsetWidth;
    if (slide.scrollLeft <= 0) {
      slide.scrollLeft = slide.scrollWidth;
    }
  };
  const handleForward = () => {
    const slide = sliderRef.current;
    slide.scrollLeft += slide.offsetWidth;
    if (slide.scrollLeft >= slide.scrollWidth - slide.offsetWidth) {
      slide.scrollLeft = 0;
    }
  };
  return (
    <Box className={classes.cataBox} p={2} mb={4}>
      <Box>
        <IconButton onClick={handlePrev}>
          <ChevronLeftIcon />
        </IconButton>
      </Box>
      <Box ref={sliderRef} className={classes.scrollWrapper}>
        {breeds.length > 0 ? (
          breeds
            .filter((item) => item.includes(searchStr))
            .map((breed, index) => (
              <button
                key={index}
                onClick={() => {
                  history.push(`/home?breed=${breed}&modal=false`);
                }}
                className={breed === currBreed ? classes.activeChipBtn : classes.chipBtn}
              >
                {breed}
              </button>
            ))
        ) : (
          <Typography component="h4">No Breed found</Typography>
        )}
      </Box>
      <Box>
        <IconButton onClick={handleForward}>
          <ChevronRightIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
export default MySlideShow;
