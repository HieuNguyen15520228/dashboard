import axiosService from 'services/axios-service';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { toast } from "react-toastify";

const axiosInstance = axiosService.getInstance();

export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
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