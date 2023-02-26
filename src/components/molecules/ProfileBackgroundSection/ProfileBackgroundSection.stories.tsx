import ProfileBackgroundSection from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  component: ProfileBackgroundSection,
  title: 'molecules/ProfileBackgroundSection',
  parameters: {
    componentSubtitle: '프로필 페이지에 사용되는 계정 유형에 따른 뒷부분',
  },
  argTypes: {
    type: {
      defaultValue: '댄서',
      control: 'inline-radio',
      options: ['댄서', '댄스팀'],
    },
  },

  decorators: [
    (Story) => (
      <div className="w-[375px]">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ProfileBackgroundSection>

const Template: ComponentStory<typeof ProfileBackgroundSection> = (args) => (
  <ProfileBackgroundSection {...args} />
)

export const Default = Template.bind({})
Default.args = {}
