import FormDatePicker from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useState } from 'react'

export default {
  component: FormDatePicker,
  title: 'Molecules/FormDatePicker',
  parameters: {
    componentSubtitle: '폼에서 날짜 선택을 위해 사용하는 DatePicker 컴포넌트',
  },
  decorators: [
    (Story) => (
      <div className="h-[300px] w-[375px]">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof FormDatePicker>

const Template: ComponentStory<typeof FormDatePicker> = () => {
  const [date, setDate] = useState<Date | null>(null)

  return (
    <>
      <FormDatePicker handleStartDate={(date) => setDate(date)} />
      {date && (
        <div className="text-[80px] font-extrabold text-gray-100">date</div>
      )}
    </>
  )
}

export const Default = Template.bind({})
Default.args = {}
