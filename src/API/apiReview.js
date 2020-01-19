import {
    get
} from '../Utils/https'

export function getAllReviews() {
    return get('')
}

export function getAverageScore(id) {
    return get(`/sensors/score/average/${id}`)
}