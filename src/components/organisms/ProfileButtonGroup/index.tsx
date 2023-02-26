import OpenChatButton from './OpenChatButton'
import PortfolioButton from './PortfolioButton'

interface ProfileButtonGroupProps {
  openChatUrl: string
}
const ProfileButtonGroup = ({ openChatUrl }: ProfileButtonGroupProps) => {
  return (
    <div className="flex w-[343px] gap-[11px] px-[16px]">
      <OpenChatButton openChatUrl={openChatUrl} />
      <PortfolioButton />
    </div>
  )
}

export default ProfileButtonGroup
