import { IconProps } from '@types'
import { IconSet } from './Iconset'

const Icon = ({ icon, size = 16, color }: IconProps) => {
  return (
    <svg
      height={size}
      viewBox={IconSet[icon].viewBox}
      fill={color ? color : IconSet[icon].fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={IconSet[icon].path} />
    </svg>
  )
}

export default Icon
