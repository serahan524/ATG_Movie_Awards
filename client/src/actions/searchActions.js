/* 
searchActions communicates with externel API OMDBapi 
As requested, the search result only takes movie type with text value user input 
*/

import axios from 'axios';
import { SEARCH_MOVIE, FETCH_MOVIES } from "../constants/externalAPIConstants";

import { APIKey } from '../APIKey';


export const searchMovie = text => dispatch => {
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    });
};

export const fetchMovies = text => dispatch => {
    axios.get(`http://www.omdbapi.com/?apikey=${APIKey}&s=${text}&type=movie`)
        .then(response => dispatch({
            type: FETCH_MOVIES,
            payload: response.data.Search
        }))
        .catch(err => console.log(err))
}