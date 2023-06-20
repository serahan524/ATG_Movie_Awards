/*
movie Actions communicate with table name "movies" which is movie stored based on user's choice
*/


import axios from 'axios';

import { GET_MOVIE_SUCCESS, ADD_MOVIE, DELETE_MOVIE } from "../constants/movieConstants"

export const getListMovies = () => dispatch => {
    axios.get('http://127.0.0.1:8000/api/movies/')
        .then(response => dispatch({
            type: GET_MOVIE_SUCCESS,
            payload: response.data
        }))
        .catch(err => console.log(err))
}

export const addListMovies = (item) => dispatch => {
    axios.post('http://127.0.0.1:8000/api/movies/', item)
        .then(response => dispatch({
            type: ADD_MOVIE,
            payload: response.data
        }))
        .catch(err => console.log(err))
}

export const deleteListMovies = (item) => dispatch => {
    axios.delete(`http://127.0.0.1:8000/api/movies/${item}/`)
        .then(response => dispatch({
            type: DELETE_MOVIE,
            payload: response.data
        }))
        .catch(err => console.log(err))
}
