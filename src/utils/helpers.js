import axios from 'axios'
import Swal from 'sweetalert2'

const baseURL = 'https://fathomless-retreat-52726.herokuapp.com/api'

/**
 * https://github.com/axios/axios#interceptors
 * axios 提供 interceptors 方法 在req, res被處理前可以做一些前置處理
 */
const instance = axios.create({
  baseURL
})

instance.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  config.headers['Authorization'] = `Bearer ${token}`
  return config
}, err => Promise.reject(err))

export const apiHelper = instance

export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  timer: 3000,
  showConfirmButton: false
})