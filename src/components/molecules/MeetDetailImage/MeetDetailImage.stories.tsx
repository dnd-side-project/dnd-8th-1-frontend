import MeetDetailImage from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  component: MeetDetailImage,
  title: 'Molecules/MeetDetailImage',
  parameters: {
    componentSubtitle: '만나기 상세 페이지에서 사용되는 이미지 컴포넌트',
  },
} as ComponentMeta<typeof MeetDetailImage>

const Template: ComponentStory<typeof MeetDetailImage> = (args) => (
  <MeetDetailImage {...args} />
)

export const Default = Template.bind({})

Default.args = {
  imgUrl: 'https://picsum.photos/400/500',
  deadline: '2023-12-25T17:00:00',
}

export const EndDate = Template.bind({})

EndDate.args = {
  imgUrl: 'https://picsum.photos/400/500',
  deadline: '2023-02-15T17:00:00',
}
