import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import pageLoadingAnimation from './pageLoading.json'
import Lottie from 'lottie-react'

const PageLoading = () => {
  const router = useRouter()

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleStart = (url: string) =>
      url !== router.asPath && setLoading(true)
    const handleComplete = (url: string) =>
      url === router.asPath && setLoading(false)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  })

  return loading ? (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-[999] mx-auto flex h-[100%] min-h-[100vh] w-[375px] items-center justify-center bg-[#000] opacity-[60%]">
      <Lottie animationData={pageLoadingAnimation} loop={true} />
    </div>
  ) : (
    <></>
  )
}

export default PageLoading
