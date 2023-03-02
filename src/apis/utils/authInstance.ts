import axios, { AxiosInstance } from 'axios'

import { authInterceptors } from './interceptors'

const API_END_POINT = `${process.env.NEXT_PUBLIC_API_END_POINT}`

const createAuthInstance = (url: string, options: object): AxiosInstance => {
  const instance = axios.create({
    baseURL: API_END_POINT,
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
    timeout: 5000,
    ...options,
  })
  authInterceptors(instance)
  return instance
}

export const authInstance = createAuthInstance(API_END_POINT, {})
