import { GET_PENDING_RENTALS_SUCCESS, GET_RENTALS_SUCCESS } from './actions';

const INITIAL_STATE = {
    pendingList : [], 
    List: []
}

export const rentalReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_PENDING_RENTALS_SUCCESS:
            return {...state, pendingList: action.data};
        case GET_RENTALS_SUCCESS:
            return {...state, List: action.data}
        default:
            return state;
    }
}