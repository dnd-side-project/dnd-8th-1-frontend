import Icon from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { IconSet } from './Iconset'

export default {
  component: Icon,
  title: 'base/Icon',
  argTypes: {
    icon: {
      defaultValue: 'arrow-decrease',
      control: 'inline-radio',
      options: Object.keys(IconSet),
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
  decorators: [
    (Story) => (
      <div className="bg-neutral-100 flex h-[30px] w-[30px] items-center justify-center">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

export const Default = Template.bind({})
