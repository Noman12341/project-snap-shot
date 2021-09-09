import { combineReducers } from "redux";
import data from "./ListReducer";
import loadingState from "./Loader";
export default combineReducers({ data, loadingState });
