import CancelSubmitModal from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useDisclosure } from '@hooks'
import { Layout } from '@components'

export default {
  component: CancelSubmitModal,
  title: 'domain/base/CancelSubmitModal',
  parameters: {
    componentSubtitle: '제출과 취소가 있는 모달',
  },
  decorators: [
    (Story) => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
} as ComponentMeta<typeof CancelSubmitModal>

const Template: ComponentStory<typeof CancelSubmitModal> = () => {
  const [showModal, setShowModal, toggle] = useDisclosure()

  return (
    <>
      <button onClick={toggle}>모달 나와라!</button>
      <CancelSubmitModal
        showModal={showModal}
        setShowModal={setShowModal}
        handleOnSubmit={() => {
          // TODO: 모집 마감 api 호출
          console.log('submit 하면 보이는 액션')
        }}
        modalContent="모집을 마감하시겠어요?"
        submitMessage="네, 마감할게요"
      />
    </>
  )
}

export const Default = Template.bind({})
Default.args = {}
