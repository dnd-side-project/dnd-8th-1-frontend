import { iconName, IconSet } from './Iconset'

interface IconProps {
  icon: iconName // 아이콘 종류
  size: number
  color?: string
}

const Icon = ({ icon, size = 16, color }: IconProps) => {
  return (
    <svg
      height={size}
      viewBox={IconSet[icon].viewBox}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={IconSet[icon].path} />
    </svg>
  )
}

export default Icon
