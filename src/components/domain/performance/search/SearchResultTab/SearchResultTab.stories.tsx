import SearchResultTab from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useState } from 'react'

export default {
  component: SearchResultTab,
  title: 'domain/performance/search/SearchResultTab',
  parameters: {
    componentSubtitle:
      '예정된 게시물, 마감된 게시물들을 보여주도록 도와주는 탭 컴포넌트',
  },
} as ComponentMeta<typeof SearchResultTab>

const Template: ComponentStory<typeof SearchResultTab> = (args) => {
  const [isComming, setIsComming] = useState(true)
  const props = {
    ...args,
    isComming,
    setIsComming,
  }
  return <SearchResultTab {...props} />
}

export const Default = Template.bind({})
Default.args = {
  commingCount: 6,
  endedCount: 0,
}
