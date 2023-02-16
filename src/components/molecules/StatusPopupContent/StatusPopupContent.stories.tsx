import StatusPopupContent from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { action } from '@storybook/addon-actions'

export default {
  component: StatusPopupContent,
  title: 'Molecules/StatusPopupContent',
  parameters: {
    componentSubtitle: '만나기 내 수정/삭제 팝업 content 컴포넌트',
  },
  argTypes: {
    containerStyle: {
      defaultValue: 'w-[130px]',
    },
  },
} as ComponentMeta<typeof StatusPopupContent>

const Template: ComponentStory<typeof StatusPopupContent> = (args) => {
  const handleOnModify = action('수정하기')
  const handleOnDelete = action('삭제하기')
  const props = {
    handleOnModify,
    handleOnDelete,
  }
  return <StatusPopupContent {...args} {...props} />
}

export const Default = Template.bind({})

const WithPopupTemplate: ComponentStory<typeof StatusPopupContent> = (args) => {
  const handleOnModify = action('수정하기')
  const handleOnDelete = action('삭제하기')
  const props = {
    handleOnModify,
    handleOnDelete,
  }

  return (
    <div className="flex h-[80px] w-[98px] items-center justify-center rounded-[8px] bg-gray-700 px-[10px] py-[14px]">
      <StatusPopupContent {...args} {...props} />
    </div>
  )
}

export const WithPopup = WithPopupTemplate.bind({})
