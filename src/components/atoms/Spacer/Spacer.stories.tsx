import Spacer from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  component: Spacer,
  title: 'Atoms/Spacer',
  parameters: {
    componentSubtitle: '요소 간 공백을 위한 Spacer 컴포넌트',
  },
  argTypes: {
    axis: {
      defaultValue: 'circle',
      control: 'inline-radio',
      options: ['vertical', 'horizontal'],
    },
  },
  decorators: [
    (Story) => (
      <div className="h-[100vh] w-[375px] bg-gray-700">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Spacer>

const VerticalTemplate: ComponentStory<typeof Spacer> = () => {
  return (
    <div>
      <div className="h-[100px] w-[100px] bg-green" />
      <Spacer size={12} />
      <div className="h-[50px] w-[100px] bg-green" />
      <Spacer size={12} />
    </div>
  )
}

const HorizontalTemplate: ComponentStory<typeof Spacer> = () => {
  return (
    <div className="flex">
      <div className="h-[100px] w-[100px] bg-green" />
      <Spacer axis="horizontal" size={12} />
      <div className="h-[50px] w-[100px] bg-green" />
      <Spacer axis="horizontal" size={12} />
    </div>
  )
}

export const Default = VerticalTemplate.bind({})
export const Vertical = HorizontalTemplate.bind({})
