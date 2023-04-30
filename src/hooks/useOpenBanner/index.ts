import { useEffect, useState } from 'react'

const useOpenBanner = () => {
  const [isBanner, setIsBanner] = useState(true)
  useEffect(() => {
    const closeBanner = setTimeout(() => {
      setIsBanner(false)
    }, 2000)
    return () => {
      clearTimeout(closeBanner)
    }
  }, [])
  return { isBanner }
}

export default useOpenBanner
