import ProfileDisabled from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Layout } from '@components'

export default {
  component: ProfileDisabled,
  title: 'Organisms/ProfileDisabled',
  parameters: {
    componentSubtitle: '프로필 미등록시 보이는 컴포넌트',
  },
  decorators: [
    (Story) => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
} as ComponentMeta<typeof ProfileDisabled>

const Template: ComponentStory<typeof ProfileDisabled> = () => (
  <ProfileDisabled
    userId={1}
    profileImage="https://picsum.photos/500/500"
    name="구글 계정 이름"
    id={1}
  />
)

export const Default = Template.bind({})
Default.args = {}
