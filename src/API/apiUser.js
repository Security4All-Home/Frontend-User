import {get, put} from  '../Utils/https'

export function getAllUsers() {
    return get("/user/all")
}

export function editUser(body) {
    return put("/user", body)
}