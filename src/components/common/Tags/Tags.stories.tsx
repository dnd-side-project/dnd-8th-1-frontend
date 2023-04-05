import Tags from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  component: Tags,
  title: 'common/Tags',
  parameters: {
    componentSubtitle: 'Tags 컴포넌트',
  },
  argTypes: {
    containerStyle: {
      defaultValue: '',
    },
    tagStyle: {
      defaultValue: '',
    },
    textStyle: {
      defaultValue: '',
    },
    /**
     * TODO : iconType 추가 시 정의 할 것
     */
    iconType: {
      // defaultValue: 'vercel',
    },
  },
} as ComponentMeta<typeof Tags>

const Template: ComponentStory<typeof Tags> = (args) => <Tags {...args} />

export const Default = Template.bind({})
Default.args = {
  tags: ['부산', '락킹'],
}
