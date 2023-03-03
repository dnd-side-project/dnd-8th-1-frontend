import { isDeadLine } from '@utils'
import Image from 'next/image'
import { PLACEHOLDER_IMG } from '@constants'

interface MeetDetailImageProps {
  imgUrl: string
  deadline: string
}

const MeetDetailImage = ({ imgUrl, deadline }: MeetDetailImageProps) => {
  return (
    <>
      {isDeadLine(deadline) ? (
        <div className="relative h-[214px] w-[375px] bg-[#000000] opacity-50">
          <Image
            src={imgUrl}
            alt="만나기 상세 이미지"
            fill
            placeholder="blur"
            blurDataURL={PLACEHOLDER_IMG}
            style={{ objectFit: 'cover' }}
          />
          <div className="absolute top-[16px] left-[16px] flex h-[28px] w-[55px] items-center justify-center rounded-[14px] bg-gray-700 text-body2 text-gray-300">
            마감
          </div>
        </div>
      ) : (
        <div className="relative h-[214px] w-[375px]">
          <Image
            src={imgUrl}
            alt="만나기 상세 이미지"
            fill
            placeholder="blur"
            blurDataURL={PLACEHOLDER_IMG}
            style={{ objectFit: 'cover' }}
          />
        </div>
      )}
    </>
  )
}

export default MeetDetailImage
