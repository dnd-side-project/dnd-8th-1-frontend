import MyPerformanceList from '.'
import MyPerformanceItem from './MyPerformanceItem'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MyPerformance } from '@types'

export default {
  component: MyPerformanceList,
  title: 'Organisms/MyPerformanceList',
  parameters: {
    componentSubtitle: '활동 내역 페이지의 내가 작성한 공연 리스트',
  },
  decorators: [
    (Story) => (
      <div className=" w-[375px] overflow-hidden bg-gray-900">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof MyPerformanceList>

const MY_PERFORMANCE: MyPerformance = {
  id: 1,
  createdAt: '2022-12-31T23:59:59',
  title:
    '저희 팀과 함께 콜라보 영상 촬영영저희 팀과 함께 콜라보 영상 촬저희 팀과 함께 콜라보 영상 촬',
  imgUrl: 'https://picsum.photos/500',
  profile: { name: '내이름' },
}

const MY_PERFORMANCE_ITEMS: MyPerformance[] = Array.from(
  { length: 15 },
  (_, i) => {
    return {
      ...MY_PERFORMANCE,
      id: i,
      imgUrl: `https://picsum.photos/500?random=${i}`,
    }
  },
)

const Template: ComponentStory<typeof MyPerformanceList> = (args) => (
  <MyPerformanceList {...args} />
)

const SingleItem: ComponentStory<typeof MyPerformanceList> = () => (
  <MyPerformanceItem myPerformanceItem={MY_PERFORMANCE} />
)

export const Default = Template.bind({})
Default.args = {
  myPerformanceItems: MY_PERFORMANCE_ITEMS,
}

export const Empty = Template.bind({})
Empty.args = {
  myPerformanceItems: [],
}

export const Item = SingleItem.bind({})
