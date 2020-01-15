import {get, post, put, remove} from 'Utils/https'

export function getAllUsers() {
    return get("/user")
}

export function editUser(body) {
    return put("/user", body)
}

export function addUser(body) {
    return post("/user", body)
}

export function removeUser(body) {
    return remove("/user", body)
}