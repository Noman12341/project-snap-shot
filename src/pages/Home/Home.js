import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Container, Grid, IconButton } from "@material-ui/core";
import useStyles from "./styles";
import { useLocation } from "react-router-dom";
import ImageModal from "../../components/ImageModal/ImageModal";
import { useDispatch, useSelector } from "react-redux";
import { getListOfAllBreads, getImgesByBreadAct } from "../../actions";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Home() {
  const classes = useStyles();
  const queryStr = useQuery();
  const dispatch = useDispatch();
  const [searchVal, setSearchVal] = useState("");
  const { breads, breadImages } = useSelector((state) => state.data);
  const [currImgIndex, setCurrentImgIndex] = useState(Number(queryStr.get("index")) ?? null);
  const [open, setOpen] = useState(Boolean(queryStr.get("modal")) ?? false);

  if (!!queryStr.get("bread")) {
    dispatch(getImgesByBreadAct(queryStr.get("bread")));
  }
  const sliderRef = useRef(null);
  // handle Prev
  const handlePrev = () => {
    const slide = sliderRef.current;
    slide.scrollLeft -= slide.offsetWidth;
    if (slide.scrollLeft <= 0) {
      slide.scrollLeft = slide.scrollWidth;
    }
  };
  // handle Forward
  const handleForward = () => {
    const slide = sliderRef.current;
    slide.scrollLeft += slide.offsetWidth;
    if (slide.scrollLeft >= slide.scrollWidth - slide.offsetWidth) {
      slide.scrollLeft = 0;
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    dispatch(getListOfAllBreads());
  }, []);

  return (
    <Box>
      <Box className={classes.rootTopBox}>
        <Box>
          <Typography className={classes.mainHeading} component="h1">
            Person
          </Typography>
        </Box>
        <Box>
          <input className={classes.searchInput} placeholder="Search..." type="text" value={searchVal} onChange={(e) => setSearchVal(e.target.value)} />
        </Box>
      </Box>
      <Box className={classes.cataBox} p={2} mb={4}>
        <Box>
          <IconButton onClick={handlePrev}>
            <ChevronLeftIcon />
          </IconButton>
        </Box>
        <Box ref={sliderRef} className={classes.scrollWrapper}>
          {breads.length > 0 &&
            breads
              .filter((item) => item.includes(searchVal))
              .map((bread, index) => (
                <button key={index} onClick={() => dispatch(getImgesByBreadAct(bread))} className={classes.chipBtn}>
                  {bread}
                </button>
              ))}
        </Box>
        <Box>
          <IconButton onClick={handleForward}>
            <ChevronRightIcon />
          </IconButton>
        </Box>
      </Box>
      {breadImages.length > 0 && (
        <Container>
          <Grid container spacing={2}>
            {breadImages.map((image, index) => (
              <Grid key={index} item sm={6} md={4} lg={3}>
                <img
                  onClick={() => {
                    setCurrentImgIndex(index);
                    handleClickOpen();
                  }}
                  className={classes.rootImage}
                  src={image}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
      <ImageModal open={open} handleClose={handleClose} imgIndex={currImgIndex} />
    </Box>
  );
}
export default Home;
