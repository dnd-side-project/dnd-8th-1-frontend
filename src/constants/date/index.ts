import dayjs from 'dayjs'

export const ONE_DAY_TO_MILLISECONDS = 1000 * 60 * 60 * 24

export const CURRENT_YEAR = dayjs().get('year')
export const CURRENT_MONTH = dayjs().get('month') + 1
export const CURRENT_DAY = dayjs().get('date')
