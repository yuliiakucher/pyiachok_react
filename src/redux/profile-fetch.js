import * as axios from 'axios'
import {loginUserAC} from './login-reducer'

const getProfileFetch = user => {
    return dispatch => {
        const token = localStorage.token;
        const config = {
            headers: { Authorization: `Bearer ${token}` },
            withCredentials: true
        };
        if (token){
            return axios.post("http://localhost:8000/token/refresh", {...user},  config)
                .then(response => {
                    // dispatch(loginUserAC(response.data.user))
                    console.log(response.data)
                })
                .catch(err => console.log(err))
        }

    }
}

export default getProfileFetch
