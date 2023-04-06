import SearchHeader from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useState } from 'react'

export default {
  component: SearchHeader,
  title: 'domain/performance/main/SearchHeader',
  parameters: {
    componentSubtitle: '공연 정보 검색을 위한 컴포넌트',
  },
  decorators: [
    (Story) => (
      <div className="flex w-[375px] justify-center">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof SearchHeader>

const Template: ComponentStory<typeof SearchHeader> = () => {
  const [open, setOpen] = useState(true)
  const props = {
    open,
    setOpen,
  }
  return <>{open && <SearchHeader {...props} />}</>
}

export const Default = Template.bind({})
