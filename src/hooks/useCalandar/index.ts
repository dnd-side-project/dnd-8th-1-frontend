// import dayjs from 'dayjs'
import { useState } from 'react'
import dayjs from 'dayjs'

interface MonthYear {
  startDate: dayjs.Dayjs // first day of the month
  lastDate: number // last date of the month
  monthName: string // name of the month
  month: string // two digit month number
  year: string // four digit year
}

function getUpdatedMonthYear(
  monthYear: MonthYear,
  monthIncrement: number,
): dayjs.Dayjs {
  return monthYear.startDate.clone().add(monthIncrement, 'months')
}

function getNewMonthYear(
  prevMonthYear: MonthYear,
  monthIncrement: number,
): MonthYear {
  const newMonthYear = getUpdatedMonthYear(prevMonthYear, monthIncrement)

  return getMonthYearDetails(newMonthYear)
}

function getMonthYearDetails(initialDate: dayjs.Dayjs): MonthYear {
  const month = initialDate.format('MM')
  const year = initialDate.format('YYYY')
  const startDate = dayjs(`${year}${month}01`)
  const lastDate = Number(startDate.clone().endOf('month').format('DD'))
  const monthName = startDate.format('MMMM')
  return { startDate, lastDate, monthName, month, year }
}

const useCalendar = () => {
  const currentMonth = getMonthYearDetails(dayjs())
  const [monthYear, setMonthYear] = useState(currentMonth)
  const [currentDay, setCurrentDay] = useState(0)
  const isSunday = (day: number) => {
    const date = dayjs(`${monthYear.year}-${monthYear.month}-${day + 1}`)
    return date.day() === 0
  }
  const handleSetMonth = (monthIncrement: number) => {
    setMonthYear((prev) => getNewMonthYear(prev, monthIncrement))
  }
  const getDay = (day: number) => {
    return day + 1
  }
  const month =
    monthYear.month[0] !== '0' ? monthYear.month : monthYear.month.slice(1)
  const calandar = Array.from({ length: monthYear.lastDate })
  return {
    monthYear,
    handleSetMonth,
    isSunday,
    currentDay,
    setCurrentDay,
    getDay,
    month,
    calandar,
  }
}

export default useCalendar
export type { MonthYear }
