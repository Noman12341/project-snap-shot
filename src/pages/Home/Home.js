import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Container, Grid, IconButton } from "@material-ui/core";
import useStyles from "./styles";
import { useLocation, useHistory } from "react-router-dom";
import ImageModal from "../../components/ImageModal/ImageModal";
import { useDispatch, useSelector } from "react-redux";
import { getListOfAllBreads, getImgesByBreadAct } from "../../actions";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Loader from "../../components/Loader/Loader";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Home() {
  const classes = useStyles();
  const queryStr = useQuery();
  const dispatch = useDispatch();
  const history = useHistory();
  const [searchVal, setSearchVal] = useState("");
  const { breads, breadImages, filteredBreeds } = useSelector((state) => state.data);
  const isLoading = useSelector((state) => state.loading.loading);

  const [currBreed, setCurrentBreed] = useState("Select breed");
  const [currImgIndex, setCurrentImgIndex] = useState();
  const [open, setOpen] = useState();

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => {
    history.push(`/home?modal=false&breed=${queryStr.get("breed")}&index=${queryStr.get("index")}`);
    setOpen(false);
  };

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
  useEffect(() => {
    dispatch(getListOfAllBreads());
  }, []);

  useEffect(() => {
    if (queryStr.get("breed") !== currBreed) {
      setCurrentBreed(queryStr.get("breed"));
      setSearchVal(queryStr.get("breed"));
      dispatch(getImgesByBreadAct(queryStr.get("breed")));
    }
    if (queryStr.get("index") && queryStr.get("modal") === "true") {
      setCurrentImgIndex(Number(queryStr.get("index")));
      handleClickOpen();
    }
    if (queryStr.get("modal") === "false") {
      setOpen(false);
    }
  }, [queryStr.get("breed"), queryStr.get("modal")]);

  return (
    <Box>
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
            value={searchVal}
            onChange={(e) => {
              setSearchVal(e.target.value);
              dispatch({ type: "FILTER_BREEDS", payload: e.target.value });
            }}
          />
        </Box>
      </Box>
      <Box className={classes.cataBox} p={2} mb={4}>
        <Box>
          <IconButton onClick={handlePrev}>
            <ChevronLeftIcon />
          </IconButton>
        </Box>
        <Box ref={sliderRef} className={classes.scrollWrapper}>
          {filteredBreeds.length > 0 &&
            filteredBreeds.map((bread, index) => (
              <button
                key={index}
                onClick={() => {
                  history.push(`/home?modal=false&breed=${bread}&index`);
                }}
                className={bread === currBreed ? classes.activeChipBtn : classes.chipBtn}
              >
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
      {isLoading ? (
        <div style={{ height: 400 }}>
          <Loader />
        </div>
      ) : (
        breadImages.length > 0 && (
          <Container>
            <Grid container spacing={2}>
              {breadImages.map((image, index) => (
                <Grid key={index} item xs={6} sm={6} md={4} lg={3}>
                  <Box className={classes.imgWrapper}>
                    <img
                      onClick={() => {
                        history.push(`/home?modal=true&breed=${currBreed}&index=${index}`);
                      }}
                      className={classes.rootImage}
                      src={image}
                      alt=""
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        )
      )}
      <ImageModal open={open} handleClose={handleClose} imgSrc={breadImages[currImgIndex]} />
    </Box>
  );
}
export default Home;
