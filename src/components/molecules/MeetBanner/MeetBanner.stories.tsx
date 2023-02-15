import MeetBanner from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

/**
 * 스토리북 확인을 위한 샘플 파일입니다.
 */
export default {
  component: MeetBanner,
  title: 'Molecules/MeetBanner',
  parameters: {
    componentSubtitle:
      '만나기 페이지 (콜라보, 쉐어) 에서 사용되는 배너 컴포넌트',
  },
  /**
   * 컴포넌트에 대해 Container가 필요할 경우 decorators에 추가하면 됩니다.
   */
  //   decorators: [
  //     (Story) => (
  //       <div className="bg-blue-200 h-10 w-10">
  //         <Story />
  //       </div>
  //     ),
  //   ],
} as ComponentMeta<typeof MeetBanner>

const Template: ComponentStory<typeof MeetBanner> = () => <MeetBanner />

export const Default = Template.bind({})
Default.args = {}
