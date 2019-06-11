import { GET_USERS_SUCCESS, UPDATE_USER_SUCCESS } from './actions';

const INITIAL_STATE = {
    userList: []
}

export const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_USERS_SUCCESS:
            return { ...state, userList: action.data };
        case UPDATE_USER_SUCCESS:
            let newUserList = state.userList.map(function (a) {
                return a._id === action.data._id ? action.data : a;
            });
            return {...state, userList: newUserList}
        default:
            return state;
    }
}