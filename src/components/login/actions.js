import axiosService from 'services/axios-service';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { toast } from "react-toastify";
import authService from 'services/auth-service';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGOUT = 'LOGOUT'
const axiosInstance = axiosService.getInstance();
const loginSuccess = () => {
    const username = authService.getUsername();
    return {
        type: LOGIN_SUCCESS,
        username
    }
}
export const checkAuthState = () => {
    return dispatch => {
        if (authService.isAuthenticated()) {
            dispatch(loginSuccess());
        }
    }
}
export const logout = () => {
    authService.invalidateUser();
    return {
        type: LOGOUT
    }
}
export const Login = (userData) => {
    return dispatch => {
        dispatch(showLoading());
        return axiosInstance.post('/admin/login', userData)
            .then(res => {
                authService.saveToken(res.data);
                dispatch(loginSuccess());
                dispatch(hideLoading());
            })
            .catch(({ response }) => {
                toast.error(response.data.detail);
                dispatch(hideLoading());
            })
    }
}