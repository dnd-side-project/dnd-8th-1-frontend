/* eslint-disable @typescript-eslint/no-explicit-any */
import { Center } from '@chakra-ui/react'
import {
  Calandar,
  FilterButton,
  Pagination,
  PerformanceBanner,
  PerformanceList,
  SearchHeader,
} from '@components'
import { useCalendar } from '@hooks'
import { PerformancePayload, usePerformance } from '@queries'
import {
  GenreTypes,
  Performance,
  PerformanceResponse,
  RegionTypes,
} from '@types'
import PerformanceEntireList from 'components/organisms/PerformanceEntireList'
import { PERFORMANCE_IMMINENT } from 'dummy'
import { useEffect, useState } from 'react'

const PerformancePage = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isEntire, setIsEntire] = useState(false)
  const {
    monthYear,
    month,
    handleSetMonth,
    isSunday,
    setCurrentDay,
    currentDay,
    getDay,
    calandar,
  } = useCalendar()
  const [performancePayload, setPerformancePayload] =
    useState<PerformancePayload>({
      year: parseInt(monthYear.year),
      month: parseInt(monthYear.month),
      day: currentDay + 1,
      location: '',
      genre: '',
      pageNumber: 0,
      pageSize: 15,
    })
  const { month: payloadMonth, year, day } = performancePayload
  const fallback = {} as PerformanceResponse
  const { data = fallback, isLoading } = usePerformance(performancePayload)
  const { data: performanceData } = data
  const calandarProps = {
    month,
    handleSetMonth,
    isSunday,
    setCurrentDay,
    currentDay,
    getDay,
    calandar,
    setPerformancePayload,
    performancePayload,
  }
  const currentPage = performancePayload.pageNumber + 1

  useEffect(() => {
    setPerformancePayload({
      ...performancePayload,
      pageNumber: 0,
    })
  }, [payloadMonth, year, day])

  if (isLoading) {
    return <div></div>
  }
  console.log(currentPage)
  return (
    <>
      {isSearchOpen && (
        <SearchHeader open={isSearchOpen} setOpen={setIsSearchOpen} />
      )}
      <section className="mt-[52px]">
        <PerformanceBanner imminentPerformances={PERFORMANCE_IMMINENT as any} />
        <Calandar
          {...calandarProps}
          isEntire={isEntire}
          setIsEntire={setIsEntire}
          setIsSearchOpen={setIsSearchOpen}
        />
        <div className="flex w-full px-[16px] py-[22px]">
          <FilterButton
            handleSelected={(region) =>
              setPerformancePayload({
                ...performancePayload,
                location: region as RegionTypes,
              })
            }
            type="region"
          />
          <div className="ml-[8px]">
            <FilterButton
              handleSelected={(genre) =>
                setPerformancePayload({
                  ...performancePayload,
                  genre: genre as GenreTypes,
                })
              }
              type="genre"
            />
          </div>
        </div>
        <>
          {isEntire ? (
            <div className="flex flex-col items-center justify-center px-[16px]">
              <PerformanceEntireList
                performances={performanceData?.content as Performance[]}
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center px-[16px]">
              <PerformanceList
                performances={performanceData?.content as Performance[]}
              />
            </div>
          )}
          <Center className={isEntire ? 'mt-[15px] mb-[30px]' : 'my-[30px]'}>
            <Pagination
              currentPage={currentPage as number}
              totalPages={performanceData?.totalPages as number}
              handleChangePage={(page) => {
                setPerformancePayload({
                  ...performancePayload,
                  pageNumber: page - 1,
                })
              }}
            />
          </Center>
        </>
      </section>
    </>
  )
}

export default PerformancePage
