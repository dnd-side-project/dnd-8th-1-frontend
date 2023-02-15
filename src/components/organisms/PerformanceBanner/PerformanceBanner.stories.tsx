import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Layout } from '@components'
import PerformanceBanner from '.'

export default {
  component: PerformanceBanner,
  title: 'Organisms/PerformanceBanner',
  parameters: {
    componentSubtitle: 'PerformanceBanner 컴포넌트',
  },
  argTypes: {
    imminentPerformances: {
      defaultValue: [
        { title: '1월 공연', image: 'https://picsum.photos/375/275' },
        { title: '2월 공연', image: 'https://picsum.photos/375/275' },
        { title: '3월 공연', image: 'https://picsum.photos/375/275' },
        { title: '4월 공연', image: 'https://picsum.photos/375/275' },
      ],
    },
  },
  decorators: [
    (Story) => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
} as ComponentMeta<typeof PerformanceBanner>

const Template: ComponentStory<typeof PerformanceBanner> = (args) => (
  <PerformanceBanner {...args} />
)

export const Default = Template.bind({})
Default.args = {}
