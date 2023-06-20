/*
userActions communicate with backend table name "user" 
It containes user's information 
*/

import axios from 'axios';

import { ADD_USER, GET_USER } from "../constants/userConstants"

export const getUser = () => dispatch => {
    axios.get('http://127.0.0.1:8000/api/user/')
        .then(response => dispatch({
            type: GET_USER,
            payload: response.data
        }))
        .catch(err => console.log(err))
}

export const addUser = (item) => dispatch => {
    axios.post('http://127.0.0.1:8000/api/user/', item)
        .then(response => dispatch({
            type: ADD_USER,
            payload: response.data
        }))
        .catch(err => console.log(err))
}