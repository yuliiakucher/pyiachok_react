import * as axios from 'axios'
import {current_store} from "../../index";
import {setReloginUser} from "../../redux/reauth-reducer"

const token = localStorage.token;
const instance = axios.create({
    baseURL: 'http://localhost:8000/',
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
            instance.post('token', {...userData})
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
    if (!!token) {
        request.headers = {
            Authorization: `Bearer ${token}`,
        }
    }
    return request
}, error => {
    console.log('request err', error)
})


instance.interceptors.response.use(
    (response) =>
        new Promise((resolve, reject) => {
            resolve(response)
            console.log('all ok', response)
            !!token && current_store.dispatch(setReloginUser(true))
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
            instance.post('place/create-place/', {...data})
        )
    },
    getTags() {
        return (
            instance.get('place/tags')
        )
    },
    getAllPlaces(page = 1) {
        return (
            // axios.get(`http://localhost:8000/place/all?page=${page}`)
            instance.get(`place/all?page=${page}`)
        )
    },
    getPlaceProfile(placeId) {
        return (
            axios.get(`http://localhost:8000/place/${placeId}/`)
        )
    },
    getPlacesByUser() {
        return (
            instance.get('profile/owned-places')
        )
    },
    getTopPlaces() {
        return (
            instance.get('place/top/')
        )
    }
})

export const EventAPI = ({
    createEvent(place_id, data) {
        return (
            instance.post(`/place/${place_id}/create-event/`, {...data})
        )
    },
    showEventsByPlace(place_id) {
        return (
            instance.get(`place/${place_id}/events`)
        )
    }
})

export const CommentsAPI = ({
    showAllComments(place_id) {
        return (
            instance.get(`place/${place_id}/show-comments/`)
        )
    },
    createComment(place_id, data) {
        return (
            instance.post(`place/${place_id}/add-comment/`, data)
        )
    }
})


