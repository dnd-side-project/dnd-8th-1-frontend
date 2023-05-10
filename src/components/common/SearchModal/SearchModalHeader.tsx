import { Icon, IconButton, Input } from '@components'
import { SearchHeaderHeadless } from '@components'
import React, { Dispatch, SetStateAction } from 'react'

interface SearchHeaderProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const SearchModalHeader = ({ setIsOpen }: SearchHeaderProps) => {
  return (
    <SearchHeaderHeadless
      headerStyle="fixed top-0 z-[9998] mx-[auto] box-border flex w-[375px] justify-between bg-gray-900 px-[16px] py-[14px]"
      formStyle="relative flex w-full items-center"
    >
      {({ register, reset }) => (
        <>
          <button
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                return
              } else {
                setIsOpen(false)
              }
            }}
          >
            <Icon size={20} icon="arrow-left" />
          </button>

          <Input
            placeholder="댄서/팀 이름으로 공연 검색"
            styleClass="ml-[6px] w-[322px] h-[39px] rounded-[26px] h-10 px-3 border border-gray-700 focus:outline-none bg-gray-700 text-body1 placeholder:text-gray-500 text-gray-100"
            {...register('search')}
          />
          <IconButton
            size={20}
            icon="x-circle"
            areaLabel="입력 리셋 버튼"
            styleClass="absolute right-[11.83px] cursor-pointer"
            handleOnClick={() => {
              reset()
            }}
          />
        </>
      )}
    </SearchHeaderHeadless>
  )
}

export default SearchModalHeader
