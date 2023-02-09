import ToggleText from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { StoryBookHOC } from '@components/templates'

export default {
  component: ToggleText,
  title: 'Molecules/ToggleText',
  parameters: {
    componentSubtitle: 'ToggleText 컴포넌트',
  },
  argTypes: {
    content: {
      defaultValue: '계정 삭제에 동의합니다.',
    },
    textStyle: {
      defaultValue: 'ml-[4px]',
    },
    containerStyle: {
      defaultValue: 'w-[375px]',
    },
    checkboxStyle: {
      defaultValue: '',
    },
  },
  decorators: [StoryBookHOC()],
} as ComponentMeta<typeof ToggleText>

const Template: ComponentStory<typeof ToggleText> = (args) => (
  <ToggleText {...args} />
)

export const Default = Template.bind({})
