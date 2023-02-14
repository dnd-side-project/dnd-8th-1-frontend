const ONE_DAY_TO_MILLISECONDS = 1000 * 60 * 60 * 24

const calculateDday = (date: string) => {
  const present = new Date()
  const target = new Date(date)
  const dayGap = target.getTime() - present.getTime()

  const dday = Math.ceil(dayGap / ONE_DAY_TO_MILLISECONDS)
  return dday
}

export default calculateDday
