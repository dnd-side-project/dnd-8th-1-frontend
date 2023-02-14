// import Calendar from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Layout } from '@components'
import Calendar from '.'

/**
 * 스토리북 확인을 위한 샘플 파일입니다.
 */
export default {
  component: Calendar,
  title: 'Organisms/Calendar',
  parameters: {
    componentSubtitle: '캘린더 컴포넌트',
  },
  /**
   * 컴포넌트에 대해 Container가 필요할 경우 decorators에 추가하면 됩니다.
   */
  decorators: [
    (Story) => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
} as ComponentMeta<typeof Calendar>

const Template: ComponentStory<typeof Calendar> = () => <Calendar />

export const Default = Template.bind({})
Default.args = {}
