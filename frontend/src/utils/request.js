import axios from 'axios'

/*   headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
}*/

const httpRequest = axios.create({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Accept": "application/json",
    "Content-Type": "application/json",
    baseURL: "https://react-pos-management-system.vercel.app/api",
    withCredentials: true,
})

export default httpRequest