import { PLACEHOLDER_IMG } from '@constants'
import { IconButton, StyledImage, StatusPopupContent } from '@components'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import { useClickAway } from '@hooks'

interface PerformanceDetailSectionTopProps {
  title: string
  startDate: string
  imgUrl: string
  performanceId: number
  publisherId: number // 게시글 작성자 아이디
  handleOnDelete: () => void
}

const PerformanceDetailSectionTop = ({
  title,
  imgUrl,
  performanceId,
  publisherId,
  handleOnDelete,
}: PerformanceDetailSectionTopProps) => {
  const router = useRouter()
  const [showStatusPopup, setShowStatusPopup] = useState(false)
  const popupRef = useRef<HTMLDivElement>(null)
  const iconButtonRef = useRef<HTMLDivElement>(null)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  useClickAway(popupRef, (e: any) => {
    const { current: triggerWrapper } = iconButtonRef
    triggerWrapper &&
      !triggerWrapper.contains(e.target) &&
      setShowStatusPopup(false)
  })

  return (
    <section className="relative">
      <div className="relative z-[1]  h-[237px] w-[375px] overflow-hidden">
        <div className="absolute top-0 h-[237px] w-[375px] overflow-hidden bg-darken_gradient backdrop-blur-[1.5px]" />
        <Image
          src={imgUrl}
          width={375}
          height={237}
          alt={`${title} 공연 백그라운드 이미지`}
          placeholder="blur"
          blurDataURL={PLACEHOLDER_IMG}
        />
      </div>
      <StyledImage
        src={imgUrl}
        width={155}
        height={195}
        alt={`${title} 공연 이미지`}
        styleClass="rounded-[5px] absolute top-[45px] z-[2] mx-[110px]"
      />
      {/* TODO: 전역 로그인 정보 필요 */}
      {/* 현재 게시글이 본인의 게시글일 때만 렌더링 한다. */}
      <div ref={iconButtonRef}>
        <IconButton
          areaLabel={'공연정보 수정/삭제'}
          icon={'dots'}
          size={24}
          styleClass="absolute top-[7px] right-[16px] z-[3]"
          handleOnClick={() => setShowStatusPopup(!showStatusPopup)}
        />
      </div>

      {showStatusPopup && (
        <div
          ref={popupRef}
          className="absolute top-[36px] right-[16px] z-[4] rounded-[8px] bg-gray-700 px-[10px] py-[14px]"
        >
          <StatusPopupContent
            handleOnModify={() => router.push(`/edit/${performanceId}`)}
            // TODO: 삭제 API 호출
            handleOnDelete={() => {
              handleOnDelete && handleOnDelete()
            }}
          />
        </div>
      )}
    </section>
  )
}

export default PerformanceDetailSectionTop
