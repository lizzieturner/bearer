import axios from 'axios'

export default function() {
  const headers = {
    'Accept': 'application/json',
    'User-Agent': 'Bearer'
  }

  return axios.create({
    baseURL: 'http://nflarrest.com/api/v1/',
    timeout: 5000,
    headers
  })
}
