import axios from 'axios'

axios.defaults.baseURL = "http://localhost:8080"

export default {
  user: {
    login: credentials => axios.post('/api/auth', { credentials }).then(res => res.data.user),
    register: user => axios.post('/api/users', { user }).then(res => res.data.user),
    confirm: token => axios.post('/api/auth/confirmation', { token } ).then(res => res.data.user),
    resetPasswordRequest: email => axios.post('/api/auth/reset_password_request', { email }),
    validateToken: token => axios.post("/api/auth/validate_token", { token }),
    resetPassword: data => axios.post("/api/auth/reset_password", { data })
  }
}