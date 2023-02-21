const isDeadLine = (date: string) => {
  const present = new Date()
  const target = new Date(date)
  const dayGap = target.getTime() - present.getTime()

  return dayGap <= 0
}

export default isDeadLine
