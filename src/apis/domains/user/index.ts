import { authInstance, loginInstance, unAuthInstance } from '@apis'

export const userAPI = {
  // 소셜 (구글) 로그인
  login: (googleToken: string) => {
    return loginInstance.get(`/api/v1/member/oauth/google/login`, {
      headers: {
        'google-token': googleToken,
      },
    })
  },
  // 토큰 재발급
  reissue: () => {
    return unAuthInstance.get(`/api/v1/oauth/jwt/refresh`)
  },
  getMyInfo: () => {
    return authInstance.get(`/api/v1/member/info`)
  },
  logout: () => {
    return authInstance.get(`/api/v1/member/logout`)
  },
  deleteAccount: () => {
    return authInstance.delete(`/api/v1/member`)
  },
}
