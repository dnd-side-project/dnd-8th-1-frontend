import { useEffect, useState } from 'react'
import { RecruitmentType } from '@types'

interface ProfileSubCategoryTabProps {
  handleOnChange: (category: RecruitmentType) => void
  defaultType: RecruitmentType
}

const GENRE_CATEGORIES = ['댄서', '댄스팀']

const ProfileCategorySelect = ({
  handleOnChange,
  defaultType,
}: ProfileSubCategoryTabProps) => {
  const [selected, setSelected] = useState(defaultType)

  useEffect(() => {
    setSelected(defaultType)
    handleOnChange(defaultType)
  }, [defaultType])

  return (
    <div className="flex h-[30px] w-[120px] items-center justify-center rounded-[4px] border border-green-light">
      {GENRE_CATEGORIES.map((category) => (
        <button
          className={`${
            selected === category
              ? 'h-full w-full bg-green-light font-bold text-gray-900'
              : 'h-[90%] w-[95%] bg-gray-900 text-green-light'
          } text-body2 outline-none`}
          key={category}
          onClick={(e) => {
            e.preventDefault()
            setSelected(category as '댄서' | '댄스팀')
            handleOnChange(category as '댄서' | '댄스팀')
          }}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default ProfileCategorySelect
