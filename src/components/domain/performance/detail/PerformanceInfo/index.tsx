import dayjs from 'dayjs'
import 'dayjs/locale/ko'
dayjs.locale('ko')

interface PerformanceInfoProps {
  startTime: string
  address: string
}

const PerformanceInfo = ({ startTime, address }: PerformanceInfoProps) => {
  const rowStyle = 'flex gap-[22px]'
  const columnStyle = 'text-body2 text-gray-400'
  const valueStyle = 'text-body2 text-gray-100'

  return (
    <div className="flex h-[74px] flex-col  items-start justify-center rounded-[10px] border-[1px] border-gray-700 py-[14px] px-[35px]">
      <div className={`${rowStyle}`}>
        <span className={`${columnStyle}`}>공연시간</span>
        <span className={`${valueStyle}`}>
          {dayjs(startTime)
            .format('YYYY년 M월 D일 (ddd) a h시 m분')
            .replace(' 0분', '')}
        </span>
      </div>
      <div className={`${rowStyle}`}>
        <span className={`${columnStyle}`}>공연장소</span>
        <span className={`${valueStyle}`}>{address}</span>
      </div>
    </div>
  )
}

export default PerformanceInfo
