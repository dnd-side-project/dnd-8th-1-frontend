import { Tabs, TabList, Tab, Flex } from '@chakra-ui/react'
import { CSSProperties, useState } from 'react'

interface FormCategorySelectProps {
  active?: string
  categories: string[]
  handleChange?: (index: number) => void // 인덱스가 변할 때, 상위 컴포넌트에 바뀐 인덱스 정보를 넘겨줌
  tabWrapperStyle?: string
  tabItemStyle?: string
  activeStyle?: CSSProperties
}

const FormCategorySelect = ({
  active,
  categories,
  handleChange,
  tabWrapperStyle,
  tabItemStyle,
  activeStyle,
}: FormCategorySelectProps) => {
  const [activeCategory, setActiveCategory] = useState(
    active ? active : categories[0],
  )

  const currentIndex = categories.indexOf(activeCategory)

  return (
    <Flex overflow="hidden" className={tabWrapperStyle}>
      <Tabs
        defaultIndex={currentIndex}
        variant="unstyled"
        onChange={(index) => {
          handleChange && handleChange(index)
        }}
        flexGrow={1}
      >
        <TabList>
          {categories.map((category, i) => (
            <Tab
              key={i}
              flexGrow={1}
              className={tabItemStyle}
              _selected={activeStyle}
            >
              {category}
            </Tab>
          ))}
        </TabList>
      </Tabs>
    </Flex>
  )
}

export default FormCategorySelect
