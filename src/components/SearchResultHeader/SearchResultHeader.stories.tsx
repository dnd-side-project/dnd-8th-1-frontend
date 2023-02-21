import SearchResultHeader from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  component: SearchResultHeader,
  title: 'Organisms/SearchResultHeader',
  parameters: {
    componentSubtitle: '공연 정보 검색 결과 페이지 내 header 컴포넌트',
  },
  decorators: [
    (Story) => (
      <div className="flex w-[375px] justify-center">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof SearchResultHeader>

const Template: ComponentStory<typeof SearchResultHeader> = () => {
  return <SearchResultHeader />
}

export const Default = Template.bind({})
