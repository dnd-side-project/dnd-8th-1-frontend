import CandidateModal from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useDisclosure } from '@hooks'
import { Layout } from '@components'

export default {
  component: CandidateModal,
  title: 'Organisms/CandidateModal',
  parameters: {
    componentSubtitle: '신청 완료 시 등장하는 모달 컴포넌트',
  },
  decorators: [
    (Story) => (
      <Layout>
        <main className="h-[100vh] bg-gray-100">
          <Story />
        </main>
      </Layout>
    ),
  ],
} as ComponentMeta<typeof CandidateModal>

const Template: ComponentStory<typeof CandidateModal> = (args) => {
  const [showModal, setShowModal, handleToggle] = useDisclosure()
  const props = {
    showModal,
    setShowModal,
  }
  return (
    <>
      <button className="w-[50px] bg-gray-900" onClick={handleToggle}>
        클릭
      </button>
      <CandidateModal {...args} {...props} />
    </>
  )
}
export const Default = Template.bind({})
Default.args = {
  title: '블랙핑크 오늘 공연 할 예정입니다!',
}
