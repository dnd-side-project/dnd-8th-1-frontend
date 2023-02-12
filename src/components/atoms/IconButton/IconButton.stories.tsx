import IconButton from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  component: IconButton,
  title: 'Atoms/IconButton',
  argTypes: {
    icon: {
      defaultValue: 'heart',
      control: 'inline-radio',
      options: ['heart'],
    },
    size: {
      defaultValue: 16,
      control: { type: 'range', min: 8, max: 240 },
    },
    color: {
      control: { type: 'color' },
    },
  },
  parameters: {
    componentSubtitle: '아이콘 버튼 컴포넌트',
  },
} as ComponentMeta<typeof IconButton>

const Template: ComponentStory<typeof IconButton> = (args) => {
  const styleClass = 'w-auto inline-block p-0' // tailwind에서 fit-content 설정
  const handleClick = () => console.log('click!')
  return (
    <IconButton {...args} styleClass={styleClass} handleOnClick={handleClick} />
  )
}

export const Default = Template.bind({})
