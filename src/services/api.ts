import axios from 'axios'

const api = axios.create({
    //baseURL: 'http://localhost:3333',
    baseURL: 'https://appgil.herokuapp.com',
    headers: {
        'content-Type': 'application/json'
    }
});

export default api;