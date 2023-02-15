import StyledImage from '../StyledImage'
import { CSSProperties } from 'react'

interface AvatarProps {
  profileImage: string
  shape?: 'circle' | 'round' | 'square'
  size: number
  styleClass?: string // 외부 커스텀 스타일
  style?: CSSProperties // inline style을 위한 prop
}

const Avatar = ({
  profileImage,
  shape = 'circle',
  size,
  styleClass,
}: AvatarProps) => {
  const avatarStyle: CSSProperties = {
    width: size,
    height: size,
    objectFit: 'cover',
    display: 'inline-block',
    position: 'relative',
    overflow: 'hidden',
  }

  const wrapperStyle =
    shape === 'circle'
      ? 'rounded-full'
      : shape === 'round'
      ? 'rounded'
      : 'roundend-none'

  return (
    <StyledImage
      src={profileImage}
      styleClass={`${wrapperStyle} ${styleClass}`}
      alt={'user-avatar'}
      placeholder="blur"
      style={{ ...avatarStyle }}
      width={size}
      height={size}
    />
  )
}

export default Avatar
