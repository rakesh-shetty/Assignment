import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk'

import userReducer from "../reducers/user.reducer";
import reposReducer from "../reducers/repos.reducer";

const configureStore = () => {
    const store = createStore(combineReducers({
        user: userReducer,
        repos: reposReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore