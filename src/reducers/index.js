import { combineReducers } from "redux";
import data from "./ListReducer";
import loading from "./Loader";
export default combineReducers({ data, loading });
