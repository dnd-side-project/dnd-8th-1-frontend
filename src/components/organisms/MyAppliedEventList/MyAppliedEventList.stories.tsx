import MyAppliedEventList from '.'
import MyAppliedEventItem from './MyAppliedEventItem'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AppliedEvent } from '@types'

export default {
  component: MyAppliedEventList,
  title: 'Organisms/MyAppliedEventList',
  parameters: {
    componentSubtitle: '활동내역 페이지에서 사용되는 신청한 이벤트 리스트',
  },

  decorators: [
    (Story) => (
      <div className=" w-[375px] overflow-hidden bg-gray-900">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof MyAppliedEventList>

const MEET_ITEM_DUMMY: AppliedEvent = {
  id: 1,
  appliedAt: '2022-12-31T23:59:59',
  title:
    '저희 팀과 함께 콜라보 영상 촬영영저희 팀과 함께 콜라보 영상 촬저희 팀과 함께 콜라보 영상 촬',
  imgUrl: 'https://picsum.photos/500',
  profile: { name: '이벤트 주최자 이름' },
  isMatched: true,
  type: '콜라보',
}

const MEET_ITEMS_DUMMY: AppliedEvent[] = Array.from({ length: 15 }, (_, i) => {
  return {
    ...MEET_ITEM_DUMMY,
    id: i,
    imgUrl: `https://picsum.photos/500?random=${i}`,
    isMatched: i % 2 === 0,
  }
})

const Template: ComponentStory<typeof MyAppliedEventList> = (args) => (
  <MyAppliedEventList {...args} />
)

const SingleItem: ComponentStory<typeof MyAppliedEventList> = () => (
  <MyAppliedEventItem appliedEvent={MEET_ITEM_DUMMY} />
)

export const Default = Template.bind({})
Default.args = {
  myAppliedEvents: MEET_ITEMS_DUMMY,
}

export const Empty = Template.bind({})
Empty.args = {
  myAppliedEvents: [],
}

export const Item = SingleItem.bind({})
