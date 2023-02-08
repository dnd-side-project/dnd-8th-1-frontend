import StatusPopupContent from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  component: StatusPopupContent,
  title: 'Molecules/StatusPopupContent',
  parameters: {
    componentSubtitle: '만나기 내 수정/삭제 팝업 content 컴포넌트',
  },
  argTypes: {
    containerStyle: {
      defaultValue: {
        width: '130px',
      },
    },
  },
} as ComponentMeta<typeof StatusPopupContent>

const Template: ComponentStory<typeof StatusPopupContent> = (args) => (
  <StatusPopupContent {...args} />
)

export const Default = Template.bind({})
