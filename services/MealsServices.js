import axios from "axios"

const AppURL = "http://192.168.137.1:4000/meals";

export function searchMeals(data) {
    return axios.post(`${AppURL}/search`, data);
}

export function getMealImage(mealId) {
    return axios.get(`${AppURL}/${mealId}`);
}