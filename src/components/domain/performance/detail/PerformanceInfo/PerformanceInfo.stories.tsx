import PerformanceInfo from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Center } from '@chakra-ui/react'

export default {
  component: PerformanceInfo,
  title: 'domain/performance/detail/PerformanceInfo',
  parameters: {
    componentSubtitle:
      '공연 상세 페이지에서 공연 시간과 장소를 알려주는 컴포넌트',
  },
  decorators: [
    (Story) => (
      <div className="h-[800px] w-[375px] bg-gray-900">
        <Center className="flex-col">
          <Story />
        </Center>
      </div>
    ),
  ],
} as ComponentMeta<typeof PerformanceInfo>

const Template: ComponentStory<typeof PerformanceInfo> = (args) => (
  <PerformanceInfo {...args} />
)

export const Default = Template.bind({})
Default.args = {
  startTime: '2023-02-25T17:00:00',
  address: '소환사의 협곡',
}
