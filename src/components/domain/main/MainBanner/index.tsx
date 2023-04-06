import { Swiper, SwiperSlide } from 'swiper/react'
import Link from 'next/link'

const MainBanner = () => {
  return (
    <>
      <Swiper>
        <SwiperSlide>
          <div className="flex items-center justify-center">
            <Link
              className={`flex h-[180px] w-[310px] flex-col justify-end rounded-[6px] bg-[url('/assets/images/main_banner_green.png')] bg-cover bg-center p-[15px]`}
              href="/meet"
            >
              <span className="mb-[14px] block text-title2 font-bold text-gray-100">
                콜라보
              </span>
              <p className="text-body2 text-gray-100">
                다채로운 댄서들과 함께하는 댄스 콜라보, <br /> 댄버스에서 함께
                연습하고 창작해보세요.
              </p>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center">
            <Link
              className="flex h-[180px] w-[310px] flex-col justify-end rounded-[6px] bg-[url('/assets/images/main_banner_purple.png')] bg-cover bg-center p-[15px]"
              href="/performance"
            >
              <span className="mb-[14px] block text-title2 font-bold text-gray-100">
                공연
              </span>
              <p className="text-body2 text-gray-100">
                내 취향 맞춤 공연을 찾아봐요! <br />
                멋진 댄스 공연 관람과 후기를 남겨보세요.
              </p>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center">
            <Link
              className="flex h-[180px] w-[310px] flex-col justify-end rounded-[6px] bg-[url('/assets/images/main_banner_blue.png')] bg-cover bg-center p-[15px]"
              href="/meet"
            >
              <span className="mb-[14px] block text-title2 font-bold text-gray-100">
                쉐어
              </span>
              <p className="text-body2 text-gray-100">
                함께 댄스를 쉐어해요!
                <br />
                안무, 팀문화 등을 공유하며 한 층 더 성장해봐요.
              </p>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default MainBanner
