import ProfileTopSection from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { GenreTypes, RecruitmentType, RegionTypes } from '@types'

export default {
  component: ProfileTopSection,
  title: 'Organisms/ProfileTopSection',
  parameters: {
    componentSubtitle: '프로필 페이지에 상단 섹션',
  },
  decorators: [
    (Story) => (
      <div className="h-[800px] w-[375px] bg-gray-900">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ProfileTopSection>

const DUMMY_PROFILE = {
  userId: 1,
  recruitmentType: '댄서' as RecruitmentType,
  imgUrl: 'https://picsum.photos/500',
  name: '아이키',
  genres: ['힙합'] as GenreTypes[],
  location: '부산' as RegionTypes,
  career: '2011-01-05T12:00:00',
}

const Template: ComponentStory<typeof ProfileTopSection> = (args) => {
  const { imgUrl, name, genres, location, career, userId, recruitmentType } =
    DUMMY_PROFILE
  return (
    <ProfileTopSection
      imgUrl={imgUrl}
      name={name}
      genres={genres}
      location={location}
      career={career}
      userId={userId}
      recruitmentType={recruitmentType}
    />
  )
}

export const Default = Template.bind({})
Default.args = {}
