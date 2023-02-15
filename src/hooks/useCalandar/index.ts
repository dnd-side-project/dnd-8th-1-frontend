import dayjs from 'dayjs'
import { useState } from 'react'

interface MonthYear {
  startDate: dayjs.Dayjs // 달의 첫번째 날에 대한 dayjs 객체(lastDate를 구하기 위함)
  lastDate: number // 달의 마지막 날
  monthName: string // 달의 이름 (ex. January)
  month: string // 달 (ex. 01, 10)
  year: string // 년도 (ex. 2021)
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
  console.log(monthYear)
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
