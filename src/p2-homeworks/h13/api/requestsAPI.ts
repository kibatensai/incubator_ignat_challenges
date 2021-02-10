import axios from 'axios'

const instance = axios.create({ 
    baseURL: 'https://neko-cafe-back.herokuapp.com/'
})

export const requestsAPI = {
    postRequest(successFlag: boolean) {
        return instance.post(`auth/test`, {success: successFlag})
    }
}