//import axios from 'axios'
import httpRequest from '../../utils/request'
import {deleteLocalStorageUser} from '../../utils/localStorage'
//const API_URL = '/api/auth/register'

const register = async (user) => {
    const response = await httpRequest.post("/auth/register", user)
    return response.data
}

const login = async (user) => {
    const response = await httpRequest.post("/auth/login", user)
    return response.data
}

const logout = () => {
   deleteLocalStorageUser()
}


const authService = {
    register,
    login,
    logout
}
export default authService