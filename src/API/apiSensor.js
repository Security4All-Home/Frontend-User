<<<<<<< HEAD
import {
    get
} from '../Utils/https'

export function getAllSensors() {
    return get("/sensors")
}

export function getSensorById(id) {
    return get(`/sensors/${id}`)
=======
import {get, post, put, remove} from 'Utils/https'

export function getAllSensors() {
    return get("/sensor")
}

export function editSensor(body) {
    return put("/sensor", body)
}

export function addSensor(body) {
    return post("/sensor", body)
}

export function removeSensor(body) {
    return remove("/sensor", body)
>>>>>>> 8e1f7a2b282ac329875dd6ba0bb434a002c64213
}