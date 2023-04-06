import { useEffect, useState } from 'react'
import { RecruitmentType } from '@types'
import { RECRUITMENT_TYPE } from '@constants'

interface ProfileSubCategoryTabProps {
  handleOnChange: (category: RecruitmentType) => void
  defaultType: RecruitmentType
}

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
      {(RECRUITMENT_TYPE as RecruitmentType[]).map((category) => (
        <button
          className={`${
            selected === category
              ? 'h-full w-full bg-green-light font-bold text-gray-900'
              : 'h-[90%] w-[95%] bg-gray-900 text-green-light'
          } text-body2 outline-none`}
          key={category}
          onClick={(e) => {
            e.preventDefault()
            setSelected(category)
            handleOnChange(category)
          }}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default ProfileCategorySelect
