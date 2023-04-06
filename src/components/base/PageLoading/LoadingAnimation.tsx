import { useRef, useEffect } from 'react'
import lottie from 'lottie-web'
import pageLoadingAnimation from './pageLoading.json'

const LoadingAnimation = () => {
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current as Element,
      animationData: pageLoadingAnimation,
      renderer: 'svg', // 렌더러 타입 설정
      loop: true, // 반복 재생 여부 설정
      autoplay: true, // 자동 재생 여부 설정
    })
  }, [])

  return (
    <div
      ref={container}
      className="container z-[999] h-[70px] w-[70px] overflow-hidden rounded-full bg-gray-700 opacity-[100%]"
    />
  )
}

export default LoadingAnimation
