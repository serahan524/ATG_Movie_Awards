import { combineReducers } from "redux";

import searchReducer from './searchReducer';
import movieReducer from "./movieReducer";
import userReducer from './userReducer';

export default combineReducers({
    movies: searchReducer,
    movieLists: movieReducer,
    users: userReducer,
});