import FormCategorySelect from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Box } from '@chakra-ui/react'

/**
 * 스토리북 확인을 위한 샘플 파일입니다.
 */
export default {
  component: FormCategorySelect,
  title: 'MoleCules/FormCategorySelect',
  parameters: {
    componentSubtitle: '공통 컴포넌트로 사용되는 컴포넌트',
  },
} as ComponentMeta<typeof FormCategorySelect>

const callback = (index: number) => {
  console.log('상위 컴포넌트에서 콜백 넘겨주기', index)
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
