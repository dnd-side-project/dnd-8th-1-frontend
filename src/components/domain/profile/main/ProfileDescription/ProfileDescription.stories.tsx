import ProfileDescription from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  component: ProfileDescription,
  title: 'domain/profile/main/ProfileDescription',
  parameters: {
    componentSubtitle: '프로필 메인 페이지에서 description에 사용되는 컴포넌트',
  },

  decorators: [
    (Story) => (
      <div className="h-[800px] w-[375px]">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ProfileDescription>

const LONG_DUMMY =
  '로렘 입숨은 출판이나 그래픽 디자인 분야에서 폰트, 타이포그래피, \n\n\n레이아웃 같은 그래픽 요소나 시각적 연출을 보여줄 때 사용하는 표준 채우기 텍스트로, 최종 결과를 더 로렘 입숨은 출판이나 그래픽 디자인 분야에서 폰트, 타이포그래피, 레이아웃 같은 그래픽 요소나 시각적 연출을 보여줄 때 사용하는 표준 채우기 텍스트로, 최종 결과를 더 로렘 입숨은 출판이나 그래픽 디자인 분야에서 폰트, 타이포그래피, 레이아웃 같은 그래픽 요소나 시각적 연출을 보여줄 때 사용하는 표준 채우기 텍스트로, 최종 결과를 더'

const SHORT_DUMMY = '안녕하세요'

const Template: ComponentStory<typeof ProfileDescription> = (args) => (
  <ProfileDescription {...args} />
)

export const Long = Template.bind({})
Long.args = {
  description: LONG_DUMMY,
}

export const Short = Template.bind({})
Short.args = {
  description: SHORT_DUMMY,
}
