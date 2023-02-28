import { ComponentStory, ComponentMeta } from '@storybook/react'
import ProfileRegisterContent from '.'

export default {
  component: ProfileRegisterContent,
  title: 'Organisms/ProfileRegisterContent',
  parameters: {
    componentSubtitle: '프로필 등록 팝업',
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
