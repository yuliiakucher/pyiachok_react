import * as axios from 'axios'
import {loginUserAC} from './login-reducer'

const userLogin = user => {
    return dispatch => {
        return axios.post("http://localhost:8000/token", {...user})
            .then(response => {
                    localStorage.setItem("token", response.data.access)
                    dispatch(loginUserAC(response.data.user))
                    console.log(response.data)
            })
            .catch(err => console.log(err))
    }
}

export default userLogin