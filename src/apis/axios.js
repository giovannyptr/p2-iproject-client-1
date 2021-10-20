import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://p2-hacktiv-blog.herokuapp.com/'
})

export default instance