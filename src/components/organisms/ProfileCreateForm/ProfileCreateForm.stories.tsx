import ProfileCreateForm from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Layout } from '@components'

export default {
  component: ProfileCreateForm,
  title: 'Organisms/ProfileCreateForm',
  parameters: {
    componentSubtitle: '프로필 페이지에서 프로필을 등록하는 폼 컴포넌트',
  },
  decorators: [
    (Story) => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
} as ComponentMeta<typeof ProfileCreateForm>

const Template: ComponentStory<typeof ProfileCreateForm> = (args) => (
  <ProfileCreateForm {...args} />
)

export const Default = Template.bind({})
