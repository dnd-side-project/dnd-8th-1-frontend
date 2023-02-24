import MeetCreateForm from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Layout } from '@components'

export default {
  component: MeetCreateForm,
  title: 'Organisms/MeetCreateForm',
  parameters: {
    componentSubtitle: '만나기 페이지에서 만나기를 등록하는 폼 컴포넌트',
  },
  decorators: [
    (Story) => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
} as ComponentMeta<typeof MeetCreateForm>

const Template: ComponentStory<typeof MeetCreateForm> = (args) => (
  <MeetCreateForm {...args} />
)

export const Default = Template.bind({})
