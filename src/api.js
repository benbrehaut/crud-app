import axios from 'axios'

axios.defaults.baseURL = "http://localhost:8080"

export default {
  user: {
    login: (credentials) => axios.post('/api/auth', { credentials }).then(res => res.data.user)
  }
}