import WrittenEventList from '.'
import WrittenEventItem from './WrittenEventItem'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { WrittenEvent } from '@types'

export default {
  component: WrittenEventList,
  title: 'Organisms/WrittenEventList',
  parameters: {
    componentSubtitle: '공통 컴포넌트로 사용되는 컴포넌트',
  },
  decorators: [
    (Story) => (
      <div className=" w-[375px] overflow-hidden bg-gray-900">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof WrittenEventList>

const MEET_ITEM_DUMMY: WrittenEvent = {
  id: 1,
  createdAt: '2022-12-31T23:59:59',
  title:
    '저희 팀과 함께 콜라보 영상 촬영영저희 팀과 함께 콜라보 영상 촬저희 팀과 함께 콜라보 영상 촬',
  imgUrl: 'https://picsum.photos/500',
  profile: { name: '이벤트 주최자 이름' },
  isMatched: true,
  type: '콜라보',
}

const MEET_ITEMS_DUMMY: WrittenEvent[] = Array.from({ length: 15 }, (_, i) => {
  return {
    ...MEET_ITEM_DUMMY,
    id: i,
    imgUrl: `https://picsum.photos/500?random=${i}`,
    isMatched: i % 2 === 0,
  }
})

const Template: ComponentStory<typeof WrittenEventList> = () => (
  <WrittenEventList writtenEventItems={MEET_ITEMS_DUMMY} />
)

const SingleItem: ComponentStory<typeof WrittenEventList> = () => (
  <WrittenEventItem writtenEventItem={MEET_ITEM_DUMMY} />
)

export const Default = Template.bind({})
export const Item = SingleItem.bind({})
