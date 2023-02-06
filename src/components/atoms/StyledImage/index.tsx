import Image from 'next/image'
import { PLACEHOLDER_IMG } from '@constants'

interface StyledImageProps {
  src: string
  width: number
  height: number
  alt: string
  className?: string // tailwind 커스텀을 위한 클래스네임
  style?: object
  placeholder?: 'blur' | 'empty' | undefined
}

const StyledImage = ({
  src,
  width,
  height,
  alt,
  className,
  style,
  placeholder = 'blur',
}: StyledImageProps) => {
  return (
    <div className={`${className}`} style={{ ...style, width, height }}>
      <Image
        src={src}
        alt={alt}
        fill
        placeholder={placeholder}
        blurDataURL={placeholder && PLACEHOLDER_IMG}
      />
    </div>
  )
}

export default StyledImage
