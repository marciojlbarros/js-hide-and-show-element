import axios from 'axios';

const axiosInstance = axios.create({
    baseUrl: 'http://localhost:8000',
    headers:{
        'Content-Type':'application/json'
    }
})

export default axiosInstance;