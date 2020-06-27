
import { SET_REPOS } from '../actionTypes/repos.actionType'
import repoService from '../../services/repos.service'

const setRepos = (repos) => { return { type: SET_REPOS, payload: repos } }


export function startGetRepos() {
    return (dispatch) => {
        repoService.getRepos()
            .then(repos => {
                dispatch(setRepos(repos))
            }).catch(err => {
                alert(err)
            })
    }
}

