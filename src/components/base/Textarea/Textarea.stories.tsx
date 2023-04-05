import Textarea from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  component: Textarea,
  title: 'base/Textarea',
  parameters: {
    componentSubtitle: 'Textarea 컴포넌트',
  },
  argTypes: {
    styleClass: {
      defaultValue:
        'sm:w-[330px] sm:h-[180px] resize-none sm:px-3 sm:py-3 sm:text-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 bg-white text-gray-600',
    },
    placeholder: {
      defaultValue:
        '후기는 최대 300자까지 등록 가능합니다.\n\n(후기는 수정이 불가능하고 삭제만 가능합니다.)',
    },
  },
} as ComponentMeta<typeof Textarea>

const Template: ComponentStory<typeof Textarea> = (args) => (
  <Textarea {...args} />
)

export const Default = Template.bind({})

export const Rounded = Template.bind({})
Rounded.args = {
  styleClass:
    'sm:w-[330px] sm:rounded-md sm:h-[180px] leading-3 resize-none sm:px-3 sm:py-3 sm:text-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 bg-white text-gray-600',
  placeholder: '',
}
