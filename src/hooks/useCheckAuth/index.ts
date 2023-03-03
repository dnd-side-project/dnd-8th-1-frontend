import { useState, useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { userAtom } from 'states'
import { useRouter } from 'next/router'

const useCheckAuth = () => {
  const [isChecking, setIsChecking] = useState(true)
  const router = useRouter()
  const { id } = useRecoilValue(userAtom)

  useEffect(() => {
    if (!id) {
      // TODO: 전역 모달 구현 시, 그 컴포넌트 사용하기
      alert('로그인이 필요한 서비스 입니다.')
      router.push('/signin')
    } else {
      setIsChecking(false)
    }
  }, [])

  return [isChecking]
}

export default useCheckAuth
