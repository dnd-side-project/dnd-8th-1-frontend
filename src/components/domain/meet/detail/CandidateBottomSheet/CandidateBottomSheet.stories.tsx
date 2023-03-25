import CandidateBottomSheet from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useDisclosure } from '@hooks'
import { Layout } from '@components'
export default {
  component: CandidateBottomSheet,
  title: 'domain/meet/detail/CandidateBottomSheet',
  parameters: {
    componentSubtitle: '만나기 신청을 위한 바텀 시트 컴포넌트',
  },
  decorators: [
    (Story) => (
      <Layout>
        <main className="h-[100vh] bg-gray-500">
          <Story />
        </main>
      </Layout>
    ),
  ],
} as ComponentMeta<typeof CandidateBottomSheet>

const Template: ComponentStory<typeof CandidateBottomSheet> = (args) => {
  const [showBottomSheet, setShowBottomSheet, handleToggle] = useDisclosure()
  const props = {
    showBottomSheet,
    setShowBottomSheet,
  }
  return (
    <>
      <button onClick={handleToggle}>신청하기</button>
      <CandidateBottomSheet {...args} {...props} />
    </>
  )
}

export const Default = Template.bind({})
Default.args = {
  openchatUrl: 'https://open.kakao.com/o/gb5b3b3a',
}
