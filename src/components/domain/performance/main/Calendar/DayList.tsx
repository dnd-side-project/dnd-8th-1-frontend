import { useContext } from 'react'
import { CalandarContext, CalendarProps } from '.'
import DayListItem from './DayListItem'

const DayList = () => {
  const { calandar } = useContext(CalandarContext) as Pick<
    CalendarProps,
    'calandar'
  >
  return (
    <>
      {calandar.map((_, day) => (
        <DayListItem key={day} day={day + 1} />
      ))}
    </>
  )
}

export default DayList
