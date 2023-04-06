import MeetBanner from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  component: MeetBanner,
  title: 'domain/meet/main/MeetBanner',
  parameters: {
    componentSubtitle:
      '만나기 페이지 (콜라보, 쉐어) 에서 사용되는 배너 컴포넌트',
  },
} as ComponentMeta<typeof MeetBanner>

const Template: ComponentStory<typeof MeetBanner> = () => <MeetBanner />

export const Default = Template.bind({})
