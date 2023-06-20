import { GET_USER, ADD_USER } from "../constants/userConstants"

export default function userReducer(state = { users: [] }, action) {
    switch (action.type) {
        case GET_USER:
            return { 
                loading: false, 
                success: true, 
                user: action.payload
            }
        case ADD_USER:
            return { 
                loading: false, 
                success: true, 
                user: action.payload
            }

        default:
            return state;
    }
}