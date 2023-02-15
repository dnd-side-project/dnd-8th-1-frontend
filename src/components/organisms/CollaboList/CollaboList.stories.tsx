import CollaboList from '.'
import CollaboListItem from './CollaboListItem'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Layout } from '@components'

import { Box } from '@chakra-ui/react'

export default {
  component: CollaboList,
  title: 'Organisms/CollaboList',
  parameters: {
    componentSubtitle: '만나기 페이지에서 사용될 콜라보 리스트',
  },

  decorators: [
    (Story) => (
      <div className="w-[375px] bg-gray-900">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof CollaboList>

const COLLABO_ITEM_DUMMY = {
  id: 1,
  title:
    '저희 팀과 함께 콜라보 영상 어쩌고 저쩌고 아주 긴 제목을 가진 콜라보 글글글글글',
  location: '부산',
  type: '콜라보',
  imgUrl: 'https://picsum.photos/200/300',
  deadline: '2023-02-19T12:00:00',
  profile: {
    id: '프로필ID',
    imgUrl: 'https://picsum.photos/200',
    name: 'HOOK',
  },
}

const COLLABO_ITEMS = Array.from({ length: 15 }, (v, i) => {
  return { ...COLLABO_ITEM_DUMMY, id: COLLABO_ITEM_DUMMY.id + i }
})

const CollaboItem: ComponentStory<typeof CollaboListItem> = () => {
  return <CollaboListItem collaboListItem={COLLABO_ITEM_DUMMY} />
}

const CollaboItemListTemplate: ComponentStory<typeof CollaboList> = (args) => (
  <CollaboList collaboItems={COLLABO_ITEMS} />
)

export const CollaboItemList = CollaboItemListTemplate.bind({})

export const CollaboItemDefault = CollaboItem.bind({})
