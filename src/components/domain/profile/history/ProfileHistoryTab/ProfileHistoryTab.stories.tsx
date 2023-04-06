import ProfileHistoryTab from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useState } from 'react'

export default {
  component: ProfileHistoryTab,
  title: 'domain/profile/history/ProfileHistoryTab',
  parameters: {
    componentSubtitle: '활동 내역에 사용되는 탭 컴포넌트',
  },
  decorators: [
    (Story) => (
      <div className="h-[800px] w-[375px] bg-gray-900 p-[10px]">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ProfileHistoryTab>

const Template: ComponentStory<typeof ProfileHistoryTab> = () => {
  const [selected, setSelected] = useState('만나기')

  return (
    <div>
      <ProfileHistoryTab
        handleOnChange={(value) => {
          console.log(value)
          setSelected(value)
        }}
      />
      <p className="mt-[30px] text-headline text-gray-100">{selected} 선택됨</p>
    </div>
  )
}
export const Default = Template.bind({})
Default.args = {}
