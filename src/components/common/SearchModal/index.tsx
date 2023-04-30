import { Dispatch, ReactNode, SetStateAction } from 'react'
import { SearchModalHeader, SearchModalBody } from '@components'

interface SearchModalProps {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  children: ReactNode
}

const SearchModal = ({ children, isOpen, setIsOpen }: SearchModalProps) => {
  return (
    <>
      {/** Header */}
      <SearchModalHeader setIsOpen={setIsOpen} />
      {children}
      {/** Body */}
      <SearchModalBody isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

export default SearchModal
