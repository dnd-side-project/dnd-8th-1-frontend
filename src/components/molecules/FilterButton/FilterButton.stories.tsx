import FilterButton from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useState } from 'react'

export default {
  component: FilterButton,
  title: 'Molecules/FilterButton',
  argTypes: {
    type: {
      defaultValue: 'region',
      control: 'inline-radio',
      options: ['region', 'meet', 'genre'],
    },
    handleSelected: {
      defaultValue: (filter: string) =>
        console.log(filter === '' ? '선택되지 않았음' : `${filter}기 산텍됨!`),
    },
  },
  parameters: {
    componentSubtitle: '필터를 사용하기 위한 버튼',
  },
  decorators: [
    (Story) => (
      <div className="h-[100vh] w-[1000px]">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof FilterButton>

const Template: ComponentStory<typeof FilterButton> = (args) => (
  <FilterButton {...args} />
)

const Example: ComponentStory<typeof FilterButton> = () => {
  const [selected, setSelected] = useState('')

  return (
    <>
      <FilterButton
        handleSelected={(filter: string) => setSelected(filter)}
        type={'meet'}
      />
      <div className="mt-[10px]">
        {selected !== '' ? (
          <p>
            <span className=" font-bold text-[#FF0000]">{selected}</span> 가
            선택되었습니다.
          </p>
        ) : (
          '아무것도 선택되지 않은 상태입니다.'
        )}
      </div>
    </>
  )
}

export const Default = Template.bind({})
export const FilterExample = Example.bind({})
