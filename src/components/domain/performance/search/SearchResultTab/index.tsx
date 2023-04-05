import { Dispatch, SetStateAction } from 'react'

interface SearchResultTabProps {
  commingCount: number
  endedCount: number
  isComming: boolean
  setIsComming: Dispatch<SetStateAction<boolean>>
}

const SearchResultTab = ({
  commingCount,
  endedCount,
  isComming,
  setIsComming,
}: SearchResultTabProps) => {
  const commonTagStyle =
    'flex items-center ml-[14px] justify-center rounded-[4px] text-caption font-bold text-gray-900 h-[20px] w-[fit] px-[5px]'
  const commingTagStyle = `${commonTagStyle} ${
    isComming ? 'bg-[#00FFA3]' : 'bg-gray-500'
  }`
  const endedTagStyle = `${commonTagStyle} ${
    !isComming ? 'bg-[#00FFA3]' : 'bg-gray-500'
  }`
  const commonTextStyle = 'cursor-pointer text-body2 font-bold'
  const commingTextStyle = `${commonTextStyle} ${
    isComming ? 'text-[#00FFA3]' : 'text-gray-500'
  }`
  const endedTextStyle = `${commonTextStyle} ${
    !isComming ? 'text-[#00FFA3]' : 'text-gray-500'
  }`
  const commonContainerStyle = 'flex items-center'
  return (
    <div className={commonContainerStyle}>
      <div className={commonContainerStyle}>
        <span onClick={() => setIsComming(true)} className={commingTextStyle}>
          예정된 공연
        </span>
        <div className={commingTagStyle}>{commingCount}건</div>
      </div>
      <div className={`ml-[16px] ${commonContainerStyle}`}>
        <span onClick={() => setIsComming(false)} className={endedTextStyle}>
          지난 공연
        </span>
        <div className={endedTagStyle}>{endedCount}건</div>
      </div>
    </div>
  )
}

export default SearchResultTab
