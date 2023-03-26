import PerformanceCreateForm from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Layout } from '@components'

export default {
  component: PerformanceCreateForm,
  title: 'domain/performance/edit/PerformanceCreateForm',
  parameters: {
    componentSubtitle: '공연 정보 페이지에서 공연을 등록하는 폼 컴포넌트',
  },
  decorators: [
    (Story) => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
} as ComponentMeta<typeof PerformanceCreateForm>

const Template: ComponentStory<typeof PerformanceCreateForm> = (args) => (
  <PerformanceCreateForm {...args} />
)

export const Default = Template.bind({})
