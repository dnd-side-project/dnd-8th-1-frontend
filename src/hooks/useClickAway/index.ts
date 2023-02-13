import { RefObject, useEffect, useRef } from 'react'

const events = ['mousedown', 'touchstart']

const useClickAway = <E extends Event = Event>(
  ref: RefObject<HTMLElement | null>,
  handleOnClickAway: (event: E) => void,
) => {
  const savedHandler = useRef(handleOnClickAway)

  useEffect(() => {
    savedHandler.current = handleOnClickAway
  }, [handleOnClickAway])

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleEvent = (e: any) => {
      const { current: element } = ref
      element && !element.contains(e.target) && savedHandler.current(e)
    }

    for (const eventName of events) {
      document.addEventListener(eventName, handleEvent)
    }

    return () => {
      for (const eventName of events) {
        document.removeEventListener(eventName, handleEvent)
      }
    }
  }, [ref])

  return ref
}

export default useClickAway
