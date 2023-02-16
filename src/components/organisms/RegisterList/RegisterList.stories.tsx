import RegisterList from '.'
import RegisterListItem from './RegisterListItem'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { RegionTypes } from '@types'
export default {
  component: RegisterList,
  title: 'Organisms/RegisterList',
  decorators: [
    (Story) => (
      <div className="w-[375px]">
        <Story />
      </div>
    ),
  ],
  parameters: {
    componentSubtitle:
      '만나기 상세 - 게시자 에 사용되는 참가자 리스트 컴포넌트',
  },
} as ComponentMeta<typeof RegisterList>

const REGISTER_ITEM_DUMMY = {
  profile: {
    id: 1,
    imgUrl: 'https://picsum.photos/500/500',
    name: 'KARA', // 프로필 댄스팀 이름
    description: '안녕하세요! 저는 눈누난나카라 난나카라 나카라카카카라', // 프로필 상세 설명
    openChatUrl: 'https://www.allsilver.dev/', // 카카오 오픈 채팅 주소
  },
  isMatched: true,
  location: '부산' as RegionTypes, // 지원자 활동 지역
}

const REGISTER_ITEMS = Array.from({ length: 15 }, (v, i) => {
  return {
    ...REGISTER_ITEM_DUMMY,
    id: REGISTER_ITEM_DUMMY.profile.id + i,
    isMatched: i % 2 === 0 ? true : false,
  }
})

const RegisterListTemplate: ComponentStory<typeof RegisterList> = (args) => (
  <RegisterList {...args} />
)

export const RegisterItemListDefault = RegisterListTemplate.bind({})
RegisterItemListDefault.args = {
  registerItems: REGISTER_ITEMS,
}

const RegisterItem: ComponentStory<typeof RegisterListItem> = () => {
  return <RegisterListItem registerItem={REGISTER_ITEM_DUMMY} />
}

export const RegisterSingleItem = RegisterItem.bind({})
RegisterSingleItem.args = {}
