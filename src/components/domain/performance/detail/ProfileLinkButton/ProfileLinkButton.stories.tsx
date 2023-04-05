import ProfileLinkButton from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Center } from '@chakra-ui/react'

export default {
  component: ProfileLinkButton,
  title: 'domain/performance/detail/ProfileLinkButton',
  parameters: {
    componentSubtitle: '공연 상세 페이지에서 프로필로 이동하기 위한 버튼',
  },

  decorators: [
    (Story) => (
      <div className="h-[500px] w-[375px]">
        <Center className="flex-col">
          <Story />
        </Center>
      </div>
    ),
  ],
} as ComponentMeta<typeof ProfileLinkButton>

const DUMMY_PROFILE = {
  id: 2,
  imgUrl: 'https://picsum.photos/500/500?random=2',
  name: '댄스팀',
}
const Template: ComponentStory<typeof ProfileLinkButton> = () => (
  <ProfileLinkButton
    profileId={DUMMY_PROFILE.id}
    profileImage={DUMMY_PROFILE.imgUrl}
    profileName={DUMMY_PROFILE.name}
  />
)

export const Default = Template.bind({})
Default.args = {}
