import {get,post,put,remove} from '../Utils/https'

//login
export function doLogin() {
    return post("/login")
}
//register
export function doRegister() {
    return post("/register")
}