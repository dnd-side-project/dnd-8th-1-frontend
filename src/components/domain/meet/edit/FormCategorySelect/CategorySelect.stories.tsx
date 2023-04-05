import FormCategorySelect from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useState } from 'react'
import { Box, Center, Text } from '@chakra-ui/react'

export default {
  component: FormCategorySelect,
  title: 'domain/meet/edit/FormCategorySelect',
  parameters: {
    componentSubtitle: '작성 폼 페이지에서 카테고리를 설정하는 컴포넌트',
  },
} as ComponentMeta<typeof FormCategorySelect>

const callback = (category: string) => {
  console.log('상위 컴포넌트에서 콜백 넘겨주기, 선택된 인덱스 : ', category)
}

const PostFormTemplate: ComponentStory<typeof FormCategorySelect> = (args) => {
  const tabWrapperStyle = 'w-[340px] rounded-[8px]'
  const tabItemStyle = 'bg-[#2D2D2D] text-[#747474]'
  const activeStyle = {
    backgroundColor: '#6DFFA8',
    color: '#2D2D2D',
  }

  const postFormArgs = {
    handleOnChange: callback,
    tabWrapperStyle,
    tabItemStyle,
    activeStyle,
  }

  return <FormCategorySelect {...args} {...postFormArgs} />
}

const ProfileFormTemplate: ComponentStory<typeof FormCategorySelect> = (
  args,
) => {
  const tabWrapperStyle = 'w-[130px]'
  const tabItemStyle = 'text-[#939393] text-[14px]'
  const activeStyle = {
    backgroundColor: 'black',
    color: 'white',
    fontSize: 14,
  }

  const postFormArgs = {
    handleOnChange: callback,
    tabWrapperStyle,
    tabItemStyle,
    activeStyle,
  }
  return <FormCategorySelect {...args} {...postFormArgs} />
}

export const Activity = PostFormTemplate.bind({})
Activity.args = {
  categories: ['콜라보', '쉐어'],
}

export const Role = PostFormTemplate.bind({})
Role.args = {
  categories: ['댄서', '댄스팀'],
}

export const ProfileRole = ProfileFormTemplate.bind({})
ProfileRole.args = {
  categories: ['댄서', '댄스팀'],
}

const PageTemplate: ComponentStory<typeof FormCategorySelect> = (args) => {
  const [selectedCategory, setSelectedCategory] = useState('댄서') // 기본값
  const categories = ['댄서', '댄스팀']

  const tabWrapperStyle = 'w-[130px]'
  const tabItemStyle = 'text-[#939393] text-[14px]'
  const activeStyle = {
    backgroundColor: 'black',
    color: 'white',
    fontSize: 14,
  }

  const postFormArgs = {
    categories,
    handleOnChange: setSelectedCategory,
    tabWrapperStyle,
    tabItemStyle,
    activeStyle,
  }
  return (
    <Center flexDirection={'column'}>
      <FormCategorySelect {...args} {...postFormArgs} />

      <Box>
        <Text>현재 선택된 카테고리는 {selectedCategory} 입니다.</Text>
      </Box>
    </Center>
  )
}

export const PageExample = PageTemplate.bind({})
