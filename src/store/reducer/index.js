import { API_SUCCESS } from "../actions/index";

const initialState = {
    data:[]
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case API_SUCCESS: {
            return{
                ...state,
                data:action.payload
            }
        }
        default:
            return state
    }
}