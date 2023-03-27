import Modal from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Layout } from '@components'
import { useDisclosure } from '@hooks'

export default {
  component: Modal,
  title: 'domain/base/Modal',
  parameters: {
    componentSubtitle: '공통 컴포넌트로 사용되는 모달 컴포넌트',
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
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = () => {
  const [showModal, setShowModal, toggle] = useDisclosure()

  return (
    <>
      <button onClick={toggle} className=" bg-violent_gradient text-gray-100">
        모달 나와라!
      </button>
      <Modal
        hasCloseButton={true}
        showModal={showModal}
        setShowModal={setShowModal}
      >
        <div className=" h-[168px] w-[290px] bg-gray-100 text-[80px] font-extrabold text-gray-700">
          안쪽
        </div>
      </Modal>
    </>
  )
}

export const Default = Template.bind({})
Default.args = {}
