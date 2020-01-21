import {
    get,
    put
} from '../Utils/https'

export function getAllUsers() {
    return get("/user")
}

export function getUser(id) {
    return get(`/user/${id}`)
}

export function editUser(body) {
    return put("/user", body)
}