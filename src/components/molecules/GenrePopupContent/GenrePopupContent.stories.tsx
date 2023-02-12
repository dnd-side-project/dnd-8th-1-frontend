import GenrePopupContent from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { GENRE } from '@constants'
import { useState } from 'react'

export default {
  component: GenrePopupContent,
  title: 'Molecules/GenrePopupContent',
  parameters: {
    componentSubtitle: 'GenrePopupContent 컴포넌트',
  },
  argTypes: {
    selectedGenre: {
      control: 'inline-radio',
      options: GENRE,
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
