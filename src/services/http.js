import axios from 'axios'
const isDev = process.env.NODE_ENV === 'development'

let baseURL = ''

if (isDev) {
  baseURL = 'http://localhost:8080'
}

export default axios.create({
  baseURL
})