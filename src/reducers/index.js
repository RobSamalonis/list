import { combineReducers } from "redux";
import firebase from "./baseAction.reducer";

const rootReducer = combineReducers({ firebase });

export default rootReducer;
