import ConfirmModal from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useDisclosure } from '@hooks'
import { Layout } from '@components'

export default {
  component: ConfirmModal,
  title: 'common/ConfirmModal',
  parameters: {
    componentSubtitle: '확인 용도로 사용되는 모달 컴포넌트',
  },
  decorators: [
    (Story) => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
} as ComponentMeta<typeof ConfirmModal>

const Template: ComponentStory<typeof ConfirmModal> = () => {
  const [showModal, setShowModal, toggle] = useDisclosure()

  return (
    <>
      <button onClick={toggle}>모달 나와라!</button>
      <ConfirmModal
        showModal={showModal}
        setShowModal={setShowModal}
        handleOnSubmit={() => {
          console.log('submit 하면 보이는 액션')
        }}
        modalContent="이미지는 2MB를 초과할 수 없습니다."
        submitMessage="확인"
      />
    </>
  )
}

export const Default = Template.bind({})

const CloseButtonTemplate: ComponentStory<typeof ConfirmModal> = () => {
  const [showModal, setShowModal, toggle] = useDisclosure()

  return (
    <>
      <button onClick={toggle}>모달 나와라!</button>
      <ConfirmModal
        hasCloseButton
        showModal={showModal}
        setShowModal={setShowModal}
        handleOnSubmit={() => {
          console.log('submit 하면 보이는 액션')
        }}
        modalContent="이미지는 2MB를 초과할 수 없습니다."
        submitMessage="확인"
      />
    </>
  )
}

export const CloseButton = CloseButtonTemplate.bind({})
