import { Dispatch, SetStateAction } from 'react'

interface SearchBodyProps {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const SearchModalBody = ({ isOpen, setIsOpen }: SearchBodyProps) => {
  return (
    <>
      {isOpen && (
        <div
          onClick={() => {
            setIsOpen((prev) => !prev)
          }}
          className={`fixed z-[998] mx-[auto] h-screen w-[375px] bg-[#131313]`}
        />
      )}
    </>
  )
}

export default SearchModalBody
