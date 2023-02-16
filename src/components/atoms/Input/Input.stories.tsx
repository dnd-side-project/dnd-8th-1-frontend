import Input from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  component: Input,
  title: 'Atoms/Input',
  argTypes: {
    placeholder: {
      type: 'string',
      defaultValue: 'Input 컴포넌트 입니다.',
    },
    styleClass: {
      defaultValue:
        'w-[330px] rounded-md h-10 px-3 text-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 bg-white text-gray-600',
    },
  },
  parameters: {
    componentSubtitle: 'Input 컴포넌트',
  },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Default = Template.bind({})

export const Flushed = Template.bind({})
Flushed.args = {
  styleClass:
    'w-[330px] text-sm sm:py-2 border-0 border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-400 bg-white text-gray-600',
}

export const Rounded = Template.bind({})
Rounded.args = {
  styleClass:
    'w-[330px] rounded-3xl h-10 px-3 text-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 bg-white text-gray-600',
}

export const Filled = Template.bind({})
Filled.args = {
  styleClass:
    'sm:w-[330px] sm:h-10 sm:px-3 sm:text-sm sm:rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 bg-gray-200 text-white',
}
