import axios from 'axios'

const baseApiUrl = 'https://dummyjson.com'

const api = axios.create({
  baseURL: baseApiUrl,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data',
  }
})

export { api, axios }
