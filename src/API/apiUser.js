import {get, put} from  '../Utils/https'

export function getAllUsers() {
    return get("/user")
}

export function getAllUsersSensors(id) {
    return get(`/user/sensors/${id}`)
}

export function editUser(body) {
    return put("/user", body)
}