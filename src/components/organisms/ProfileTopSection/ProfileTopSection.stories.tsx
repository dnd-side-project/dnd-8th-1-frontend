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
  id: 1,
  type: '댄서' as RecruitmentType,
  imgUrl: 'https://picsum.photos/500',
  name: '아이키',
  genres: ['힙합'] as GenreTypes[],
  location: '부산' as RegionTypes,
  startDate: '2011-01-05T12:00:00',
}

const Template: ComponentStory<typeof ProfileTopSection> = (args) => {
  const { imgUrl, name, genres, location, startDate, id, type } = DUMMY_PROFILE
  return (
    <ProfileTopSection
      imgUrl={imgUrl}
      name={name}
      genres={genres}
      location={location}
      startDate={startDate}
      id={id}
      type={type}
    />
  )
}

export const Default = Template.bind({})
Default.args = {}
