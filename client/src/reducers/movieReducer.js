import { GET_MOVIE_FAIL, GET_MOVIE_REQUEST, GET_MOVIE_SUCCESS } from "../constants/movieConstants"

export const movieListReducer = (state = { project: [] }, action) => {
    switch (action.type) {
        case GET_MOVIE_REQUEST:
            return { loading: true, success: false, movie: []}
        case GET_MOVIE_SUCCESS:
            return { loading: false, success: true, movie: action.payload}
        case GET_MOVIE_FAIL:
            return { loading: false, success: false, error: action.payload}

        default:
            return state;
    }
}