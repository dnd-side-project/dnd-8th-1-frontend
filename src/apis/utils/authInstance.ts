import axios, { AxiosInstance } from 'axios'

import { interceptors } from './interceptors'

const API_END_POINT = `${process.env.NEXT_PUBLIC_API_END_POINT}`

const createAuthInstance = (url: string, options: object): AxiosInstance => {
  const instance = axios.create({
    baseURL: API_END_POINT,
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 5000,
    ...options,
  })
  interceptors(instance)
  return instance
}

export const authInstance = createAuthInstance(API_END_POINT, {})
