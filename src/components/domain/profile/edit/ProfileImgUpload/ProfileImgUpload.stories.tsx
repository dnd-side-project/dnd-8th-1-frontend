import ProfileImgUpload from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  component: ProfileImgUpload,
  title: 'domain/profile/edit/ProfileImgUpload',
  parameters: {
    componentSubtitle: '프로필 내에서 사용되는 이미지 업로드 컴포넌트',
  },
} as ComponentMeta<typeof ProfileImgUpload>

const Template: ComponentStory<typeof ProfileImgUpload> = () => (
  <ProfileImgUpload />
)

export const Default = Template.bind({})
