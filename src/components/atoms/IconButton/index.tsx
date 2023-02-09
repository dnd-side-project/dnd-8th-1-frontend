import { Icon } from '@components'
import { IconProps } from '@types'

interface IconButtonProps extends IconProps {
  areaLabel: string // 웹 접근성을 위한 버튼에 대한 설명
  styleClass?: string
  handleOnClick?: () => void
}

const IconButton = ({
  icon,
  size,
  color,
  areaLabel,
  styleClass,
  handleOnClick,
}: IconButtonProps) => {
  return (
    <button
      className={styleClass}
      aria-label={areaLabel}
      onClick={handleOnClick}
    >
      <Icon icon={icon} size={size} color={color} />
    </button>
  )
}

export default IconButton
