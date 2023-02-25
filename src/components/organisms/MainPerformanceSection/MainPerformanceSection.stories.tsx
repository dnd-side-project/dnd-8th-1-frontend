import MainPerformanceSection from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Layout } from '@components'

export default {
  component: MainPerformanceSection,
  title: 'Organisms/MainPerformanceSection',
  parameters: {
    componentSubtitle: '메인 페이지에서 사용되는 공연 정보 관련 컴포넌트',
  },
  decorators: [
    (Story) => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
} as ComponentMeta<typeof MainPerformanceSection>

const Template: ComponentStory<typeof MainPerformanceSection> = (args) => {
  const DUMMY_PERFORMANCE = [
    {
      id: 1,
      imgUrl: 'https://picsum.photos/96/110',
      location: '부산',
      genres: '커버댄스',
      title: '저희 팀이랑 콜라보 영상 촬영 하실분~',
      profile: {
        name: 'HOOK',
        imgUrl: 'https://picsum.photos/96/110',
      },
    },
    {
      id: 1,
      imgUrl: 'https://picsum.photos/96/110',
      location: '부산',
      genres: '커버댄스',
      title: '저희 팀이랑 콜라보 영상 촬영 하실분~',
      profile: {
        name: 'HOOK',
        imgUrl: 'https://picsum.photos/96/110',
      },
    },
    {
      id: 1,
      imgUrl: 'https://picsum.photos/96/110',
      location: '부산',
      genres: '커버댄스',
      title: '저희 팀이랑 콜라보 영상 촬영 하실분~',
      profile: {
        name: 'HOOK',
        imgUrl: 'https://picsum.photos/96/110',
      },
    },
    {
      id: 1,
      imgUrl: 'https://picsum.photos/96/110',
      location: '부산',
      genres: '커버댄스',
      title: '저희 팀이랑 콜라보 영상 촬영 하실분~',
      profile: {
        name: 'HOOK',
        imgUrl: 'https://picsum.photos/96/110',
      },
    },
    {
      id: 1,
      imgUrl: 'https://picsum.photos/96/110',
      location: '부산',
      genres: '커버댄스',
      title: '저희 팀이랑 콜라보 영상 촬영 하실분~',
      profile: {
        name: 'HOOK',
        imgUrl: 'https://picsum.photos/96/110',
      },
    },
    {
      id: 1,
      imgUrl: 'https://picsum.photos/96/110',
      location: '부산',
      genres: '커버댄스',
      title: '저희 팀이랑 콜라보 영상 촬영 하실분~',
      profile: {
        name: 'HOOK',
        imgUrl: 'https://picsum.photos/96/110',
      },
    },
  ]
  const DUMMY_COMMENT = [
    {
      content: '너무 멋진 공연 잘봤습니다! 여러분 춤들이 너무 대단했어요..!',
      createdDate: '2023-02-25T13:07:27.468Z',
      hasProfile: true,
      performance: {
        id: 1,
        imgUrl: 'https://picsum.photos/300/400',
        title: '커버 댄스팀 1월 공연 ❤️',
      },
      reviewId: 2,
      writer: {
        id: 5,
        name: '아이키',
      },
    },
    {
      content: '너무 멋진 공연 잘봤습니다! 여러분 춤들이 너무 대단했어요..!',
      createdDate: '2023-02-25T13:07:27.468Z',
      hasProfile: true,
      performance: {
        id: 2,
        imgUrl: 'https://picsum.photos/300/400',
        title: '커버 댄스팀 1월 공연 ❤️',
      },
      reviewId: 2,
      writer: {
        id: 5,
        name: '아이키',
      },
    },
    {
      content: '너무 멋진 공연 잘봤습니다! 여러분 춤들이 너무 대단했어요..!',
      createdDate: '2023-02-25T13:07:27.468Z',
      hasProfile: true,
      performance: {
        id: 3,
        imgUrl: 'https://picsum.photos/300/400',
        title: '커버 댄스팀 1월 공연 ❤️',
      },
      reviewId: 2,
      writer: {
        id: 5,
        name: '아이키',
      },
    },
    {
      content: '너무 멋진 공연 잘봤습니다! 여러분 춤들이 너무 대단했어요..!',
      createdDate: '2023-02-25T13:07:27.468Z',
      hasProfile: true,
      performance: {
        id: 4,
        imgUrl: 'https://picsum.photos/300/400',
        title: '커버 댄스팀 1월 공연 ❤️',
      },
      reviewId: 2,
      writer: {
        id: 5,
        name: '아이키',
      },
    },
    {
      content: '너무 멋진 공연 잘봤습니다! 여러분 춤들이 너무 대단했어요..!',
      createdDate: '2023-02-25T13:07:27.468Z',
      hasProfile: true,
      performance: {
        id: 5,
        imgUrl: 'https://picsum.photos/300/400',
        title: '커버 댄스팀 1월 공연 ❤️',
      },
      reviewId: 2,
      writer: {
        id: 5,
        name: '아이키',
      },
    },
    {
      content: '너무 멋진 공연 잘봤습니다! 여러분 춤들이 너무 대단했어요..!',
      createdDate: '2023-02-25T13:07:27.468Z',
      hasProfile: true,
      performance: {
        id: 6,
        imgUrl: 'https://picsum.photos/300/400',
        title: '커버 댄스팀 1월 공연 ❤️',
      },
      reviewId: 2,
      writer: {
        id: 5,
        name: '아이키',
      },
    },
  ]
  const props = {
    performanceList: DUMMY_PERFORMANCE,
    commentList: DUMMY_COMMENT,
  }
  return <MainPerformanceSection {...props} {...args} />
}

export const Default = Template.bind({})
