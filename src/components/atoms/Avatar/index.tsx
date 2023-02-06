import Image from 'next/image'
import { CSSProperties } from 'react'
import { PLACEHOLDER_IMG } from '@constants'

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
      ? // TODO: 디자인 명세가 나오면 변경
        'rounded'
      : 'roundend-none'

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
