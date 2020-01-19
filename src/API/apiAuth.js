import {get,post,put,remove} from '../Utils/https'

//login
export function doLogin(data) {
    return post("/login",data)
}
//register
export function doRegister(data) {
    return post("/register",data)
}