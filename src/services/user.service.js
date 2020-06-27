import axios from '../config/axios'



const getUser = () => {

    return axios.get('/supreetsingh247')
        .then(user => {
            return Promise.resolve(user.data)
        })
        .catch(err => {
            return Promise.reject(err)
        })
}



const userService = {
    getUser
}

export default userService