import { combineReducers } from "redux";
import data from "./ListReducer";
import loadingState from "./Loader";
import favorites from "./FavirotesReducer";
export default combineReducers({ data, loadingState, favorites });
