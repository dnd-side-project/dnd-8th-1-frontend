import ImageWithDeadLine from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  component: ImageWithDeadLine,
  title: 'Molecules/ImageWithDeadLine',
  argTypes: {
    deadLine: {
      defaultValue: '2023-03-01T12:00:00',
      options: {
        defaultValue: '2023-02-20T12:00:00',
        isdead: '2021-03-01T12:00:00', // 마감된 경우
        tooLongDdayed: '2023-12-01T12:00:00', // 일주일 이상 남은 경우
      },
      control: { type: 'radio' },
    },
    imgUrl: { defaultValue: 'https://picsum.photos/200/300' },
  },
  parameters: {
    componentSubtitle: '디데이를 함꼐 표시해주는 이미지 컴포넌트 ',
  },
} as ComponentMeta<typeof ImageWithDeadLine>

const Template: ComponentStory<typeof ImageWithDeadLine> = (args) => (
  <ImageWithDeadLine {...args} />
)

export const Default = Template.bind({})
