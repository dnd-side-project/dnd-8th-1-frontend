import StyledImage from '../StyledImage'
import { CSSProperties } from 'react'

interface AvatarProps {
  profileImage: string
  shape?: 'circle' | 'round' | 'square'
  size: number
  styleClass?: string // 외부 커스텀 스타일
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
      ? // TODO: 디자인 명세가 나오면 변경
        'rounded'
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
