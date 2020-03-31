import axios from 'axios'

const api = axios.create(
    {
        baseURL : 'https://gdoor.com.br'
    }
)


export default api