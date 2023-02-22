import GenreSelect from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  component: GenreSelect,
  title: 'Molecules/GenreSelect',
  parameters: {
    componentSubtitle: '작성 폼의 장르 선택에 사용되는 컴포넌트 입니다.',
  },
  decorators: [
    (Story) => (
      <div className="bg-blue-200 h-[100vh] w-[375px] bg-green">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof GenreSelect>

const Template: ComponentStory<typeof GenreSelect> = () => {
  return <GenreSelect handleGenreSelect={(genre) => console.log(genre)} />
}

export const Default = Template.bind({})
