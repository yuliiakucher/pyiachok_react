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
            axios.post('http://localhost:8000/register/', {...userData})
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


export const userProfile = ({
    showProfile(){
        return(
            instance.get('profile/edit/')
        )
    },
    editProfile(data){
        return(
            instance.patch('profile/edit/', {...data})
        )
    },
    editPassword(data){
        return(
            instance.post('profile/edit/', {...data})
        )
    }
})

export const PlaceAPI = ({
    createPlace(data){instance.post('place/', {...data})}
})
