import httpRequest from '../../utils/request'
//const API_URL = '/api/auth/register'

const register = async (user) => {
    const response = await httpRequest.post("/auth/register", user)
    return response.data
}

const login = async (user) => {
    const response = await httpRequest.post("/auth/login", user)
    return response.data
}

const logout = async () => {
    const response = await httpRequest.post("/auth/logout")
    return response.data
}

const allUsers = async () => {
    const response = await httpRequest.get("/auth/users")
    return response.data
}

const authService = {
    register,
    login,
    logout,
    allUsers
}
export default authService