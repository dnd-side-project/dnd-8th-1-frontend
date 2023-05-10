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
      {isOpen && <SearchModalHeader setIsOpen={setIsOpen} />}
      {children}
      {/** Body */}
      {isOpen && <SearchModalBody />}
    </>
  )
}

export default SearchModal
