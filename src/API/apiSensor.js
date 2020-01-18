import {
    get,
    post,
    put,
    remove
} from '../Utils/https'

export function getAllSensors() {
    return get("/sensors")
}

export function getSensorById(id) {
    return get(`/sensors/${id}`)
}

export function editSensor(body) {
    return put("/sensors", body)
}

export function addSensor(body) {
    return post("/sensors", body)
}

export function removeSensor(body) {
    return remove("/sensors", body)
}