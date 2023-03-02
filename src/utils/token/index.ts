import { Cookies } from 'react-cookie'
import { ACCESS_TOKEN_KEY } from '@constants'

const cookies = new Cookies()
type tokenKeyType = 'ACCESS_TOKEN' | 'REFRESH_TOKEN'

export const setToken = (key: tokenKeyType, token: string) => {
  cookies.set(key, token, {
    path: '/',
    sameSite: 'none',
    secure: true,
  })
}

export const removeAccessToken = () => {
  cookies.remove(ACCESS_TOKEN_KEY, { path: '/' })
}

export const getAccessToken = () => {
  return cookies.get(ACCESS_TOKEN_KEY)
}
