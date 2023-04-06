import RegionSelect from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  component: RegionSelect,
  title: 'common/RegionSelect',
  parameters: {
    componentSubtitle: '작성 폼의 지역 선택에 사용되는 컴포넌트 입니다.',
  },
  decorators: [
    (Story) => (
      <div className="bg-blue-200 h-[100vh] w-[375px] bg-green">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof RegionSelect>

const Template: ComponentStory<typeof RegionSelect> = () => {
  return <RegionSelect handleRegionSelect={(region) => console.log(region)} />
}

export const Default = Template.bind({})
Default.args = {}
