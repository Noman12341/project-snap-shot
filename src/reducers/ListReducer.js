const initialState = {
  breeds: [],
  breadImages: [],
};

const breadsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LIST_BREADS":
      return { ...state, breeds: payload };
    case "GET_BREAD_IMAGES":
      return { ...state, breadImages: payload };
    default:
      return state;
  }
};
export default breadsReducer;
