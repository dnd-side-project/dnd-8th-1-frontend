import { ComponentStory, ComponentMeta } from '@storybook/react'
import { GenreTypes, RegionTypes } from '@types'
import PerformanceEntireList from '.'

export default {
  component: PerformanceEntireList,
  title: 'domain/performance/main/PerformanceEntireList',
  parameters: {
    componentSubtitle: '날짜 별 공연 정보 리스트 컴포넌트',
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
} as ComponentMeta<typeof PerformanceEntireList>

const Template: ComponentStory<typeof PerformanceEntireList> = (args) => {
  const DUMMY_1 = {
    title: '1월 부산에서 공연할 예정인 혁오 밴드 입니다!!',
    imgUrl: 'https://picsum.photos/96/110',
    startDate: '2023-02-11T12:00:00',
    location: '부산' as RegionTypes,
    genres: ['힙합'] as GenreTypes[],
    profile: {
      id: '1',
      imgUrl: 'https://picsum.photos/96/110',
      name: '혁오 밴드(오혁, 임동건, 임현제, 이인우)',
    },
  }
  const DUMMY_2 = {
    title: '1월 부산에서 공연할 예정인 혁오 밴드 입니다!!',
    imgUrl: 'https://picsum.photos/96/110',
    startDate: '2023-02-12T12:00:00',
    location: '부산' as RegionTypes,
    genres: ['힙합'] as GenreTypes[],
    profile: {
      id: '1',
      imgUrl: 'https://picsum.photos/96/110',
      name: '혁오 밴드(오혁, 임동건, 임현제, 이인우)',
    },
  }
  const PERFORMANCE_DUMMY = [
    { performId: '1', ...DUMMY_1 },
    { performId: '2', ...DUMMY_1 },
    { performId: '3', ...DUMMY_2 },
    { performId: '4', ...DUMMY_2 },
  ]
  const props = {
    performances: PERFORMANCE_DUMMY,
  }
  return <PerformanceEntireList {...props} {...args} />
}

export const Default = Template.bind({})

const EmptyTemplate: ComponentStory<typeof PerformanceEntireList> = (args) => {
  return <PerformanceEntireList {...args} />
}

export const EmptyList = EmptyTemplate.bind({})

EmptyList.args = {
  performances: [],
}
