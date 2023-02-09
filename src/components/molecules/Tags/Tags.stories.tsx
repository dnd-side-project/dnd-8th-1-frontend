import Tags from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  component: Tags,
  title: 'Molecules/Tags',
  parameters: {
    componentSubtitle: 'Tags 컴포넌트',
  },
  argTypes: {
    containerStyle: {
      defaultValue: {
        border: '1px solid black',
        width: '162px',
        padding: '0',
      },
    },
    tagStyle: {
      defaultValue: {},
    },
  },
} as ComponentMeta<typeof Tags>

const Template: ComponentStory<typeof Tags> = (args) => <Tags {...args} />

export const Default = Template.bind({})
Default.args = {
  tag: ['부산', '락킹'],
}
