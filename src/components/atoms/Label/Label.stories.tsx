import Label from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  component: Label,
  title: 'Atoms/Label',
  parameters: {
    componentSubtitle: '공통 컴포넌트/라벨',
  },
} as ComponentMeta<typeof Label>

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />

export const Default = Template.bind({})
Default.args = {
  content: '라벨 입니다.',
  styleClass: '',
  htmlFor: 'label',
}
