import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { authReducer } from 'components/login/reducer';
import { reducer as formReducer } from 'redux-form';
import { loadingBarReducer } from 'react-redux-loading-bar'
import {overviewReducer} from 'components/Overview/reducer';
import {userReducer} from 'components/User/reducer'
import {rentalReducer} from 'components/Rental/reducer'
import {blogReducer} from 'components/blog/reducer'
export const init = () => {
    const reducer = combineReducers({
        form: formReducer,
        auth: authReducer,
        loadingBar: loadingBarReducer,
        overview: overviewReducer,
        user: userReducer,
        rental: rentalReducer,
        blog: blogReducer
    });
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
    return store;
}
