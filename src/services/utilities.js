import axios from 'axios'
import { persistor } from 'services/helpers'

export const axiosInstance = axios.create({
  headers: {}
})

// LOGOUT FUNCTIONALITY
export const logout = () => {
  sessionStorage.clear()
  persistor.purge()
  window.location.assign('/admin/login')
}
