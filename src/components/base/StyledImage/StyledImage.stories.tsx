import StyledImage from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  component: StyledImage,
  title: 'base/StyledImage',
  argTypes: {
    src: { defaultValue: 'https://picsum.photos/200' },
    width: {
      defaultValue: 100,
      control: { type: 'range', min: 40, max: 200 },
    },
    height: {
      defaultValue: 100,
      control: { type: 'range', min: 40, max: 200 },
    },
    alt: {
      defaultValue: 'component-test',
    },
    placeholder: {
      defaultValue: 'blur',
      control: 'inline-radio',
      options: ['blur', 'empty'],
    },
  },
  parameters: {
    componentSubtitle:
      '커스텀 가능한 이미지 컴포넌트 (유저의 프로필 사진 표시)',
  },
} as ComponentMeta<typeof StyledImage>

const Template: ComponentStory<typeof StyledImage> = (args) => (
  <StyledImage {...args} />
)

export const Default = Template.bind({})
