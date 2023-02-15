import { PerformanceImminent } from '@types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/swiper.min.css'
import 'swiper/css/pagination'
import { theme } from '@constants'
import Link from 'next/link'

interface PerformanceBannerProps {
  imminentPerformances: Pick<PerformanceImminent, 'image' | 'title' | 'id'>[]
}

const PerformanceBanner = ({
  imminentPerformances,
}: PerformanceBannerProps) => {
  return (
    <>
      <Swiper
        pagination={{ clickable: false }}
        modules={[Pagination]}
        className="banner flex h-[275px] mobile:w-[100%]"
      >
        {imminentPerformances.map((imminentPerformance, i) => (
          <SwiperSlide key={i}>
            <Link href={`performance/${imminentPerformance.id}`}>
              <div
                style={{
                  height: '100%',
                  width: '100%',
                  backgroundImage: `url(${imminentPerformance.image})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  background: `linear-gradient(180deg, rgba(8, 8, 8, 0) 0%, #080808 89.06%), url(${imminentPerformance.image})`,
                }}
                key={i}
              >
                <div className="absolute left-[16px] bottom-[40px]">
                  <p
                    style={{
                      background: theme.backgroundImage.green_gradient,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontWeight: 700,
                      fontSize: '18px',
                      lineHeight: '26px',
                    }}
                  >
                    NEW!
                  </p>
                  <span className="text-title2 font-bold text-gray-100">
                    {imminentPerformance.title}
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
