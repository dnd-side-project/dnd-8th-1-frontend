import ProfileSubCategoryTab from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useState } from 'react'

export default {
  component: ProfileSubCategoryTab,
  title: 'domain/profile/history/ProfileSubCategoryTab',
  parameters: {
    componentSubtitle: '활동 내역에 사용되는 서브 카테고리 컴포넌트',
  },
  decorators: [
    (Story) => (
      <div className="h-[800px] w-[375px] bg-green p-[10px]">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ProfileSubCategoryTab>

const Meet: ComponentStory<typeof ProfileSubCategoryTab> = () => {
  const [selected, setSelected] = useState('등록')

  return (
    <div>
      <ProfileSubCategoryTab
        handleOnChange={(value) => {
          console.log(value)
          setSelected(value)
        }}
        defaultType={'만나기'}
      />
      <p className="mt-[30px] text-headline text-gray-900">{selected} 선택됨</p>
    </div>
  )
}

const Performance: ComponentStory<typeof ProfileSubCategoryTab> = () => {
  const [selected, setSelected] = useState('등록된 공연')

  return (
    <div>
      <ProfileSubCategoryTab
        handleOnChange={(value) => {
          console.log(value)
          setSelected(value)
        }}
        defaultType={'공연'}
      />
      <p className="mt-[30px] text-headline text-gray-900">{selected} 선택됨</p>
    </div>
  )
}

export const MeetDefault = Meet.bind({})
export const PerformanceDefault = Performance.bind({})
