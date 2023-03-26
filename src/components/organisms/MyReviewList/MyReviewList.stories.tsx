import MyReviewList from '.'
import MyReviewItem from './MyReviewItem'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MyReview } from '@types'

export default {
  component: MyReviewList,
  title: 'Organisms/MyReviewList',
  parameters: {
    componentSubtitle: '활동 내역의 내가 작성한 리뷰 리스트',
  },

  decorators: [
    (Story) => (
      <div className="w-[375px] bg-gray-900">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof MyReviewList>

const DUMMY_REVIEW: MyReview = {
  id: 1,
  createdAt: '2022-12-31T23:59:59',
  content:
    '로렘 입숨은 출판이나 그래픽 디자인 분야에서 폰트, 타이포래피, 레이아웃 같은 그래픽 요소나 시각적 연출을 보여줄 때 사용하는 표준 채우기 텍스트이다로렘 입숨은 출판이나 그래픽 디자인 분야에서 폰트, 타이포래피, 레이아웃 같은 그래픽 요소나 시각적 연출을 보여줄 때 사용하는 표준 채우기 텍스트이다로렘 입숨은 출판이나 그래픽 디자인 분야에서 폰트, 타이포래피, 레이아웃 같은 그래픽 요소나 시각적 연출을 보여줄 때 사용하는 표준 채우기 텍스트이다',
  performance: {
    id: 1,
    title: '공연: 여기에 제목',
  },
}

const DUMMY_REVIEWS: MyReview[] = Array.from({ length: 15 }, (_, i) => {
  return {
    ...DUMMY_REVIEW,
    id: i,
  }
})

const Template: ComponentStory<typeof MyReviewList> = (args) => (
  <MyReviewList {...args} />
)

const ItemTemplate: ComponentStory<typeof MyReviewItem> = () => (
  <MyReviewItem myReview={DUMMY_REVIEW} />
)

export const Default = Template.bind({})
Default.args = {
  myReviews: DUMMY_REVIEWS,
}

export const Empty = Template.bind({})
Empty.args = {
  myReviews: [],
}

export const Item = ItemTemplate.bind({})
