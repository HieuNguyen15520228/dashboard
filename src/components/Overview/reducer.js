import { GET_NUMBERS_SUCCESS } from './actions';

const INITIAL_STATE = {
    numbers : {}
}

export const overviewReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_NUMBERS_SUCCESS:
            return {...state, numbers: action.data};
        default:
            return state;
    }
}