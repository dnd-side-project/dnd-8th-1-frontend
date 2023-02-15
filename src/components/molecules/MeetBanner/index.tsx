import { StyledImage } from '@components'

const MeetBanner = () => {
  return (
    <div className="relative">
      <div className="z-1 absolute h-[278px] w-[375px] bg-darken_gradient" />
      {/* TODO: 디자이너에게 정확한 이미지 받기 */}
      <StyledImage
        src="https://picsum.photos/500/500"
        width={375}
        height={278}
        alt="만나기 (콜라보, 쉐어) 페이지 배너"
        placeholder="blur"
      />

      <div className="z-2 absolute top-[153px] left-[16px]">
        <h2 className="h-[55px] text-title2 font-bold text-gray-100">
          다같이 창작하고,
          <br />
          다같이 공유해요!
        </h2>

        <p className="mt-[22px] text-gray-300 marker:text-body2">
          <span className="text-body2 font-bold text-green-light">콜라보</span>{' '}
          에서 다양한 댄서와 함께 창작하고, <br />
          <span className="text-body2 font-bold text-green-light">
            쉐어
          </span>{' '}
          에서 안무 루틴, 노하우 등을 공유해요!
        </p>
      </div>
    </div>
  )
}

export default MeetBanner