import Atom from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

/**
 * 스토리북 확인을 위한 샘플 파일입니다.
 */
export default {
  component: Atom,
  title: 'Atoms/Atom',
  parameters: {
    componentSubtitle: '공통 컴포넌트로 사용되는 컴포넌트',
  },
  /**
   * 컴포넌트에 대해 Container가 필요할 경우 decorators에 추가하면 됩니다.
   */
  decorators: [
    (Story) => (
      <div className="h-10 w-10 bg-blue-200">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Atom>

const Template: ComponentStory<typeof Atom> = () => <Atom />

export const Default = Template.bind({})
Default.args = {}
