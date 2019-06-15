import { GET_PENDING_BLOGS_SUCCESS, GET_BLOGS_SUCCESS,GET_CONTACT_SUCCESS} from './actions';

const INITIAL_STATE = {
    pendingList : [], 
    List: [],
    contactList: []
}

export const blogReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_PENDING_BLOGS_SUCCESS:
            return {...state, pendingList: action.data};
        case GET_BLOGS_SUCCESS:
            return {...state, List: action.data}
        case GET_CONTACT_SUCCESS:
            return {...state, contactList: action.data}
        default:
            return state;
    }
}