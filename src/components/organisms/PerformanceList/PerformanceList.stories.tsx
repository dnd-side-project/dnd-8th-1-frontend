import PerformanceList from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { GenreTypes, RegionTypes } from '@types'

export default {
  component: PerformanceList,
  title: 'Organisms/PerformanceList',
  parameters: {
    componentSubtitle: '공연 정보 리스트 컴포넌트',
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

const Template: ComponentStory<typeof PerformanceList> = () => {
  const DUMMY = {
    performTitle: '1월 부산에서 공연할 예정인 혁오 밴드 입니다!!',
    performImg: 'https://picsum.photos/96/110',
    performStartDate: '2021.01.01',
    performLocation: '부산' as RegionTypes,
    performGenres: ['힙합'] as GenreTypes[],
    profile: {
      id: '1',
      imgUrl: 'https://picsum.photos/96/110',
      name: '혁오 밴드(오혁, 임동건, 임현제, 이인우)',
    },
  }
  const PERFORMANCE_DUMMY = [
    { performId: '1', ...DUMMY },
    { performId: '2', ...DUMMY },
    { performId: '3', ...DUMMY },
  ]

  const props = {
    performances: PERFORMANCE_DUMMY,
  }

  return <PerformanceList {...props} />
}

export const Default = Template.bind({})

const EmptyTemplate: ComponentStory<typeof PerformanceList> = (args) => {
  return <PerformanceList {...args} />
}

export const EmptyList = EmptyTemplate.bind({})

EmptyList.args = {
  performances: [],
}
