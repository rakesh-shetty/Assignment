import axios from '../config/axios'



const getRepos = () => {

    return axios.get('/supreetsingh247/repos')
        .then(repos => {
            return Promise.resolve(repos.data)
        })
        .catch(err => {
            return Promise.reject(err)
        })
}



const repoService = {
    getRepos
}

export default repoService