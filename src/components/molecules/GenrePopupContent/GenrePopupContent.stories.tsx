import GenrePopupContent from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useState } from 'react'

export default {
  component: GenrePopupContent,
  title: 'Molecules/GenrePopupContent',
  parameters: {
    componentSubtitle: 'GenrePopupContent 컴포넌트',
  },
} as ComponentMeta<typeof GenrePopupContent>

const Template: ComponentStory<typeof GenrePopupContent> = (args) => {
  const [selectedGenre, setSelectedGenre] = useState<string>()
  const handleSelectGenre = (genre: string) => {
    setSelectedGenre(genre)
  }
  const props = {
    selectedGenre,
    handleOnClick: handleSelectGenre,
  }
  return <GenrePopupContent {...args} {...props} />
}
export const Default = Template.bind({})

const WithContainerTemplate: ComponentStory<typeof GenrePopupContent> = (
  args,
) => {
  const [selectedGenre, setSelectedGenre] = useState<string>()
  const handleSelectGenre = (genre: string) => {
    setSelectedGenre(genre)
  }
  const props = {
    selectedGenre,
    handleOnClick: handleSelectGenre,
  }
  return (
    <div className="flex h-[250px] w-[353px] items-center justify-center bg-gray-600 px-[10px]">
      <GenrePopupContent {...args} {...props} />
    </div>
  )
}

export const WithContainer = WithContainerTemplate.bind({})
