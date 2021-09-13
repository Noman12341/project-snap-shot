const initialSate = {
  favImages: [],
  likedBreeds: [],
};

const FavReducer = (state = initialSate, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_INTO_FAV":
      return { ...state, favImages: [...state.favImages, payload.imgSrc], likedBreeds: state.likedBreeds.includes(payload.currBreed) ? [...state.likedBreeds] : [...state.likedBreeds, payload.currBreed] };
    case "REMOVE_FROM_FAV":
      return { ...state, favImages: state.favImages.filter((item) => item !== payload) };
    default:
      return state;
  }
};
export default FavReducer;
