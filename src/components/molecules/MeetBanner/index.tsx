import meetBannerImage from '/public/assets/images/collabo_share_main.png'
import Image from 'next/image'

const MeetBanner = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute h-[278px] w-[375px] overflow-hidden bg-darken_gradient" />
      <Image
        src={meetBannerImage}
        width={375}
        height={278}
        alt="만나기 (콜라보, 쉐어) 페이지 배너"
        placeholder="blur"
      />

      <div className="absolute top-[153px] left-[16px]">
        <h2 className="h-[55px] text-title2 font-bold text-gray-100">
          다같이 창작하고,
          <br />
          다같이 공유해요!
        </h2>

        <p className="mt-[22px] text-body2 text-gray-300">
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
