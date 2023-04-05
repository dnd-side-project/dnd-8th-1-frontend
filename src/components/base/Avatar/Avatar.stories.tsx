import Avatar from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  component: Avatar,
  title: 'base/Avatar',
  argTypes: {
    profileImage: { defaultValue: 'https://picsum.photos/200' },
    shape: {
      defaultValue: 'circle',
      control: 'inline-radio',
      options: ['circle', 'round', 'square'],
    },
    size: {
      defaultValue: 70,
      control: { type: 'range', min: 40, max: 200 },
    },
  },
  parameters: {
    componentSubtitle: '아바타 컴포넌트 (유저의 프로필 사진 표시)',
  },
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Default = Template.bind({})
