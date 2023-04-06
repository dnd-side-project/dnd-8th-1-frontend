import { ComponentStory, ComponentMeta } from '@storybook/react'
import WelcomeModalContent from '.'

export default {
  component: WelcomeModalContent,
  title: 'domain/main/WelcomeModalContent',
  parameters: {
    componentSubtitle: '가입 시 뜨는 모달 안의 콘텐츠',
  },

  decorators: [
    (Story) => (
      <div className="w-[375px]">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof WelcomeModalContent>

const Template: ComponentStory<typeof WelcomeModalContent> = () => (
  <WelcomeModalContent />
)

export const Default = Template.bind({})
