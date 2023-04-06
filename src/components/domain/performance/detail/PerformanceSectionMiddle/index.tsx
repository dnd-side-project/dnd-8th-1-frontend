import { Center } from '@chakra-ui/react'
import { Tag } from '@components'
import { isDeadLine, calculateDday } from '@utils'

interface PerformanceSectionMiddleProps {
  startDate: string
  title: string
  location: string
  genres: string[]
}

const PerformanceSectionMiddle = ({
  startDate,
  title,
  location,
  genres,
}: PerformanceSectionMiddleProps) => {
  return (
    <section>
      <Center className="mt-[18px] flex-col">
        <div className="mb-[11px] flex h-[24px] items-center justify-center rounded-[20px] bg-gray-700 px-[9px] py-[5.54px]">
          {!isDeadLine(startDate) ? (
            <span className="text-caption font-bold text-green-light">{`D-${calculateDday(
              startDate,
            )}`}</span>
          ) : (
            <span className="text-caption font-bold text-[#EB5526]">
              종료된 공연
            </span>
          )}
        </div>

        <h1 className="mb-[29px] text-headline font-bold">{title}</h1>

        <div className="flex gap-[8px]">
          <Tag type={'region'} content={location} />
          {genres.map((genre) => (
            <Tag key={genre} type={'genre'} content={genre} />
          ))}
        </div>
      </Center>
    </section>
  )
}

export default PerformanceSectionMiddle
