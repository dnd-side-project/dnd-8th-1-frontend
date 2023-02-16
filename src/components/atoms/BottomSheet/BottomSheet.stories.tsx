import BottomSheet from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Layout } from '@components'
import { useBottomSheet } from '@hooks'

export default {
  component: BottomSheet,
  title: 'Atoms/BottomSheet',
  parameters: {
    componentSubtitle: '공통 컴포넌트로 사용되는 바텀 시트 컴포넌트',
  },
  decorators: [
    (Story) => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
} as ComponentMeta<typeof BottomSheet>

const Template: ComponentStory<typeof BottomSheet> = () => {
  const [showBottomSheet, setShowBottomSheet, toggle] = useBottomSheet()

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
