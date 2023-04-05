import { useEffect, useState } from 'react'
import { HISTORY_MAIN_CATEGORIES, HISTORY_SUB_CATEGORIES } from '@types'

interface ProfileSubCategoryTabProps {
  handleOnChange: (category: HISTORY_SUB_CATEGORIES) => void
  defaultType: HISTORY_MAIN_CATEGORIES
}

const MEET_CATEGORIES = ['등록', '신청']
const PERFORMANCE_CATEGORIES = ['등록한 공연', '후기']

const ProfileSubCategoryTab = ({
  handleOnChange,
  defaultType,
}: ProfileSubCategoryTabProps) => {
  const DEFAULT_TYPE = defaultType === '만나기' ? '등록' : '등록한 공연'

  const categories =
    defaultType === '만나기' ? MEET_CATEGORIES : PERFORMANCE_CATEGORIES

  const [selected, setSelected] = useState(categories[0])

  useEffect(() => {
    setSelected(DEFAULT_TYPE)
    handleOnChange(DEFAULT_TYPE)
  }, [defaultType])

  return (
    <div className="flex gap-[9px] bg-[#1B1B1B] px-[16px] py-[16px]">
      {categories.map((category) => (
        <button
          className={`${
            selected === category
              ? 'bg-gray-100 text-gray-900'
              : 'bg-gray-600 text-gray-100'
          } rounded-[14px] px-[15px] py-[3px]`}
          key={category}
          onClick={() => {
            setSelected(category)
            handleOnChange(category as HISTORY_SUB_CATEGORIES)
          }}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default ProfileSubCategoryTab
