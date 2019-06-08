import axiosService from 'services/axios-service';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { toast } from "react-toastify";

const axiosInstance = axiosService.getInstance();

export const GET_NUMBERS_SUCCESS = 'GET_NUMBERS_SUCCESS'
const getNumbersSuccess = (data) => {
    return {
        type: GET_NUMBERS_SUCCESS,
        data

    }
}
export const getNumbers = () => {
    return dispatch => {
        axiosInstance.get('/admin/getNumbers')
            .then(res => dispatch(getNumbersSuccess(res.data)))
            .catch(({ response }) => {
                toast.error(response.data.detail);
                dispatch(hideLoading());
            })
    }
}