import { Portfolio } from '@types'
import OpenChatButton from './OpenChatButton'
import PortfolioButton from './PortfolioButton'

interface ProfileButtonGroupProps {
  openChatUrl: string
  portfolio: Portfolio
}
const ProfileButtonGroup = ({
  openChatUrl,
  portfolio,
}: ProfileButtonGroupProps) => {
  const hasPortfolio =
    Object.values(portfolio).filter((link) => link && link !== '').length !== 0

  return (
    <div className="flex w-[343px] flex-grow items-center justify-center gap-[11px] px-[16px]">
      <OpenChatButton openChatUrl={openChatUrl} />
      {hasPortfolio && <PortfolioButton portfolio={portfolio} />}
    </div>
  )
}

export default ProfileButtonGroup
