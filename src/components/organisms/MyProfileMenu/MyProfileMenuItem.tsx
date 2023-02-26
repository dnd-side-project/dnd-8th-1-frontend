import { Icon } from '@components'
import { theme } from '@constants'

interface MyProfileMenuItemProps {
  content: '활동 내역' | '탈퇴'
  description?: string
}

const MyProfileMenuItem = ({
  content,
  description,
}: MyProfileMenuItemProps) => {
  return (
    <li className="relative cursor-pointer py-[20px] px-[18px] text-gray-100">
      <div className="flex flex-col gap-[9px]">
        <span className="text-body1 font-bold">{content}</span>
        <span className="text-body2 text-[#CECECE]">{description}</span>
      </div>
      <div className="absolute top-[22px] right-[20.56px]">
        <Icon icon="arrow-right" size={21} color={theme.colors.gray[100]} />
      </div>
    </li>
  )
}

export default MyProfileMenuItem
