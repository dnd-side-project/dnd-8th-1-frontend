import CollaboList from '.'
import CollaboListItem from './CollaboListItem'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MeetTypes, RegionTypes } from '@types'
import { Meet } from '@types'

export default {
  component: CollaboList,
  title: 'Organisms/CollaboList',
  parameters: {
    componentSubtitle: '만나기 페이지에서 사용될 콜라보 리스트',
  },

  decorators: [(Story) => <Story />],
} as ComponentMeta<typeof CollaboList>

const COLLABO_ITEM_DUMMY: Meet = {
  id: 1,
  title:
    '저희 팀과 함께 콜라보 영상 어쩌고 저쩌고 아주 긴 제목을 가진 콜라보 글글글글글',
  location: '부산' as RegionTypes,
  type: '콜라보' as MeetTypes,
  imgUrl: 'https://picsum.photos/200/300',
  deadline: '2023-02-19T12:00:00',
  profile: {
    id: '프로필ID',
    imgUrl: 'https://picsum.photos/200',
    name: 'HOOK',
  },
}

const CollaboItem: ComponentStory<typeof CollaboListItem> = () => {
  const { id, title, location, type, imgUrl, deadline, profile } =
    COLLABO_ITEM_DUMMY

  return (
    <CollaboListItem
      id={id}
      title={title}
      location={location}
      type={type}
      imgUrl={imgUrl}
      deadline={deadline}
      profile={profile}
    />
  )
}

const Template: ComponentStory<typeof CollaboList> = () => <CollaboList />

export const Default = Template.bind({})

export const CollaboItemDefault = CollaboItem.bind({})

Default.args = {}
