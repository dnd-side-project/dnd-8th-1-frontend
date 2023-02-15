// ref:https://stackoverflow.com/questions/40064249/react-animate-mount-and-unmount-of-a-single-component

import { useEffect, useState } from 'react'

const useDelayUnmount = (isMounted: boolean, delayTime: number) => {
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    if (isMounted && !shouldRender) {
      setShouldRender(true)
    } else if (!isMounted && shouldRender) {
      timeoutId = setTimeout(() => setShouldRender(false), delayTime)
    }
    return () => clearTimeout(timeoutId)
  }, [isMounted, delayTime, shouldRender])
  return shouldRender
}

export default useDelayUnmount
