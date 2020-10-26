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
    refreshToken(refresh) {
        return (
            instance.post('token/refresh', {refresh})
        )
    }

})

instance.interceptors.request.use(request => {
    const token = localStorage.token;
    request.headers = {Authorization: `Bearer ${token}`}
    return request
}, error => {
    // console.log('request err', error)
})

instance.interceptors.response.use(
    (response) =>
        new Promise((resolve, reject) => {
            resolve(response)
            console.log('response resolve', response)
        }),
    (error) => {
        if (!error.response) {
            return new Promise((resolve, reject) => {
                reject(error)
            })
        }

        if (error.response.status === 401 && localStorage.token) {
            console.log('error for token ')
            userAuth.refreshToken(localStorage.refresh_token)
                .then(response => {
                    console.log('refresh token')
                    localStorage.setItem("token", response.data.access)
                })
        }

        if (error.response) {
            return new Promise((resolve, reject) => {
                reject(error)
                console.log('reject error', error)
            })
        }
    }
)


export const userProfile = ({
    showProfile() {
        return (
            instance.get('profile/edit/')
        )
    },
    editProfile(data) {
        return (
            instance.patch('profile/edit/', {...data})
        )
    },
    editPassword(data) {
        return (
            instance.post('profile/edit/', {...data})
        )
    }
})

export const PlaceAPI = ({
    createPlace(data) {
        return (
            instance.post('place/', {...data})
        )
    },
    getTags(){
        return(
         instance.get('place/tags')
        )
    },
    getAllPlaces(){
        return(
            instance.get('place/all')
        )
    },
})


