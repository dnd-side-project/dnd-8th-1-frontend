import ProfileButtonGroup from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import OpenChatButton from './OpenChatButton'
import PortfolioButton from './PortfolioButton'
import { Portfolio } from '@types'

export default {
  component: ProfileButtonGroup,
  title: 'domain/profile/main/ProfileButtonGroup',
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

const portfolio: Portfolio = {
  youtube: 'https://www.allsilver.dev/',
  instagram: 'https://www.allsilver.dev/',
  tiktok: 'https://www.allsilver.dev/',
}

const nullPortfolio: Portfolio = {
  youtube: '',
  instagram: null,
  tiktok: '',
}

const OpenChatButtonTemplate: ComponentStory<
  typeof ProfileButtonGroup
> = () => <OpenChatButton openChatUrl="https://www.allsilver.dev/" />

const PortfolioButtonTemplate: ComponentStory<
  typeof ProfileButtonGroup
> = () => <PortfolioButton portfolio={portfolio} />

export const Default = Template.bind({})
export const NonPortfolio = Template.bind({})

export const OpenChatButtonExample = OpenChatButtonTemplate.bind({})
export const PortfolioButtonExample = PortfolioButtonTemplate.bind({})

Default.args = {
  openChatUrl: 'https://www.allsilver.dev/',
  portfolio,
}

NonPortfolio.args = {
  openChatUrl: 'https://www.allsilver.dev/',
  portfolio: nullPortfolio,
}
