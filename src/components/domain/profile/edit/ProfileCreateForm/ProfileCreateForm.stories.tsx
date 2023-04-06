import ProfileCreateForm from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Layout } from '@components'

export default {
  component: ProfileCreateForm,
  title: 'domain/profile/edit/ProfileCreateForm',
  parameters: {
    componentSubtitle:
      '프로필 페이지에서 프로필을 등록 및 수정하는 폼 컴포넌트',
  },
  decorators: [
    (Story) => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
} as ComponentMeta<typeof ProfileCreateForm>

const Template: ComponentStory<typeof ProfileCreateForm> = (args) => {
  return <ProfileCreateForm {...args} />
}

export const Create = Template.bind({})
Create.args = {
  previousValue: {
    type: null,
    careerStartDate: null,
    description: null,
    genres: null,
    imgUrl: null,
    location: null,
    name: null,
    openChatUrl: null,
    portfolio: {
      instagram: null,
      youtube: null,
      tiktok: null,
    },
  },
}

export const Edit = Template.bind({})

Edit.args = {
  previousValue: {
    type: '댄서',
    careerStartDate: '2023-02-15',
    description:
      '저는 춤을 사랑하며, 제 인생의 동반자입니다. 누구나 즐길 수 있는 음악 위에 춤추는걸 좋아합니다.',
    genres: ['힙합'],
    imgUrl:
      'https://www.culture.go.kr/upload/rdf/22/07/show_2022071814552019267.jpg',
    location: '부산',
    name: '진영',
    openChatUrl: 'https://open.kakao.com/o/dsfsa232',
    portfolio: {
      instagram: '',
      youtube: '',
      tiktok: '',
    },
  },
}
