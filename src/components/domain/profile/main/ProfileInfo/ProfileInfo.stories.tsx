import ProfileInfo from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { GenreTypes, RegionTypes } from '@types'

export default {
  component: ProfileInfo,
  title: 'domain/profile/main/ProfileInfo',
  parameters: {
    componentSubtitle: '프로필 페이지에 사용자는 사용자 프로필 정보 ',
  },
  decorators: [
    (Story) => (
      <div className="h-[800px] w-[375px] bg-gray-900">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ProfileInfo>

const DUMMY_PROFILE = {
  imgUrl: 'https://picsum.photos/500',
  name: '아이키',
  genres: ['힙합'] as GenreTypes[],
  location: '부산' as RegionTypes,
  startDate: '2011-01-05T12:00:00',
}

const Template: ComponentStory<typeof ProfileInfo> = (args) => {
  const { imgUrl, name, genres, location, startDate } = DUMMY_PROFILE
  return (
    <ProfileInfo
      imgUrl={imgUrl}
      name={name}
      genres={genres}
      location={location}
      startDate={startDate}
    />
  )
}

export const Default = Template.bind({})
Default.args = {}
