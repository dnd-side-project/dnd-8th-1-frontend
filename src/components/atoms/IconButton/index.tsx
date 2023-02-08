import { Icon } from '@components'
import { iconName } from '@types'

interface IconButtonProps {
  icon: iconName
  iconSize: number
  areaLabel: string // 해당 버튼에 대한 섦병
  buttonWrapperStyle?: string
  handleOnClick?: () => void
}

const IconButton = ({
  icon,
  iconSize,
  areaLabel,
  buttonWrapperStyle,
  handleOnClick,
}: IconButtonProps) => {
  return (
    <button
      className={buttonWrapperStyle}
      aria-label={areaLabel}
      onClick={handleOnClick}
    >
      <Icon icon={icon} size={iconSize} />
    </button>
  )
}

export default IconButton
