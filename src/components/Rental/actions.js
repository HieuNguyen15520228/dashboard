import axiosService from 'services/axios-service';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { toast } from "react-toastify";

const axiosInstance = axiosService.getInstance();

export const GET_RENTALS_SUCCESS = 'GET_RENTALS_SUCCESS';
export const GET_PENDING_RENTALS_SUCCESS = 'GET_PENDING_RENTALS_SUCCESS';
const getPendingRentalsSuccess = (data) => {
    return {
        type: GET_PENDING_RENTALS_SUCCESS,
        data
    }
}
export const getPendingRentals = () => {
    return dispatch => {
        axiosInstance.get('/admin/getPendingRentals')
            .then(res => {
                dispatch(getPendingRentalsSuccess(res.data))
            })
            .catch(({ response }) => {
                toast.error(response.data.detail);
                dispatch(hideLoading());
            })
    }
}

export const approveRental = (rentalId) => {
    return dispatch => {
        axiosInstance.post('/admin/approveRental', { rentalId })
            .then(res => {
                dispatch(getPendingRentalsSuccess(res.data))
            })
            .catch(({ response }) => {
                toast.error(response.data.detail);
                dispatch(hideLoading());
            })
    }
}
export const forbidRental = (rentalId) => {
    return dispatch => {
        axiosInstance.post('/admin/forbidRental', {rentalId})
        .then(res => {
            dispatch(getPendingRentals(res.data))
        })
        .catch(({ response }) => {
            toast.error(response.data.detail);
            dispatch(hideLoading());
        })
    }
}
const getRentalsSuccess = (data) =>{
    return {
        type: GET_RENTALS_SUCCESS,
        data
    }
}
export const getRentals = () => {
    return dispatch => {
        axiosInstance.get('/rentals')
        .then(res => {
            dispatch(getRentalsSuccess(res.data))
        })
        .catch(({response})=>{
            toast.error(response.data.detail);
        })
    }
}