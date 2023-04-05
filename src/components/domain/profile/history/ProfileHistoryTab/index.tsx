import { useEffect, useState } from 'react'
import { HISTORY_MAIN_CATEGORIES } from '@types'

interface ProfileHistoryTabProps {
  // 탭을 전환하였을 때의 콜백
  handleOnChange: (category: HISTORY_MAIN_CATEGORIES) => void
  // 기본값 지정
  defaultValue?: '만나기' | '공연'
}

const ProfileHistoryTab = ({
  handleOnChange,
  defaultValue,
}: ProfileHistoryTabProps) => {
  const categories: HISTORY_MAIN_CATEGORIES[] = ['만나기', '공연']

  const [selected, setSelected] = useState(
    defaultValue ? defaultValue : '만나기',
  )

  useEffect(() => {
    if (defaultValue) {
      setSelected(defaultValue)
    }
  }, [defaultValue])

  return (
    <div className="mb-[1px]">
      <div className="ml-[16px] flex gap-[26px]">
        {categories.map((category) => (
          <div key={category}>
            <button
              className={`${
                category === selected
                  ? 'font-bold text-gray-100'
                  : 'text-gray-500'
              }  relative text-subtitle leading-none`}
              onClick={() => {
                setSelected(category)
                handleOnChange(category)
              }}
            >
              {category}
              {category === selected && (
                <div
                  className={`absolute bottom-[-13px] h-[2px] ${
                    category === '만나기' ? 'w-[47px]' : 'w-[32px]'
                  } bg-gray-100`}
                />
              )}
            </button>
          </div>
        ))}
      </div>
      <div className="mt-[9px] h-[0.7px] w-[375px] bg-gray-600"></div>
    </div>
  )
}

export default ProfileHistoryTab
