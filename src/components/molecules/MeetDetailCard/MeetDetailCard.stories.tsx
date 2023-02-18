import MeetDetailCard from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Layout } from '@components'

export default {
  component: MeetDetailCard,
  title: 'Molecules/MeetDetailCard',
  parameters: {
    componentSubtitle: '만나기 상세 페이지에서 사용되는 카드 컴포넌트',
  },
  decorators: [
    (Story) => (
      <div className="flex h-[200px] w-[375px] items-center justify-center bg-gray-900">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof MeetDetailCard>

const Template: ComponentStory<typeof MeetDetailCard> = (args) => (
  <MeetDetailCard {...args} />
)

export const Default = Template.bind({})
Default.args = {
  recruitType: '댄서',
  recruitCount: 3,
  deadline: '2023-03-01T12:00:00',
  location: '서울',
}
