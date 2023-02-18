import axios, { AxiosInstance } from 'axios'

const API_END_POINT = `${process.env.NEXT_PUBLIC_API_END_POINT}`

const createUnAuthInstance = (url: string, options: object): AxiosInstance => {
  const instance = axios.create({
    baseURL: API_END_POINT,
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  })

  return instance
}

export const unAuthInstance = createUnAuthInstance(API_END_POINT, {})
