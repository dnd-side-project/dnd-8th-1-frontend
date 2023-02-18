import { RecruitmentType, RegionTypes } from '@types'

interface MeetDetailCardProps {
  recruitType: RecruitmentType
  recruitCount: number
  deadline: string
  location: RegionTypes
}
const DetailCard = ({
  recruitType,
  recruitCount,
  deadline,
  location,
}: MeetDetailCardProps) => {
  const deadlineDate = `${deadline.slice(0, 4)}.${deadline.slice(
    5,
    7,
  )}.${deadline.slice(8, 10)}`
  return (
    <div className="flex h-[98px] w-[343px] flex-col items-start justify-center rounded-[10px] border border-gray-700 bg-gray-900 px-[18px] py-[18px]">
      <div>
        <span className="mr-[12px] text-body2 font-normal text-gray-400">
          모집 인원
        </span>
        <span className="text-body2 font-normal text-gray-100">
          {recruitType} {recruitCount}명
        </span>
      </div>
      <div>
        <span className="mr-[12px] text-body2 font-normal text-gray-400">
          모집 기간
        </span>
        <span className="text-body2 font-normal text-gray-100">
          ~ {deadlineDate}
        </span>
      </div>
      <div>
        <span className="mr-[38px] text-body2 font-normal text-gray-400">
          지역
        </span>
        <span className="text-body2 font-normal text-gray-100">{location}</span>
      </div>
    </div>
  )
}

export default DetailCard
