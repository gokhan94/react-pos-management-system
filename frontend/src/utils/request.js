import axios from 'axios'

/*   headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
}*/

const httpRequest = axios.create({
    "Accept": "application/json",
    "Content-Type": "application/json",
    baseURL: "http://localhost:5000/api",
    withCredentials: true,
})

export default httpRequest