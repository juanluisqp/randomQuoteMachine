import { FETCH_QUOTE_FAILURE, FETCH_QUOTE_REQUEST, FETCH_QUOTE_SUCCESS } from "../actions/buscadorAction";

export const initialState = {
    loading: false,
    quote: [],
    error: ''
}

const buscador = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_QUOTE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_QUOTE_SUCCESS: 
            return {
                ...state,
                loading: false,
                quote: action.payload,
                error: ''
            }
        case FETCH_QUOTE_FAILURE:
            return {
                ...state,
                loading: false,
                quote: [],
                error: action.payload
            }
        default: return state;
    }
}

export default buscador