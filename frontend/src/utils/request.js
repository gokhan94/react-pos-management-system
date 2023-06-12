import axios from 'axios'

const httpRequest = axios.create({
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    },
    baseURL: "https://react-pos-management-system.vercel.app/api",
    withCredentials: true,
})

export default httpRequest