import { isDeadLine } from '@utils'
import { StyledImage } from '@components'
import Image from 'next/image'
import { PLACEHOLDER_IMG } from '@constants'

interface SearchResultImageProps {
  startDate: string
  imgUrl: string
}

const SearchResultImage = ({ startDate, imgUrl }: SearchResultImageProps) => {
  return (
    <>
      {!isDeadLine(startDate) ? (
        <StyledImage
          width={96}
          height={110}
          alt="performance image"
          src={imgUrl}
          placeholder="blur"
          styleClass="overflow-hidden rounded-[4px] w-[96px] h-[110px] relative"
        />
      ) : (
        <div className="relative">
          <div className="overflow-hidden rounded-[4px] bg-[#000000] opacity-60">
            <Image
              width={96}
              height={110}
              alt="performance image"
              src={imgUrl}
              placeholder="blur"
              blurDataURL={PLACEHOLDER_IMG}
            />
          </div>
          <span className="absolute top-[40px] left-[32px] text-caption font-bold text-gray-100">
            종료
          </span>
        </div>
      )}
    </>
  )
}

export default SearchResultImage
