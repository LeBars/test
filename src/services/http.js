import axios from 'axios'
const isDev = process.env.NODE_ENV === 'development'

let baseURL = ''

if (isDev) {
  baseURL = 'http://localhost:8081'
}

export default axios.create({
  baseURL
})