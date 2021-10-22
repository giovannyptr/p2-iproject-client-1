import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://beauty-hacks.herokuapp.com/'
})

export default instance