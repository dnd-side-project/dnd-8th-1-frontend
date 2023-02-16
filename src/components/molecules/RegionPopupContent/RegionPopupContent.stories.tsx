import RegionButtonGroup from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { REGIONS } from '@constants'
import { useState } from 'react'

export default {
  component: RegionButtonGroup,
  title: 'Molecules/RegionButtonGroup',
  parameters: {
    componentSubtitle: 'RegionButtonGroup 컴포넌트',
  },
  argTypes: {
    selectedRegion: {
      defaultValue: '서울',
      control: 'inline-radio',
      options: REGIONS,
    },
    containerStyle: {
      defaultValue: '',
    },
    textStyle: {
      defaultValue: '',
    },
    gridItemStyle: {
      defaultValue: '',
    },
    buttonStyle: {
      defaultValue: '',
    },
  },
} as ComponentMeta<typeof RegionButtonGroup>

const Template: ComponentStory<typeof RegionButtonGroup> = (args) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('서울')
  const handleSelectRegion = (region: string) => {
    setSelectedRegion(region)
  }
  const props = {
    selectedRegion,
    handleOnClick: handleSelectRegion,
  }
  return <RegionButtonGroup {...args} {...props} />
}
export const Default = Template.bind({})

const WithContainerTemplate: ComponentStory<typeof RegionButtonGroup> = (
  args,
) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('서울')
  const handleSelectRegion = (region: string) => {
    setSelectedRegion(region)
  }
  const props = {
    selectedRegion,
    handleOnClick: handleSelectRegion,
  }
  return (
    <div className="flex h-[250px] w-[353px] items-center justify-center bg-gray-600 px-[10px]">
      <RegionButtonGroup {...args} {...props} />
    </div>
  )
}

export const WithContainer = WithContainerTemplate.bind({})
