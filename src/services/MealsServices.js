import axios from "axios"

const AppURL = "http://192.168.137.1:4000/meals";
const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'authorization': '',
}
export function searchMeals(data, token) {
    return axios.post(`${AppURL}/search`, data , {headers : {...headers, 'authorization' : `Bearer ${token}`}}, );
}

export function getMealImage(mealId) {
    return axios.get(`${AppURL}/${mealId}`, {headers : {...headers, 'authorization' : `Bearer ${token}`}});
}