import Dimmed from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  component: Dimmed,
  title: 'base/Dimmed',
  parameters: {
    componentSubtitle: 'Popup 컴포넌트 류와 함께 사용되는 Overlay 컴포넌트',
  },
  argTypes: {
    styleClass: {
      defaultValue: 'h-screen',
    },
  },
  decorators: [
    (Story) => (
      <div className="bg-slate-100 relative mx-auto flex h-full max-w-[375px] flex-col justify-center">
        <Story />
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="h-10 w-10">
            {i}
          </div>
        ))}
      </div>
    ),
  ],
} as ComponentMeta<typeof Dimmed>

const Template: ComponentStory<typeof Dimmed> = (args) => <Dimmed {...args} />

export const Default = Template.bind({})
