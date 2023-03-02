import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { userAPI } from '@apis'
import { useSetRecoilState } from 'recoil'
import { userAtom } from 'states'

const RedirectPage = () => {
  const setUser = useSetRecoilState(userAtom)

  const router = useRouter()

  const accessToken = router.asPath
    .slice(16)
    .split('&')[0]
    .replace('access_token=', '')

  useEffect(() => {
    const loginSocial = async () => {
      const {
        data: { data },
      } = await userAPI.login(accessToken)

      const { id, imgUrl, name, profile, signUp } = data

      setUser({
        id,
        imgUrl,
        name,
        profile,
        hasProfile: !!profile,
        signUp,
      })
    }
    loginSocial()
    router.push('/')
  }, [])

  return <></>
}

export default RedirectPage
