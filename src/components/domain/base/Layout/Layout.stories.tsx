import Layout from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Box } from '@chakra-ui/react'

export default {
  component: Layout,
  title: 'domain/base/Layout',
  parameters: {
    componentSubtitle: '레이아웃 컴포넌트',
  },
} as ComponentMeta<typeof Layout>

const Template: ComponentStory<typeof Layout> = () => (
  <Layout>
    <Box w="100%" h="100vh" bgColor={'hotpink'} />
  </Layout>
)

export const Default = Template.bind({})
