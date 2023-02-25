import MainMeetSection from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Layout } from '@components'

export default {
  component: MainMeetSection,
  title: 'Organisms/MainMeetSection',
  parameters: {
    componentSubtitle: '메인 페이지에서 사용되는 만나기 관련 컴포넌트',
  },
  decorators: [
    (Story) => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
} as ComponentMeta<typeof MainMeetSection>

const Template: ComponentStory<typeof MainMeetSection> = (args) => {
  const DUMMY = [
    {
      id: 1,
      imgUrl: 'https://picsum.photos/96/110',
      location: '부산',
      type: '쉐어',
      title: '저희 팀이랑 콜라보 하실분~',
      profile: {
        name: 'HOOK',
        imgUrl: 'https://picsum.photos/96/110',
      },
    },
    {
      id: 1,
      imgUrl: 'https://picsum.photos/96/110',
      location: '부산',
      type: '쉐어',
      title: '저희 팀이랑 콜라보 하실분~',
      profile: {
        name: 'HOOK',
        imgUrl: 'https://picsum.photos/96/110',
      },
    },
    {
      id: 1,
      imgUrl: 'https://picsum.photos/96/110',
      location: '부산',
      type: '쉐어',
      title: '저희 팀이랑 콜라보 하실분~',
      profile: {
        name: 'HOOK',
        imgUrl: 'https://picsum.photos/96/110',
      },
    },
    {
      id: 1,
      imgUrl: 'https://picsum.photos/96/110',
      location: '부산',
      type: '쉐어',
      title: '저희 팀이랑 콜라보 하실분~',
      profile: {
        name: 'HOOK',
        imgUrl: 'https://picsum.photos/96/110',
      },
    },
    {
      id: 1,
      imgUrl: 'https://picsum.photos/96/110',
      location: '부산',
      type: '쉐어',
      title: '저희 팀이랑 콜라보 하실분~',
      profile: {
        name: 'HOOK',
        imgUrl: 'https://picsum.photos/96/110',
      },
    },
    {
      id: 1,
      imgUrl: 'https://picsum.photos/96/110',
      location: '부산',
      type: '쉐어',
      title: '저희 팀이랑 콜라보 하실분~',
      profile: {
        name: 'HOOK',
        imgUrl: 'https://picsum.photos/96/110',
      },
    },
  ]
  const props = {
    meetLists: DUMMY,
  }
  return <MainMeetSection {...props} {...args} />
}

export const Default = Template.bind({})
