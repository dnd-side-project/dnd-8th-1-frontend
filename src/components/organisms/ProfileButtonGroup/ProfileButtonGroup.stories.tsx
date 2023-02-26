import ProfileButtonGroup from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import OpenChatButton from './OpenChatButton'
import PortfolioButton from './PortfolioButton'

export default {
  component: ProfileButtonGroup,
  title: 'Organisms/ProfileButtonGroup',
  parameters: {
    componentSubtitle: '프로필 버튼',
  },

  decorators: [
    (Story) => (
      <div className="h-[800px] w-[375px] bg-gray-900 py-[30px]">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ProfileButtonGroup>

const Template: ComponentStory<typeof ProfileButtonGroup> = (args) => (
  <ProfileButtonGroup {...args} />
)

const OpenChatButtonTemplate: ComponentStory<
  typeof ProfileButtonGroup
> = () => <OpenChatButton openChatUrl="https://www.allsilver.dev/" />

const PortfolioButtonTemplate: ComponentStory<
  typeof ProfileButtonGroup
> = () => <PortfolioButton />

export const Default = Template.bind({})
export const OpenChatButtonExample = OpenChatButtonTemplate.bind({})
export const PortfolioButtonExample = PortfolioButtonTemplate.bind({})

Default.args = {
  openChatUrl: 'https://www.allsilver.dev/',
}
