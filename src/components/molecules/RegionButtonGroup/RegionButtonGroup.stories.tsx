import RegionButtonGroup from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CONSTANT_REGION } from '@constants'

export default {
  component: RegionButtonGroup,
  title: 'Molecules/RegionButtonGroup',
  parameters: {
    componentSubtitle: 'RegionButtonGroup 컴포넌트',
  },
  argTypes: {
    clickRegion: {
      defaultValue: '서울',
      control: 'inline-radio',
      options: CONSTANT_REGION,
    },
  },
} as ComponentMeta<typeof RegionButtonGroup>

const Template: ComponentStory<typeof RegionButtonGroup> = (args) => (
  <RegionButtonGroup {...args} />
)
export const Default = Template.bind({})
