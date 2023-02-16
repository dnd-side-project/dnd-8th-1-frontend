import { useState } from 'react'
import { Popover, PopoverTrigger, PopoverContent } from '@chakra-ui/react'

import {
  GenrePopupContent,
  IconButton,
  MeetPopupContent,
  RegionButtonGroup,
} from '@components'

interface FilterButtonProps {
  type: 'region' | 'meet' | 'genre'
  handleSelected: (condition: string) => void
}

const FilterButton = ({ type, handleSelected }: FilterButtonProps) => {
  const [selectedFilter, setSelectedFilter] = useState('') // 조건 없으면 빈 문자열로 둔다.
  const isSelected = selectedFilter !== ''

  const buttonDefaultStyle =
    'h-[28px] w-[69px] bg-gray-700 text-green-light rounded-[37px] text-body2'

  return !isSelected ? (
    <Popover>
      <PopoverTrigger>
        {type === 'region' ? (
          <button className={buttonDefaultStyle}>지역</button>
        ) : type === 'meet' ? (
          <button className={buttonDefaultStyle}>유형</button>
        ) : (
          <button className={buttonDefaultStyle}>장르</button>
        )}
      </PopoverTrigger>
      <PopoverContent
        border="none"
        width="fit-content"
        overflow="hidden"
        backgroundColor="transparent"
      >
        {type === 'region' ? (
          <RegionButtonGroup
            handleOnClick={(region) => {
              setSelectedFilter(region)
              handleSelected(region)
            }}
          />
        ) : type === 'meet' ? (
          <MeetPopupContent
            handleOnClick={(meet) => {
              setSelectedFilter(meet)
              handleSelected(meet)
            }}
          />
        ) : (
          <GenrePopupContent
            handleOnClick={(genre) => {
              setSelectedFilter(genre)
              handleSelected(genre)
            }}
          />
        )}
      </PopoverContent>
    </Popover>
  ) : (
    <div className="flex h-[28px] w-[70px] items-center justify-center gap-[10.95px] rounded-[37px] border-[1px] border-solid border-green-light bg-gray-700 text-body2 text-green-light">
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
