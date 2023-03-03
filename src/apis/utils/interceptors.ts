import { AxiosInstance } from 'axios'
import { ACCESS_TOKEN_KEY } from '@constants'
import { setToken, getAccessToken, removeAccessToken } from '@utils'
import { userAPI } from '@apis'

export const authInterceptors = (instance: AxiosInstance, token?: string) => {
  instance.interceptors.request.use(
    (config) => {
      config.headers = {
        authorization: `Bearer ${token ? token : getAccessToken()}`,
      }
      return config
    },
    (error) => Promise.reject(error.response),
  )

  instance.interceptors.response.use(
    (response) => {
      return response
    },
    async function (error) {
      const originalRequest = error.config

      if (error.response.status === 401 || error.response.status === 403) {
        originalRequest._retry = true
        try {
          const res = await userAPI.reissue()
          const newAccessToken = res.headers.authorization?.replace(
            'Bearer ',
            '',
          )
          setToken(ACCESS_TOKEN_KEY, newAccessToken as string)
          originalRequest.headers.authorization = `Bearer ${newAccessToken}`
        } catch (e) {
          console.error(e)
          removeAccessToken()
          return Promise.reject(error)
        }
        return instance(originalRequest)
      }
      return Promise.reject(error)
    },
  )
  return instance
}

export const loginInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.request.use(
    (config) => {
      return config
    },
    (error) => Promise.reject(error.response),
  )
  // TODO: 인증 에러 핸들링 로직
  instance.interceptors.response.use((response) => {
    const accessToken = response.headers.authorization?.replace('Bearer ', '')
    setToken(ACCESS_TOKEN_KEY, accessToken as string)
    return response
  })

  return instance
}
