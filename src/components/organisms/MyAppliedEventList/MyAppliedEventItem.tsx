import { StyledImage } from '@components'
import { TEXT_OVERFLOW_STYLE } from '@constants'
import { AppliedEvent } from '@types'
import dayjs from 'dayjs'
import Link from 'next/link'

interface MyAppliedEventItemProps {
  appliedEvent: AppliedEvent
}

const MyAppliedEventItem = ({ appliedEvent }: MyAppliedEventItemProps) => {
  const { id, title, appliedAt, profile, isMatched, imgUrl } = appliedEvent
  const date = dayjs(appliedAt)

  return (
    <li>
      <Link href={`meet/${id}`}>
        <div className="px-[16px]">
          <div className="mt-[15px] mb-[9px] text-body2 text-gray-400">
            {date.format('YYYY.MM.DD 지원')}
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

              {isMatched && (
                <div className=" flex h-[24px] w-fit flex-col items-center justify-center rounded-[4px] bg-gray-700 py-[6px] px-[10px] text-center text-caption text-green-light">
                  <span> 매칭 완료</span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="h-[1px] w-[375px] bg-gray-700" />
      </Link>
    </li>
  )
}

export default MyAppliedEventItem
