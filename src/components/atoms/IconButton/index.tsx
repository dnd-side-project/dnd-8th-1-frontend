import { Icon } from '@components'
import { IconProps } from '@types'

interface IconButtonProps extends IconProps {
  areaLabel: string // 웹 접근성을 위한 버튼에 대한 설명
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
