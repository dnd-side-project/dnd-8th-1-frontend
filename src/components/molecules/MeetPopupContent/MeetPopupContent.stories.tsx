import MeetPopupContent from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  component: MeetPopupContent,
  title: 'Molecules/MeetPopupContent',
  parameters: {
    componentSubtitle: '유형 선택을 위한 컴포넌트',
  },
} as ComponentMeta<typeof MeetPopupContent>

const Template: ComponentStory<typeof MeetPopupContent> = () => (
  <MeetPopupContent
    handleOnClick={(selected: string) => alert(`${selected}가 선택!`)}
  />
)

export const Default = Template.bind({})
Default.args = {}
