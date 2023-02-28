import Image from 'next/image'
import { PLACEHOLDER_IMG } from '@constants'

interface StyledImageProps {
  src: string
  width: number
  height: number
  alt: string
  styleClass?: string
  style?: object
  placeholder?: 'blur' | 'empty' | undefined
}

const StyledImage = ({
  src,
  width,
  height,
  alt,
  styleClass,
  style,
  placeholder,
}: StyledImageProps) => {
  return (
    <div
      className={`${styleClass} overflow-hidden`}
      style={{ ...style, width, height }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        placeholder={placeholder}
        blurDataURL={placeholder && PLACEHOLDER_IMG}
        style={{ objectFit: 'cover' }}
      />
    </div>
  )
}

export default StyledImage
