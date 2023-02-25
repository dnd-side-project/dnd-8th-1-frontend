import { StyledImage } from '@components'
import { TEXT_OVERFLOW_STYLE } from '@constants'
import { MyPerformance } from '@types'
import Link from 'next/link'
import dayjs from 'dayjs'

interface MyPerformanceItemProps {
  myPerformanceItem: MyPerformance
}

const MyPerformanceItem = ({ myPerformanceItem }: MyPerformanceItemProps) => {
  const { id, title, createdAt, profile, imgUrl } = myPerformanceItem
  const date = dayjs(createdAt)

  return (
    <li>
      <Link href={`performance/${id}`}>
        <div className="px-[16px]">
          <div className="mt-[15px] mb-[9px] text-body2 text-gray-400">
            {date.format('YYYY.MM.DD 등록')}
          </div>
          <div className="mb-[12px] flex gap-[14px]">
            <StyledImage
              src={imgUrl}
              width={80}
              height={90}
              styleClass="rounded-[6px] border-[0.5px] border-gray-700"
              alt="활동 내역 이미지"
              placeholder="blur"
            />
            <div className={`w-[235px] `}>
              <div
                className={`mb-[4px] text-body1 font-bold text-gray-100 ${TEXT_OVERFLOW_STYLE}`}
              >
                {title}
              </div>

              <div className="mb-[7px] text-caption  text-gray-400">
                {profile.name}
              </div>
            </div>
          </div>
        </div>
        <div className="h-[1px] w-[375px] bg-gray-700" />
      </Link>
    </li>
  )
}

export default MyPerformanceItem
