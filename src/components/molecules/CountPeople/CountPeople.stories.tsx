import CountPeople from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Center } from '@chakra-ui/react'

export default {
  component: CountPeople,
  title: 'Molecules/CountPeople',
  argTypes: {
    profileImage: { defaultValue: 'https://picsum.photos/200' },
    currentType: {
      defaultValue: '댄서',
      control: 'inline-radio',
      options: ['댄서', '댄스팀'],
    },
    handleCountPeople: {
      defaultValue: (count: number) => console.log('현재 인원 수', count),
    },
  },
  decorators: [
    (Story) => (
      <Center className="h-[200px] w-[375px] bg-[#000]">
        <Story />
      </Center>
    ),
  ],
  parameters: {
    componentSubtitle: '작성 폼에 사용될 인원 선택 컴포넌트',
  },
} as ComponentMeta<typeof CountPeople>

const Template: ComponentStory<typeof CountPeople> = (args) => (
  <CountPeople {...args} />
)

export const Default = Template.bind({})
