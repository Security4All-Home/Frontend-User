import {
    get
} from '../Utils/https'

export function getAllSensors() {
    return get("/sensors")
}

export function getSensorById(id) {
    return get(`/sensors/${id}`)
}