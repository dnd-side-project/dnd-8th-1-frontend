import MainProfileSection from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ProfileMain } from '@types'

export default {
  component: MainProfileSection,
  title: 'domain/main/MainProfileSection',
  parameters: {
    componentSubtitle: '메인 페이지의 프로필 섹션',
  },
  decorators: [
    (Story) => (
      <div className="w-[375px] overflow-hidden bg-gray-900">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof MainProfileSection>

const DUMMY_PROFILE_LIST: ProfileMain[] = Array.from({ length: 6 }, (_, i) => {
  return {
    id: i + 1,
    imgUrl: `https://picsum.photos/500?random=${i + 1}`,
    name: `프로필${i + 1}`,
    type: i % 2 == 0 ? '댄서' : '댄스팀',
  }
})

const Template: ComponentStory<typeof MainProfileSection> = () => (
  <MainProfileSection profileItems={DUMMY_PROFILE_LIST} />
)

export const Default = Template.bind({})
Default.args = {}
