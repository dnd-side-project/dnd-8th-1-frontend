import { ProfileSubCategoryTab, ProfileHistoryTab } from '@components'
import { HISTORY_MAIN_CATEGORIES, HISTORY_SUB_CATEGORIES } from '@types'
import { useState } from 'react'

interface ActivityCategorySelectorProps {
  // 메인 카테고리 선택 : 만나기, 공연
  handleOnChangeMainCategory: (category: string) => void
  // 서브 카테고리 선택
  // 만나기의 경우 : 등록, 신청
  // 공연의 경우 : 등록한 공연, 후기
  handleOnChangeSubCategory: (subcategory: string) => void
}

const ActivityCategorySelector = ({
  handleOnChangeMainCategory,
  handleOnChangeSubCategory,
}: ActivityCategorySelectorProps) => {
  const [category, setCategory] = useState<HISTORY_MAIN_CATEGORIES>('만나기')

  return (
    <div>
      <ProfileHistoryTab
        handleOnChange={(value: HISTORY_MAIN_CATEGORIES) => {
          handleOnChangeMainCategory(value)
          setCategory(value)
        }}
        defaultValue={category}
      />
      <ProfileSubCategoryTab
        handleOnChange={(value: HISTORY_SUB_CATEGORIES) => {
          handleOnChangeSubCategory(value)
        }}
        defaultType={category}
      />
    </div>
  )
}

export default ActivityCategorySelector
