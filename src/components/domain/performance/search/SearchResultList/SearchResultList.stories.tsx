import { ComponentStory, ComponentMeta } from '@storybook/react'
import { GenreTypes, RegionTypes, SearchResult } from '@types'
import SearchResultList from '.'

export default {
  component: SearchResultList,
  title: 'domain/performance/search/SearchResultList',
  parameters: {
    componentSubtitle: '검색 결과 리스트 컴포넌트',
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
} as ComponentMeta<typeof SearchResultList>

const Template: ComponentStory<typeof SearchResultList> = () => {
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
      id: 1,
      imgUrl: 'https://picsum.photos/96/110',
      name: '혁오 밴드(오혁, 임동건, 임현제, 이인우)',
    },
  }
  const SEARCH_LIST_DUMMY = [
    { id: 1, ...DUMMY_1 },
    { id: 2, ...DUMMY_1 },
    { id: 3, ...DUMMY_2 },
    { id: 4, ...DUMMY_2 },
  ] as SearchResult[]
  const props = {
    searchResultList: SEARCH_LIST_DUMMY,
  }
  return <SearchResultList {...props} />
}

export const Default = Template.bind({})

const EmptyTemplate: ComponentStory<typeof SearchResultList> = (args) => {
  return <SearchResultList {...args} />
}

export const EmptyList = EmptyTemplate.bind({})

EmptyList.args = {
  searchResultList: [],
}
