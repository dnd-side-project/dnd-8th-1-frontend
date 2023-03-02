import axios, { AxiosInstance } from 'axios'
import { loginInterceptors } from './interceptors'

const API_END_POINT = `${process.env.NEXT_PUBLIC_API_END_POINT}`

const createLoginInstance = (url: string, options: object): AxiosInstance => {
  const instance = axios.create({
    baseURL: API_END_POINT,
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 5000,
    withCredentials: true,
    ...options,
  })

  loginInterceptors(instance)
  return instance
}

export const loginInstance = createLoginInstance(API_END_POINT, {})
