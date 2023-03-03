import { atom } from 'recoil'
import { SIGNOUT_USER_STATE, ACCESS_TOKEN_KEY } from '@constants'
import { getAccessToken } from '@utils'
import { userAPI } from '@apis'

const randomNumber = new Date().getUTCMilliseconds() * Math.random()

const cookieEffect =
  (key: string) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ({ onSet }: any) => {
    onSet(async () => {
      const accessToken = getAccessToken()

      if (!accessToken) {
        return SIGNOUT_USER_STATE
      }

      try {
        const {
          data: { data: id, imgUrl, name, profile },
        } = await userAPI.getMyInfo()

        return {
          id,
          imgUrl,
          name,
          profile,
          hasProfile: !!profile,
        }
      } catch (e: unknown) {
        console.error(e)
        return SIGNOUT_USER_STATE
      }
    })
  }

const userAtom = atom({
  key: 'user' + randomNumber.toString(),
  effects: [cookieEffect(ACCESS_TOKEN_KEY)],
  default: SIGNOUT_USER_STATE,
})

export default userAtom
