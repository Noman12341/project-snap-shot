import * as api from "../api";

export const getListOfAllBreads = () => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });
    const {
      data: { message },
    } = await api.getBreadsList();
    dispatch({ type: "LIST_BREADS", payload: Object.keys(message) });
    dispatch({ type: "STOP_LOADING" });
  } catch (error) {
    throw error;
  }
};

export const getImgesByBreadAct = (bread) => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });
    const {
      data: { message },
    } = await api.getImagesByBread(bread);
    dispatch({ type: "GET_BREAD_IMAGES", payload: message });
    dispatch({ type: "STOP_LOADING" });
  } catch (error) {
    throw error;
  }
};
