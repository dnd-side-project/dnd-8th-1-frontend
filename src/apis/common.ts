import axios, { AxiosHeaders, AxiosRequestConfig } from 'axios'

const baseURL = `${process.env.NEXT_PUBLIC_API_END_POINT}`

const authRequest = axios.create({ baseURL })
const unAuthRequest = axios.create({ baseURL })

// TODO: 새로 구현
authRequest.interceptors.request.use((config: AxiosRequestConfig) => {
  config.headers = { ...config.headers } as AxiosHeaders
  // TODO: 로컬 스토리지에서 토큰 가져오는 로직
  config.headers.set(
    'Authorization',
    `Bearer ${[process.env.NEXT_PUBLIC_DUMMY_ACCESS_TOKEN]}`,
  )

  return config
})

authRequest.interceptors.response.use(
  (response) => {
    return response
  },
  async function (error) {
    // TODO: 확인하기
    const originalRequest = error.config
    // console.log(error)

    // if (error.response.status === 401 || error.response.status === 403) {
    //   originalRequest._retry = true

    //   // TODO: 토큰 새로 발급받는 로직
    //   //  쿠키에 있는 리프레시 토큰을 서버에 post 하여 엑세스 토큰 받아오고
    //   // 그 엑세스 토큰을 오리지날 리퀘스트에 넣어준다.

    //   // 우선 임시 토큰 사용하기

    //   // originalRequest.headers.Authorization = `Bearer ${token}`

    //   return authRequest(originalRequest)
    // }
    // return Promise.reject(error)
  },
)

export { authRequest, unAuthRequest }
