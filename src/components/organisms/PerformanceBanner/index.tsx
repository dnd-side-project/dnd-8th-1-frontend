import { PerformanceImminent } from '@types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import Link from 'next/link'
import 'swiper/swiper.min.css'
import 'swiper/css/pagination'

interface PerformanceBannerProps {
  imminentPerformances: PerformanceImminent[]
}

const PerformanceBanner = ({
  imminentPerformances,
}: PerformanceBannerProps) => {
  return (
    <>
      <Swiper
        pagination={{ clickable: false }}
        modules={[Pagination]}
        className="flex h-[275px] w-[100%]"
      >
        {imminentPerformances?.map((imminentPerformance) => (
          <SwiperSlide key={imminentPerformance.id}>
            <Link href={`performance/${imminentPerformance.id}`}>
              <div
                style={{
                  height: '100%',
                  width: '100%',
                  background: `linear-gradient(180deg, rgba(8, 8, 8, 0) 0%, #080808 89.06%), url(${imminentPerformance.imgUrl})`,
                  backgroundPosition: 'center',
                  backgroundSize: '100% 100%',
                }}
              >
                <div className="absolute left-[16px] bottom-[40px]">
                  <span
                    className={`block bg-green_gradient bg-clip-text text-subtitle font-bold text-[transparent]`}
                  >
                    NEW!
                  </span>
                  <span className="text-title2 font-bold text-gray-100">
                    {imminentPerformance.title.slice(0, 11)} <br />{' '}
                    {imminentPerformance.title.slice(11)}
                  </span>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default PerformanceBanner
