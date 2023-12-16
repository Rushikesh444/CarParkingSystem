import axios from "axios";
import { getToken } from "../utils/TokenUtil";

export async function fetchCustomer() {
    try {
        const response = await axios.get("http://127.0.0.1:5940/customer",{headers:{'Authorization':`Bearer ${getToken()}`}});
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function saveCustomer(customerData) {
    try {
        const response = await axios.post("http://127.0.0.1:5940/customer", customerData,{headers:{'Authorization':`Bearer ${getToken()}`}});
         console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}



export async function deleteCustomer(slot) {
    try {
       const response = await axios.delete(`http://127.0.0.1:5940/customer/${slot}`,{headers:{'Authorization':`Bearer ${getToken()}`}});
       return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function fetchCustomerBySlot(slot){
    try {
        const response = await axios.get(`http://127.0.0.1:5940/customer/${slot}`,{headers:{'Authorization':`Bearer ${getToken()}`}});
        return response.data;
     } catch (error) {
         console.log(error);
     }
}

export async function updateCustomer(updatedData,slot){
    try {
        const response = await axios.put(`http://127.0.0.1:5940/customer/${slot}`,updatedData,{headers:{'Authorization':`Bearer ${getToken()}`}});
        return response.data;
     } catch (error) {
         console.log(error);
     }
}


//contact :
export async function ContactCustomer(contactData) {
    try {
        const response = await axios.post("http://127.0.0.1:5940/contact", contactData,{headers:{'Authorization':`Bearer ${getToken()}`}});
        return response.data;
    } catch (error) {
        console.log(error); 
    }
}