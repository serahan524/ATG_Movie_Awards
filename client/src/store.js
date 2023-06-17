import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { movieListReducer } from './reducers/movieReducer';
import rootReducer from './reducers';
//import { searchReducer } from './reducers/searchReducer';

/* const reducerSearch = combineReducers({
    movies: searchReducer
}); */

const reducer = combineReducers ({
    movieList: movieListReducer    
});

const middleware = [thunk];

const initialState = {};

const store = createStore(
    reducer,
    //reducerSearch,
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;