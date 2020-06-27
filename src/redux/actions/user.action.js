
import { SET_USER } from '../actionTypes/user.actionType'
import userService from '../../services/user.service'

const setUser = (user) => { return { type: SET_USER, payload: user } }


export function startGetUser() {
    return (dispatch) => {
        userService.getUser()
            .then(user => {
                dispatch(setUser(user))
            }).catch(err => {
                alert(err)
            })
    }
}

