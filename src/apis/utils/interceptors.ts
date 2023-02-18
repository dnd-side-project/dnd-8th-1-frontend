import { AxiosInstance } from 'axios'

const dummyToken = process.env.NEXT_PUBLIC_DUMMY_ACCESS_TOKEN

export const interceptors = (instance: AxiosInstance) => {
  instance.interceptors.request.use(
    (config) => {
      // TODO: 로컬 스토리지에서 토큰 불러오는 로직

      //   config.headers = {
      //     authorization: token ? `Bearer ${token}` : '',
      //   }

      config.headers = {
        authorization: `Bearer ${dummyToken}`,
      }

      return config
    },
    (error) => Promise.reject(error.response),
  )
  // TODO: 인증 에러 핸들링 로직
  instance.interceptors.response.use(
    (response) => {
      return response
    },
    async function (error) {
      const originalRequest = error.config

      if (error.response.status === 401 || error.response.status === 403) {
        originalRequest._retry = true

        // TODO: 토큰 새로 발급받는 로직
        //  쿠키에 있는 리프레시 토큰을 서버에 post 하여 엑세스 토큰 받아오고
        // 그 엑세스 토큰을 오리지날 리퀘스트에 넣어준다.

        // 우선 임시 토큰 사용하기

        // originalRequest.headers.Authorization = `Bearer ${token}`
        return instance(originalRequest)
      }
      return Promise.reject(error)
    },
  )

  return instance
}
