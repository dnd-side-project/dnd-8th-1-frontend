import Checkbox from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  component: Checkbox,
  title: 'Atoms/CheckBox',
  parameters: {
    componentSubtitle: '체크박스 컴포넌트',
  },
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
)

export const Default = Template.bind({})
