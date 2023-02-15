import Tag from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  component: Tag,
  title: 'Atoms/Tag',
  argTypes: {
    type: {
      defaultValue: 'genre',
      control: 'inline-radio',
      options: ['region', 'meet', 'genre'],
    },
    content: {
      defaultValue: '태그',
      control: 'text',
    },
    isHighlighted: {
      defaultValue: false,
      control: 'inline-radio',
      options: [true, false],
    },
    styleClass: {
      defaultValue: '',
      control: 'text',
    },
  },
  parameters: {
    componentSubtitle: '공통 컴포넌트로 사용되는 태그 컴포넌트',
  },
} as ComponentMeta<typeof Tag>

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />

export const Default = Template.bind({})

export const MeetPage = Template.bind({})

MeetPage.args = {
  styleClass: 'w-[55px] h-[24px] px-[12px] py-[6px]',
}
