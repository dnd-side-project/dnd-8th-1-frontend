import { useContext } from 'react'
import { CalandarCtx, CalendarProps } from '.'
import DayListItem from './DayListItem'

const DayList = () => {
  const { calandar } = useContext(CalandarCtx) as Pick<
    CalendarProps,
    'calandar'
  >
  return (
    <>
      {calandar.map((_, day) => (
        <DayListItem key={day} day={day} />
      ))}
    </>
  )
}

export default DayList
