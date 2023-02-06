import Image from 'next/image'
import { CSSProperties } from 'react'

interface AvatarProps {
  profileImage: string
  shape?: 'circle' | 'round' | 'square'
  size: number
  style?: CSSProperties // 외부 커스텀 스타일
}

const Avatar = ({
  profileImage,
  shape = 'circle',
  size,
  style,
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

  const PLACEHOLDER_IMG =
    'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=='

  return (
    <div
      className={`avatar-wrapper ${wrapperStyle}`}
      style={{ ...style, ...avatarStyle }}
    >
      <Image
        src={profileImage}
        alt={'user-avatar'}
        fill
        placeholder="blur"
        blurDataURL={PLACEHOLDER_IMG}
      />
    </div>
  )
}

export default Avatar
