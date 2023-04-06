import { ComponentStory, ComponentMeta } from '@storybook/react'
import ProfileRegisterContent from '.'

export default {
  component: ProfileRegisterContent,
  title: 'domain/base/ProfileRegisterContent',
  parameters: {
    componentSubtitle: '프로필 등록 팝업에 포함되는 content 컴포넌트',
  },

  decorators: [
    (Story) => (
      <div className="w-[375px]">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ProfileRegisterContent>

const Template: ComponentStory<typeof ProfileRegisterContent> = () => (
  <ProfileRegisterContent />
)

export const Default = Template.bind({})
