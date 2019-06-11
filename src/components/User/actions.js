import axiosService from 'services/axios-service';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { toast } from "react-toastify";

const axiosInstance = axiosService.getInstance();

export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS'
const getUsersSuccess = (data) => {
    return {
        type: GET_USERS_SUCCESS,
        data
    }
}
export const getUsers = () => {
    return dispatch => {
        axiosInstance.get('/admin/getUsers')
            .then(res => {
                dispatch(getUsersSuccess(res.data))})
            .catch(({ response }) => {
                toast.error(response.data.detail);
                dispatch(hideLoading());
            })
    }
}
const updateUser = (data) => {
    return {
        type: UPDATE_USER_SUCCESS,
        data
    }
}
export const activate = (userId) => {
    return dispatch => {
        axiosInstance.post('/admin/activate', {userId})
        .then(res => {
            dispatch(updateUser(res.data))
        })
        .catch(({ response }) => {
            toast.error(response.data.detail);
            dispatch(hideLoading());
        })
    }
}
export const deactivate = (userId) => {
    return dispatch => {
        axiosInstance.post('/admin/deactivate', {userId})
        .then(res => {
            dispatch(updateUser(res.data))
        })
        .catch(({ response }) => {
            toast.error(response.data.detail);
            dispatch(hideLoading());
        })
    }
}