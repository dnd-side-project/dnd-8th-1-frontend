import { Tabs, TabList, Tab, Flex } from '@chakra-ui/react'
import { RECRUITMENT_TYPE } from '@constants'
import { CSSProperties } from 'react'
import { RecruitmentType } from '@types'
interface FormCategorySelectProps {
  active?: string
  categories: string[]
  handleOnChange?: (selected: string) => void // 인덱스가 변할 때, 상위 컴포넌트에 바뀐 인덱스 정보를 넘겨줌
  tabWrapperStyle?: string
  tabItemStyle?: string
  activeStyle?: CSSProperties
}

const FormCategorySelect = ({
  active,
  categories,
  handleOnChange,
  tabWrapperStyle,
  tabItemStyle,
  activeStyle,
}: FormCategorySelectProps) => {
  const currentIndex = active ? categories.indexOf(active) : 0

  return (
    <Flex overflow="hidden" className={tabWrapperStyle}>
      <Tabs
        defaultIndex={currentIndex}
        variant="unstyled"
        onChange={(index) => {
          handleOnChange && handleOnChange(categories[index])
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
