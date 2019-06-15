import axiosService from 'services/axios-service';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { toast } from "react-toastify";

const axiosInstance = axiosService.getInstance();

export const GET_PENDING_BLOGS_SUCCESS = 'GET_PENDING_BLOGS_SUCCESS' 
export const GET_BLOGS_SUCCESS = 'GET_BLOGS_SUCCESS'
export const GET_CONTACT_SUCCESS = 'GET_CONTACT_SUCCESS'
const getPendingBlogsSuccess = (data) => {
    return {
        type:GET_PENDING_BLOGS_SUCCESS,
        data
    }
}
const getContactSuccess = (data) => {
    return {
        type: GET_CONTACT_SUCCESS,
        data
    }
}
export const getContact = () => {
    return dispatch => {
        axiosInstance.get('/admin/getContact')
        .then(res => {
            console.log(res.data)
            dispatch(getBlogsSuccess(res.data))
        })
        .catch(({ response }) => {
            toast.error(response.data.detail);
            dispatch(hideLoading());
        }) 
    }
}
export const getPendingBlogs = () => {
    return dispatch => {
        axiosInstance.get('/admin/getPendingBlogs')
        .then(res => {
            console.log(res.data)
            dispatch(getPendingBlogsSuccess(res.data))
        })
        .catch(({ response }) => {
            toast.error(response.data.detail);
            dispatch(hideLoading());
        })
    }
}

export const approveBlog = (blogId) => {
    return dispatch => {
        axiosInstance.post('/admin/approveBlog', { blogId })
            .then(res => {
                dispatch(getPendingBlogsSuccess(res.data))
            })
            .catch(({ response }) => {
                toast.error(response.data.detail);
                dispatch(hideLoading());
            })
    }
}
export const forbidBlog = (blogId) => {
    return dispatch => {
        axiosInstance.post('/admin/forbidBlog', {blogId})
        .then(res => {
            dispatch(getPendingBlogs(res.data))
        })
        .catch(({ response }) => {
            toast.error(response.data.detail);
            dispatch(hideLoading());
        })
    }
}
const getBlogsSuccess = (data) =>{
    return {
        type: GET_BLOGS_SUCCESS,
        data
    }
}
// export const getBlogs = () => {
//     return dispatch => {
//         axiosInstance.get('/rentals')
//         .then(res => {
//             dispatch(getRentalsSuccess(res.data))
//         })
//         .catch(({response})=>{
//             toast.error(response.data.detail);
//         })
//     }
// }