import ImageUpload from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  component: ImageUpload,
  title: 'Atoms/ImageUpload',
  parameters: {
    componentSubtitle: '이미지 업로드 컴포넌트',
  },
} as ComponentMeta<typeof ImageUpload>

const Template: ComponentStory<typeof ImageUpload> = () => <ImageUpload />

export const Default = Template.bind({})
Default.args = {}
