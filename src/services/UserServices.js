import axios from "axios"

const AppURL = "http://192.168.137.1:4000/users";

export function Login(data) {
    return axios.post(`${AppURL}/login`, data);
}

export function register(data) {
    return axios.post(`${AppURL}/register`, data);
}