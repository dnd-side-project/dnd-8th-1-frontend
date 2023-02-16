import { Dispatch, SetStateAction, useState } from 'react'

const useDisclosure = (): [
  boolean,
  Dispatch<SetStateAction<boolean>>,
  () => void,
] => {
  const [showDisclosure, setShowDisclosure] = useState(false)

  const toggle = () => setShowDisclosure(!showDisclosure)

  return [showDisclosure, setShowDisclosure, toggle]
}

export default useDisclosure
