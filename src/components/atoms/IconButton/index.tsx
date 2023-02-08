import { Icon } from '@components'
import { IconProps } from '@types'

interface IconButtonProps extends IconProps {
  areaLabel: string // 해당 버튼에 대한 섦병
  buttonWrapperStyle?: string
  handleOnClick?: () => void
}

const IconButton = ({
  icon,
  size,
  color,
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
      <Icon icon={icon} size={size} color={color} />
    </button>
  )
}

export default IconButton
