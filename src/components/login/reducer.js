import { LOGIN_SUCCESS, LOGOUT } from './actions';

const INITIAL_STATE = {
    isAuth: false,
    username: ''
}

export const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return Object.assign({}, state, { isAuth: true, username: action.username });
        case LOGOUT:
            return Object.assign({}, state, { isAuth: false, username: '' });
        default:
            return state;
    }
}