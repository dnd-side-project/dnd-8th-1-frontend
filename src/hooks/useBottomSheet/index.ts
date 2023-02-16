import { Dispatch, SetStateAction, useState } from 'react'

const useBottomSheet = (): [
  boolean,
  Dispatch<SetStateAction<boolean>>,
  () => void,
] => {
  const [showBottomSheet, setShowBottomSheet] = useState(false)

  const toggle = () => setShowBottomSheet(!showBottomSheet)

  return [showBottomSheet, setShowBottomSheet, toggle]
}

export default useBottomSheet
