import ModalWithSingleButton from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useDisclosure } from '@hooks'
import { Layout, WelcomeModalContent } from '@components'

export default {
  component: ModalWithSingleButton,
  title: 'Templates/ModalWithSingleButton',
  parameters: {
    componentSubtitle: '버튼 하나있는 모달',
  },
  decorators: [
    (Story) => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
} as ComponentMeta<typeof ModalWithSingleButton>

const Template: ComponentStory<typeof ModalWithSingleButton> = () => {
  const [showModal, setShowModal, toggle] = useDisclosure()

  return (
    <>
      <button onClick={toggle}>모달 나와라!</button>
      <ModalWithSingleButton
        showModal={showModal}
        setShowModal={setShowModal}
        handleOnClick={() => {
          console.log('버튼을 클릭함')
        }}
        submitMessage="프로필 등록하기"
      >
        <WelcomeModalContent />
      </ModalWithSingleButton>
    </>
  )
}

export const Default = Template.bind({})
