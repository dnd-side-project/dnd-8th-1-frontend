import GenrePopupContent from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CONSTANT_DANCE_GENRE } from '@constants'

export default {
  component: GenrePopupContent,
  title: 'Molecules/GenrePopupContent',
  parameters: {
    componentSubtitle: 'GenrePopupContent',
  },
  argTypes: {
    clickGenre: {
      defaultValue: 'vercel',
      control: 'inline-radio',
      options: CONSTANT_DANCE_GENRE,
    },
  },
} as ComponentMeta<typeof GenrePopupContent>

const Template: ComponentStory<typeof GenrePopupContent> = (args) => (
  <GenrePopupContent {...args} />
)
export const Default = Template.bind({})
