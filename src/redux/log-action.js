import * as axios from 'axios'
import {loginUserAC} from './login-reducer'

const userLogin = user => {
    return dispatch => {
        return axios.post("http://localhost:8000/token", {...user})
            .then(response => {
                    localStorage.setItem("token", response.data.access)
                    dispatch(loginUserAC(response.data.user))
                    console.log('response data',response.data)
            })
            .catch(err => dispatch(loginUserAC(err.response.status)))
    }
}

export default userLogin
