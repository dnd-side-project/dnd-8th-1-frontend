import MainProfileList from '.'
import MainProfileItem from './MainProfileItem'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ProfileMain } from '@types'

export default {
  component: MainProfileList,
  title: 'domain/main/MainProfileList',
  parameters: {
    componentSubtitle: '메인에서 사용되는 프로필 리스트',
  },
  decorators: [
    (Story) => (
      <div className="h-[800px] w-[375px] bg-gray-900">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof MainProfileList>

const DUMMY_PROFILE: ProfileMain = {
  id: 1,
  imgUrl: 'https://picsum.photos/500',
  name: 'HOOK',
  type: '댄서',
}

const DUMMY_PROFILE_LIST: ProfileMain[] = Array.from({ length: 6 }, (_, i) => {
  return {
    id: i + 1,
    imgUrl: `https://picsum.photos/500?random=${i + 1}`,
    name: `프로필${i + 1}`,
    type: i % 2 == 0 ? '댄서' : '댄스팀',
  }
})
const ListTemplate: ComponentStory<typeof MainProfileList> = () => (
  <MainProfileList profileItems={DUMMY_PROFILE_LIST} />
)

const ItemTemplate: ComponentStory<typeof MainProfileItem> = () => (
  <MainProfileItem profile={DUMMY_PROFILE} />
)

export const Default = ListTemplate.bind({})
Default.args = {}

export const ProfileItem = ItemTemplate.bind({})
ItemTemplate.args = {
  profile: DUMMY_PROFILE,
}
