import * as axios from 'axios'


const token = localStorage.token;
const instance = axios.create({
    baseURL: 'http://localhost:8000/',
    headers: {
        Authorization: `Bearer ${token}`
    },
    withCredentials: true
})

export const userAuth = ({

    userRegistration(userData) {
        return (
            axios.post('http://localhost:8000/user/create/', {...userData})
        )
    },
    userLogin(userData) {
        return (
            instance.post('/token', {...userData})
        )
    },
    userRefresh(){
        return(
            instance.post('/token/refresh')
        )
    }
})
