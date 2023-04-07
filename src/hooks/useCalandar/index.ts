import dayjs from 'dayjs'
import { useState } from 'react'

interface MonthYear {
  startDate: dayjs.Dayjs // 달의 첫번째 날에 대한 dayjs 객체(lastDate를 구하기 위함)
  lastDate: number // 달의 마지막 날
  monthName: string // 달의 이름 (ex. January)
  month: string // 달 (ex. 01, 10)
  year: string // 년도 (ex. 2021)
}

/**
 * monthIncrement 만큼 증가된 년-월의 dayjs 객체를 반환하는 함수
 */
const getUpdatedMonthYear = (
  monthYear: MonthYear,
  monthIncrement: number,
): dayjs.Dayjs => {
  return monthYear.startDate.clone().add(monthIncrement, 'months')
}

/**
 * 매개변수로 받은 dayjs 객체를 기준으로 MonthYear 객체를 반환하는 함수
 */
const getMonthYearDetails = (initialDate: dayjs.Dayjs): MonthYear => {
  const month = initialDate.format('MM')
  const year = initialDate.format('YYYY')
  const startDate = dayjs(`${year}${month}01`)
  const lastDate = Number(startDate.clone().endOf('month').format('DD'))
  const monthName = startDate.format('MMMM')
  return { startDate, lastDate, monthName, month, year }
}

/**
 * Update된 dayjs 객체를 통해 증가된 년-월의 MonthYear 객체를 반환하는 함수
 */
const getNewMonthYear = (
  prevMonthYear: MonthYear,
  monthIncrement: number,
): MonthYear => {
  const newMonthYear = getUpdatedMonthYear(prevMonthYear, monthIncrement)
  return getMonthYearDetails(newMonthYear)
}

const useCalendar = () => {
  const currentMonth = getMonthYearDetails(dayjs())
  const [monthYear, setMonthYear] = useState(currentMonth)
  // 달을 변경하는 함수
  const handleSetMonth = (monthIncrement: number) => {
    setMonthYear((prev) => getNewMonthYear(prev, monthIncrement))
  }
  // 매개변수 값을 받아 일요일인지 확인하는 함수
  const isSunday = (day: number) => {
    const date = dayjs(`${monthYear.year}-${monthYear.month}-${day + 1}`)
    return date.day() === 0
  }
  // 달에 대해 1 ~ 9 / 10 ~ 12가 아닌 01 ~ 09 / 10 ~ 12로 표기하기 위한 변수
  const month =
    monthYear.month[0] !== '0' ? monthYear.month : monthYear.month.slice(1)

  // 현재 달에 대한 1일 ~ 달의 마지막 일 까지의 배열을 만드는 변수
  // (swiper 컴포넌트의 캘린더 틀을 만들기 위해 사용)
  const calandar = Array.from({ length: monthYear.lastDate })

  // 사용자가 캘린더 클릭 했을 때의 일을 저장하기 위한 변수 (ex) 12일 클릭 -> 11)
  const [currentDay, setCurrentDay] = useState(0)
  // 현재 일의 - 1한 값이 currentDay이기 때문에 +1을 해주기 위한 함수
  const getDay = (day: number) => {
    return day + 1
  }

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
