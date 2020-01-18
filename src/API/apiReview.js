import {
    get
} from '../Utils/https'

export function getAllReviews() {
    return get("")
}

export function getReviewById(id) {
    return get(`/reviews/${id}`)
}