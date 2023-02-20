import dayjs from 'dayjs'

const isPossibleDay = (date: Date) => {
  return dayjs(Date.now()).valueOf() < dayjs(date).valueOf()
}

export default isPossibleDay
