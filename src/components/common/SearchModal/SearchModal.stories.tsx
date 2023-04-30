import { useOpenBanner } from '@hooks'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useState } from 'react'
import { SearchModal, SearchBanner } from '@components'

export default {
  component: SearchModal,
  title: 'common/SearchModal',
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
} as ComponentMeta<typeof SearchModal>

const Template: ComponentStory<typeof SearchModal> = () => {
  const [isOpen, setIsOpen] = useState(true)
  const { isBanner } = useOpenBanner()
  const props = {
    isOpen,
    setIsOpen,
  }
  return (
    <>
      {isOpen && (
        <SearchModal {...props}>
          <SearchBanner isBanner={isBanner} />
        </SearchModal>
      )}
    </>
  )
}

export const Default = Template.bind({})
