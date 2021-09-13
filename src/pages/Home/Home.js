import React, { useState, useEffect } from "react";
import { Box, Container, Grid } from "@material-ui/core";
import useStyles from "./styles";
import { useLocation, useHistory } from "react-router-dom";
import Card from "../../components/Card/Card";
import ImageModal from "../../components/ImageModal/ImageModal";
import { useDispatch, useSelector } from "react-redux";
import { getListOfAllBreads, getImgesByBreadAct } from "../../actions";
import Loader from "../../components/Loader/Loader";
import MySlideShow from "../../components/MySlideShow/MySlideShow";
import NavBar from "../../components/NavBar/NavBar";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Home() {
  const classes = useStyles();
  const queryStr = useQuery();
  const dispatch = useDispatch();
  const history = useHistory();
  const [str, setStr] = React.useState("");
  const { breadImages, breeds } = useSelector((state) => state.data);
  const isLoading = useSelector((state) => state.loadingState.loading);
  const { favImages } = useSelector((state) => state.favorites);
  const [currBreed, setCurrentBreed] = useState("Select breed");
  const [currImgIndex, setCurrentImgIndex] = useState();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => {
    history.push(`/home?breed=${queryStr.get("breed")}&modal=false&index=${queryStr.get("index")}`);
    setOpen(false);
  };

  useEffect(() => {
    if (breeds.length === 0) {
      dispatch(getListOfAllBreads());
    }
  }, []);

  useEffect(() => {
    if (queryStr.get("breed") && queryStr.get("breed") !== currBreed) {
      setCurrentBreed(queryStr.get("breed"));
      dispatch(getImgesByBreadAct(queryStr.get("breed")));
    }
    if (queryStr.get("index") && queryStr.get("modal") === "true") {
      setCurrentImgIndex(Number(queryStr.get("index")));
      handleClickOpen();
    }
    if (queryStr.get("modal") === "false") {
      setOpen(false);
    }
  }, [queryStr]);
  return (
    <Box>
      {/* NavBar component below */}
      <NavBar currBreed={currBreed} str={str} setStr={setStr} />
      {/* MySlide component below */}
      <MySlideShow breeds={breeds} currBreed={currBreed} searchStr={str} />
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
                  <Card imgSrc={image} isLiked={favImages.includes(image)} currBreed={currBreed} onClick={() => history.push(`home?breed=${currBreed}&modal=true&index=${index}`)} />
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
