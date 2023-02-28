import { useEffect, useState } from 'react'
import { Popover, PopoverTrigger, PopoverContent } from '@chakra-ui/react'

import {
  GenrePopupContent,
  Icon,
  IconButton,
  MeetPopupContent,
  RegionPopupContent,
} from '@components'

interface FilterButtonProps {
  type: 'region' | 'meet' | 'genre'
  handleSelected: (condition: string) => void
}

const FilterButton = ({ type, handleSelected }: FilterButtonProps) => {
  const [selectedFilter, setSelectedFilter] = useState('') // 조건 없으면 빈 문자열로 둔다.
  const isSelected = selectedFilter !== ''

  const buttonDefaultStyle =
    'h-[34px] flex border items-center w-[81px] bg-gray-700 py-[3px] px-[16px] text-gray-300 rounded-[37px] text-body2'

  const [isTrigger, setIsTrigger] = useState(false)
  useEffect(() => {
    if (isSelected) {
      setIsTrigger(false)
    }
  }, [isSelected])
  return !isSelected ? (
    <Popover>
      <div
        className={`${buttonDefaultStyle} ${
          isTrigger ? 'border-green-light' : 'border-gray-700'
        }`}
      >
        {type === 'region' ? (
          <span>지역</span>
        ) : type === 'meet' ? (
          <span>유형</span>
        ) : (
          <span>장르</span>
        )}
        <PopoverTrigger>
          <button
            onClick={() => setIsTrigger(!isTrigger)}
            className="ml-[10px]"
          >
            {isTrigger ? (
              <Icon icon="arrow-increase-shallow" size={8} />
            ) : (
              <Icon icon="arrow-decrease-shallow" size={8} />
            )}
          </button>
        </PopoverTrigger>
      </div>

      <PopoverContent
        marginTop="10px"
        border="none"
        width="fit-content"
        overflow="hidden"
        backgroundColor="transparent"
      >
        {type === 'region' ? (
          <div className=" ml-[19px] mb-[19px] w-[336px] rounded-[8px] border-[1px] border-gray-600 bg-gray-700 px-[10px] py-[15px]">
            <RegionPopupContent
              handleOnClick={(region) => {
                setSelectedFilter(region)
                handleSelected(region)
              }}
            />
          </div>
        ) : type === 'meet' ? (
          <MeetPopupContent
            handleOnClick={(meet) => {
              setSelectedFilter(meet)
              handleSelected(meet)
            }}
          />
        ) : (
          <div className="ml-[20px] mt-[6px] flex h-[208px] w-[336px] items-center justify-center rounded-[8px] border border-gray-600 bg-gray-700 px-[10px]">
            <GenrePopupContent
              handleOnClick={(genre) => {
                setSelectedFilter(genre)
                handleSelected(genre)
              }}
            />
          </div>
        )}
      </PopoverContent>
    </Popover>
  ) : (
    <div className="flex h-[34px] w-[81px] items-center justify-center gap-[10.95px] rounded-[37px] border-[1px] border-solid border-green-light bg-gray-700 py-[3px] px-[12px] text-body2 text-green-light">
      <span>{selectedFilter}</span>
      <IconButton
        icon="x-active"
        size={16}
        areaLabel="선택한 필터 해제 버튼"
        handleOnClick={() => {
          setSelectedFilter('')
          handleSelected('')
        }}
      />
    </div>
  )
}

export default FilterButton
