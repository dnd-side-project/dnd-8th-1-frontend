import FormCategorySelect from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Box } from '@chakra-ui/react'

export default {
  component: FormCategorySelect,
  title: 'MoleCules/FormCategorySelect',
  parameters: {
    componentSubtitle: '작성 폼 페이지에서 카테고리를 설정하는 컴포넌트',
  },
} as ComponentMeta<typeof FormCategorySelect>

const callback = (index: number) => {
  console.log('상위 컴포넌트에서 콜백 넘겨주기, 선택된 인덱스 : ', index)
}

const Template: ComponentStory<typeof FormCategorySelect> = (args) => {
  return <FormCategorySelect {...args} />
}

export const Activity = Template.bind({})
Activity.args = {
  categories: ['콜라보', '쉐어'],
  handleChange: callback,
}

export const Role = Template.bind({})
Role.args = {
  categories: ['댄서', '댄스팀'],
  handleChange: callback,
}
