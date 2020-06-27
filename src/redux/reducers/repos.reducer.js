import { SET_REPOS } from '../actionTypes/repos.actionType'
const initialReposValue = []

const reposReducer = (state = initialReposValue, action) => {
    switch (action.type) {
        case SET_REPOS: return [...action.payload]
        default: return [...state]
    }

}
export default reposReducer