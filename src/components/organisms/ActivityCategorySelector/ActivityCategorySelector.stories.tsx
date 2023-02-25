import ActivityCategorySelector from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useState } from 'react'

export default {
  component: ActivityCategorySelector,
  title: 'Organisms/ActivityCategorySelector',
  parameters: {
    componentSubtitle: '활동 내역에 사용되는 서브 카테고리 컴포넌트',
  },
  decorators: [
    (Story) => (
      <div className="h-[800px] w-[375px] bg-gray-900 p-[10px]">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ActivityCategorySelector>

const Template: ComponentStory<typeof ActivityCategorySelector> = () => {
  const [category, setCategory] = useState('만나기')
  const [subCategory, setSubcategory] = useState('등록')

  return (
    <div>
      <ActivityCategorySelector
        handleOnChangeMainCategory={(value: string) => {
          console.log(value)
          setCategory(value)
        }}
        handleOnChangeSubCategory={(value: string) => {
          console.log(value)
          setSubcategory(value)
        }}
      />
      <p className="mt-[30px] text-headline text-gray-100">{category} 선택됨</p>
      <p className="mt-[30px] text-headline text-gray-100">
        {subCategory} 선택됨
      </p>
    </div>
  )
}

export const Default = Template.bind({})
