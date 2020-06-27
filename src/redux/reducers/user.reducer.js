import { SET_USER } from '../actionTypes/user.actionType'
const initialUserValue = {}

const userReducer = (state = initialUserValue, action) => {
    switch (action.type) {
        case SET_USER: return { ...action.payload }
        default: return { ...state }
    }

}
export default userReducer