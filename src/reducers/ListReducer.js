const initialState = {
  breads: [],
  filteredBreeds: [],
  breadImages: [],
};

const breadsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LIST_BREADS":
      return { ...state, breads: payload, filteredBreeds: payload };
    case "GET_BREAD_IMAGES":
      return { ...state, breadImages: payload };
    case "FILTER_BREEDS":
      return { ...state, filteredBreeds: state.breads.filter((item) => item.includes(payload)) };
    default:
      return state;
  }
};
export default breadsReducer;
