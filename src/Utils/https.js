import config from '../config/config';
import axios from 'axios';

export function post(uri, data) {
    return axios.post(endpoint(uri), data);
}

export function put(uri, data) {
    return axios.post(endpoint(uri), data);
}

export function remove(uri, data) {
    return axios.post(endpoint(uri), data);
}

export function get(uri) {
    return axios.post(endpoint(uri));
}

export function endpoint(uri) {
    return config.BASE_URL + uri;
}