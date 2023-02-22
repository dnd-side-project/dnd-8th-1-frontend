import PerformanceReviewSection from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Comment } from '@types'
export default {
  component: PerformanceReviewSection,
  title: 'Organisms/PerformanceReviewSection',
  parameters: {
    componentSubtitle: '공통 컴포넌트로 사용되는 컴포넌트',
  },

  decorators: [
    (Story) => (
      <div className="w-[375px]">
        <Story />
        <s></s>
      </div>
    ),
  ],
} as ComponentMeta<typeof PerformanceReviewSection>

const PERFORMANCE_REVIEW_DUMMY: Comment[] = [
  {
    content:
      '로렘 입숨은 출판이나 그래픽 디자인 분야에서 폰트, 타이포그래피, 레이아웃 같은 그래픽 요소나 시각적 연출을 보여줄 때 사용하는 표준 채우기 텍스트이다.',
    reviewId: 1,
    profile: {
      id: 1,
      name: '작성자이름',
    },
    createdDate: '2023-07-01T12:00:00',
  },
  {
    content:
      '로렘 입숨은 출판이나 그래픽 디자인 분야에서 폰트, 타이포그래피, 레이아웃 같은 그래픽 요소나 시각적 연출을 보여줄 때 사용하는 표준 채우기 텍스트이다.',
    reviewId: 2,
    profile: {
      id: 2,
      name: '작성자이름',
    },
    createdDate: '2023-07-01T12:00:00',
  },
]

const Template: ComponentStory<typeof PerformanceReviewSection> = () => (
  <PerformanceReviewSection
    startDate={''}
    reviews={PERFORMANCE_REVIEW_DUMMY}
    handleOnDelete={(reviewId) => alert(`${reviewId}번 리뷰를 삭제??`)}
    handleOnSubmit={(review) => console.log(review)}
  />
)

export const Default = Template.bind({})
Default.args = {}
