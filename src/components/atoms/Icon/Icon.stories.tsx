import Icon from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  component: Icon,
  title: 'Atoms/Icon',
  argTypes: {
    icon: {
      defaultValue: 'vercel',
      control: 'inline-radio',
      options: ['vercel'],
    },
    size: {
      defaultValue: 16,
      control: { type: 'range', min: 8, max: 240 },
    },
    color: {
      control: { type: 'color' },
    },
  },
  parameters: {
    componentSubtitle: 'Icon 컴포넌트',
  },
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

export const Default = Template.bind({})
