import { Tabs, TabList, Tab, Flex } from '@chakra-ui/react'
import { useState } from 'react'

interface FormCategorySelectProps {
  active?: string
  categories: string[]
  handleChange?: (index: number) => void // 인덱스가 변할 때, 상위 컴포넌트에 바뀐 인덱스 정보를 넘겨줌
}

const FormCategorySelect = ({
  active,
  categories,
  handleChange,
}: FormCategorySelectProps) => {
  const [activeCategory, setActiveCategory] = useState(
    active ? active : categories[0],
  )

  const currentIndex = categories.indexOf(activeCategory)

  return (
    // TODO: borderRadius 확정되지 않음
    <Flex w={340} borderRadius={8} overflow="hidden">
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
              // TODO: 색상 상수화 ; 디자이너에게 색상 종류 여쭤보기
              bg="#2D2D2D"
              color="#747474"
              _selected={{ color: '#2D2D2D', bg: '#6DFFA8' }}
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
