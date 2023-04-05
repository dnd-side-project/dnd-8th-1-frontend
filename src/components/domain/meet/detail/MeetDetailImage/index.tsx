import { isDeadLine } from '@utils'
import { StyledImage } from '@components'

interface MeetDetailImageProps {
  imgUrl: string
  deadline: string
}

const MeetDetailImage = ({ imgUrl, deadline }: MeetDetailImageProps) => {
  return (
    <>
      {isDeadLine(deadline) ? (
        <div className="relative h-[214px] w-[375px] bg-[#000000] opacity-50">
          <StyledImage
            src={imgUrl}
            alt="만나기 상세 이미지"
            width={214}
            height={375}
          />
          <div className="absolute top-[16px] left-[16px] flex h-[28px] w-[55px] items-center justify-center rounded-[14px] bg-gray-700 text-body2 text-gray-300">
            마감
          </div>
        </div>
      ) : (
        <div className="relative h-[214px] w-[375px]">
          <StyledImage
            src={imgUrl}
            alt="만나기 상세 이미지"
            width={214}
            height={375}
          />
        </div>
      )}
    </>
  )
}

export default MeetDetailImage
