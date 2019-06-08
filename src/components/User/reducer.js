import { GET_USERS_SUCCESS } from './actions';

const INITIAL_STATE = {
    userList : []
}

export const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_USERS_SUCCESS:
            return {...state, userList: action.data};
        default:
            return state;
    }
}