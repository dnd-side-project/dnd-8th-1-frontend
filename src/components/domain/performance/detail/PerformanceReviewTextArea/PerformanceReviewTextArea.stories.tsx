import PerformanceReviewTextArea from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  component: PerformanceReviewTextArea,
  title: 'domain/performance/detail/PerformanceReviewTextArea',
  parameters: {
    componentSubtitle: '공연 상세 페이지의 리뷰 쓰기에 사용되는 컴포넌트',
  },

  decorators: [
    (Story) => (
      <div className="w-[375px]">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof PerformanceReviewTextArea>

const Template: ComponentStory<typeof PerformanceReviewTextArea> = () => (
  <PerformanceReviewTextArea
    handleOnSubmit={(reviewContent) => console.log(reviewContent)}
  />
)

export const Default = Template.bind({})
Default.args = {}
