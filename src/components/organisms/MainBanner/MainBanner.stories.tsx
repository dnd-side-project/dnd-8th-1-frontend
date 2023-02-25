import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Layout } from '@components'
import MainBanner from '.'

export default {
  component: MainBanner,
  title: 'Organisms/MainBanner',
  parameters: {
    componentSubtitle: '홈 화면의 배너 컴포넌트',
  },

  decorators: [
    (Story) => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
} as ComponentMeta<typeof MainBanner>

const Template: ComponentStory<typeof MainBanner> = () => <MainBanner />

export const Default = Template.bind({})
