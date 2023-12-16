import axios from "axios";
import { BASE_URL } from "./APIConstants";

export async function login(credentials){
    const response=await axios.post(`${BASE_URL}/admin/login`,credentials);
    return response.data;
}

export async function register(customerData){  //give regi info to login user
    try {
        const response=await axios.post(`${BASE_URL}/admin`,customerData);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}