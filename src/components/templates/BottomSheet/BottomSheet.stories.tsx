import BottomSheet from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Layout } from '@components'
import { useDisclosure } from '@hooks'

export default {
  component: BottomSheet,
  title: 'Templates/BottomSheet',
  parameters: {
    componentSubtitle: '공통 컴포넌트로 사용되는 바텀 시트 컴포넌트',
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
} as ComponentMeta<typeof BottomSheet>

const Template: ComponentStory<typeof BottomSheet> = () => {
  const [showBottomSheet, setShowBottomSheet, toggle] = useDisclosure()

  return (
    <>
      <button onClick={toggle} className=" bg-violent_gradient text-gray-100">
        바텀 시트 나와라!
      </button>
      <BottomSheet
        hasCloseButton={true}
        showBottomSheet={showBottomSheet}
        setShowBottomSheet={setShowBottomSheet}
      >
        <div className="h-[475px] bg-gray-100 text-[80px] font-extrabold text-gray-700">
          안쪽
        </div>
      </BottomSheet>
    </>
  )
}

export const Default = Template.bind({})
Default.args = {}
