import PerformanceList from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Layout } from '@components'

/**
 * 스토리북 확인을 위한 샘플 파일입니다.
 */
export default {
  component: PerformanceList,
  title: 'Organisms/PerformanceList',
  parameters: {
    componentSubtitle: 'PerformanceList 컴포넌트',
  },
  decorators: [
    (Story) => (
      <div className="w-[375px]">
        <div className="flex w-full flex-col items-center bg-gray-900 py-[18px]">
          <Story />
        </div>
      </div>
    ),
  ],
} as ComponentMeta<typeof PerformanceList>

const DUMMY = {
  performId: '1',
  performTitle: '1월 부산에서 공연할 예정인 혁오 밴드 입니다!!',
  performImg: 'https://picsum.photos/96/110',
  performStartDate: '2021-01-01',
  performLocation: '부산',
  performGenres: ['힙합'],
  profile: {
    id: '1',
    imgUrl: 'https://picsum.photos/96/110',
    name: '혁오 밴드(오혁, 임동건, 임현제, 이인우)',
  },
}

const Template: ComponentStory<typeof PerformanceList> = (args) => {
  return <PerformanceList {...args} />
}

export const Default = Template.bind({})

Default.args = {
  performances: Array(4).fill(DUMMY),
}

export const EmptyList = Template.bind({})

EmptyList.args = {
  performances: [],
}
