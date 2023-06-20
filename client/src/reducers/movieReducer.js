import { GET_MOVIE_FAIL, GET_MOVIE_REQUEST, GET_MOVIE_SUCCESS, ADD_MOVIE, DELETE_MOVIE } from "../constants/movieConstants"

export default function movieReducer(state = { movie: [] }, action) {
    switch (action.type) {
        case GET_MOVIE_REQUEST:
            return { 
                loading: true, 
                success: false, 
                userMovie: []
            }
        case GET_MOVIE_SUCCESS:
            return { 
                loading: false, 
                success: true, 
                userMovie: action.payload
            }
        case GET_MOVIE_FAIL:
            return { 
                loading: false, 
                success: false, 
                error: action.payload
            }
        case ADD_MOVIE:
            return { 
                loading: false, 
                success: true, 
                userMovie: action.payload
            }
        case DELETE_MOVIE:
            return { 
                loading: false, 
                success: true, 
                userMovie: action.payload
            }    

        default:
            return state;
    }
}