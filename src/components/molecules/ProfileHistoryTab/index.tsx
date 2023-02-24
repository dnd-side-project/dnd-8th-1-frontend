import { Tabs, TabList, Tab } from '@chakra-ui/react'
import { theme } from '@constants'
import { SetStateAction, useState } from 'react'

interface ProfileHistoryTabProps {
  // 탭을 전환하였을 때의 콜백
  handleOnChange: (category: string) => void
  // 기본값 지정
  defaultValue?: '만나기' | '공연'
}

const ProfileHistoryTab = ({
  handleOnChange,
  defaultValue,
}: ProfileHistoryTabProps) => {
  const categories = ['만나기', '공연']

  const { colors, fontSize } = theme
  const [selected, setSelected] = useState<'만나기' | '공연'>(
    defaultValue ? defaultValue : '만나기',
  )

  return (
    <Tabs
      variant="unstyled"
      onChange={(index) => {
        setSelected(categories[index] as SetStateAction<'만나기' | '공연'>)
        handleOnChange(categories[index])
      }}
      defaultIndex={defaultValue && categories.indexOf(defaultValue)}
    >
      <TabList
        style={{
          color: colors.gray[500],
          fontSize: fontSize.subtitle[0],
          borderBottom: `0.75px solid ${colors.gray[600]}`,
        }}
      >
        {categories.map((category) => (
          <Tab
            key={category}
            _selected={{
              color: colors.gray[100],
              fontSize: fontSize.subtitle[0],
              fontWeight: 700,
            }}
            position="relative"
          >
            {category}
            {category === selected && (
              <div className="absolute bottom-0 h-[2px] w-[47px] bg-gray-100" />
            )}
          </Tab>
        ))}
      </TabList>
    </Tabs>
  )
}

export default ProfileHistoryTab
