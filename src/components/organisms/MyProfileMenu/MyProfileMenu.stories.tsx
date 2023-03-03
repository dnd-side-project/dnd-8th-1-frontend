import MyProfileMenu from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  component: MyProfileMenu,
  title: 'Organisms/MyProfileMenu',
  parameters: {
    componentSubtitle: '자신의 프로필일 경우, 보이는 메뉴 컴포넌트',
  },

  decorators: [
    (Story) => (
      <div className="h-[800px] w-[375px] bg-gray-900 py-[30px]">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof MyProfileMenu>

const Template: ComponentStory<typeof MyProfileMenu> = () => (
  <MyProfileMenu id={1} />
)

export const Default = Template.bind({})

Default.args = {}
