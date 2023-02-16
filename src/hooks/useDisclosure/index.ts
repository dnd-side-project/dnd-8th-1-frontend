import { Dispatch, SetStateAction, useState } from 'react'

const useDisclosure = (): [
  boolean,
  Dispatch<SetStateAction<boolean>>,
  () => void,
] => {
  const [showDisclosure, setShowDisclosure] = useState(false)
  const handleToggle = () => setShowDisclosure(!showDisclosure)
  return [showDisclosure, setShowDisclosure, handleToggle]
}

export default useDisclosure
