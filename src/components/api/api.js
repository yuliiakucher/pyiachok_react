import * as axios from 'axios'
import {current_store} from "../../index";
import {setReloginUser} from "../../redux/reauth-reducer"
import { handleShow } from "../../redux/modal-reducer";

const baseUrl = 'http://localhost:8000/'

const token = localStorage.token;
const instance = axios.create({
    baseURL: 'http://localhost:8000/',
    withCredentials: true
})

export const userAuth = ({

    userRegistration(userData) {
        return (
            axios.post(baseUrl + 'register/', {...userData})
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
    },
    passwordReset(email){
        return(
            instance.post(`api/password_reset/`, {...email})
        )
    },
    passwordResetConfirm(email){
        return(
            instance.post(`api/password_reset/confirm/`, {...email})
        )
    }
})


//----------------interceptors-----------------------------

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
                .catch(() => {
                    current_store.dispatch(handleShow(true))
                    current_store.dispatch(setReloginUser(false))
                    localStorage.removeItem('token')
                })
        }
        if (error.response) {
            return new Promise((resolve, reject) => {
                current_store.dispatch(setReloginUser(false))
                reject(error)
                console.log('reject error', error)
            })
        }
    }
)

//--------------------------------------------------------------------

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
    },
    editUserPhoto(data) {
        return (
            instance.put('http://localhost:8000/profile/edit/', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        )
    },
    showFavPlaces(){
        return(
            instance.get('profile/fav_places')
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
    getAllPlaces(page = 1, url_params) {
        return (
            // axios.get(`http://localhost:8000/place/all?page=${page}`)
            instance.get(`place/all?${url_params}`, {
                params: {page}
            })
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
            axios.get(baseUrl + 'place/top/')
        )
    },
    addToFav(place_id) {
        return (
            instance.put(`/place/${place_id}/add-to-fave/`)
        )
    },
    deleteFromFav(place_id) {
        return (
            instance.patch(`profile/del-from-fav/${place_id}/`)
        )
    },
    deleteTagSpecFromPlace(add_inf, place_id, tag_id) {
        return (
            instance.delete(`place/${place_id}/${add_inf}/${tag_id}/delete`)
        )
    },
    addTagToPlace(add_inf, place_id, tag_id) {
        return (
            instance.put(`place/${place_id}/${add_inf}-add/${tag_id}/`)
        )
    },
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
    },
    showOneEvent(event_id) {
        return (
            instance.get(`event/${event_id}/`)
        )
    },
    addNewParticipant(event_id){
        return (
            instance.patch(`event/${event_id}/`)
        )
    }
})

export const ChatAPI = ({
    showMessages(event_id) {
        return (
            instance.get(`event/${event_id}/show-messages/`)
        )
    },
    sendMessage(event_id, data) {
        return (
            instance.post(`/event/${event_id}/add-message/`, {...data})
        )
    },
    showMessageForEdit(msg_id) {
        return (
            instance.get(`chat-messages/${msg_id}/edit`)
        )
    },
    editMessage(msg_id, data) {
        return (
            instance.patch(`chat-messages/${msg_id}/edit`, {...data})
        )
    },
    deleteMessage(msg_id) {
        return (
            instance.delete(`chat-messages/${msg_id}/delete`)
        )
    },

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
    },
    showCommentForEdit(comment_id) {
        return (
            instance.get(`comment/${comment_id}/show-comment/`)
        )
    },
    editComment(comment_id, data){
        return (
            instance.patch(`comment/${comment_id}/edit/`, data)
        )
    },
    deleteComment(comment_id) {
        return(
            instance.delete(`comment/${comment_id}/delete/`)
        )
    }
})


export const NewsAPI = ({
    getNews(type) {
        return(
            axios.get(`${baseUrl}news-top`, {
                params: {type}
            })
        )
    },
    getTypes() {
        return instance.get(`news-type/all`)
    },
    createNews(place_id, data) {
        return(
            instance.post(`place/${place_id}/add-news/`, data)
        )
    },
})

