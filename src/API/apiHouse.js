import {get} from '../Utils/https'

export function getHouseById(id) {
    return get(`/house/${id}`)
}