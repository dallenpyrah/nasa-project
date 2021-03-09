import axios from 'axios'

export const nasaApi = axios.create({
  baseURL: 'https://api.nasa.gov',
  timeout: 3000
})

export const imagesApi = axios.create({
  baseURL: 'https://images-api.nasa.gov',
  timeout: 3000
})
