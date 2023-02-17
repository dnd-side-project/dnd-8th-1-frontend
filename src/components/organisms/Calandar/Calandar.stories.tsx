import Calendar from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Layout } from '@components'

export default {
  component: Calendar,
  title: 'Organisms/Calendar',
  parameters: {
    componentSubtitle: '캘린더 컴포넌트',
  },
  decorators: [
    (Story) => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
} as ComponentMeta<typeof Calendar>

const Template: ComponentStory<typeof Calendar> = (args) => (
  <Calendar {...args} />
)

export const Default = Template.bind({})
