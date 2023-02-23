import { Center } from '@chakra-ui/react'
import {
  Calandar,
  FilterButton,
  Pagination,
  PerformanceBanner,
  PerformanceList,
  SearchHeader,
} from '@components'
import { CURRENT_DAY, CURRENT_MONTH, CURRENT_YEAR } from '@constants'
import { useCalendar } from '@hooks'
import {
  getAllPerformance,
  getImminentPerformances,
  PerformancePayload,
  useImminentPerformance,
  usePerformance,
} from '@queries'
import {
  GenreTypes,
  Performance,
  PerformanceImminent,
  PerformanceImminentResponse,
  PerformanceResponse,
  RegionTypes,
} from '@types'
import PerformanceEntireList from 'components/organisms/PerformanceEntireList'
import { GetServerSideProps } from 'next'
import { useEffect, useState } from 'react'

interface PerformanceProps {
  allData: PerformanceResponse
  imminentPerformanceData: PerformanceImminentResponse
}

const PerformancePage = ({
  allData,
  imminentPerformanceData,
}: PerformanceProps) => {
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
      year: CURRENT_YEAR,
      month: CURRENT_MONTH,
      day: CURRENT_DAY,
      location: '',
      genre: '',
      pageNumber: 0,
      pageSize: 15,
    })
  const { month: payloadMonth, year, day } = performancePayload
  const fallback = {} as PerformanceResponse
  const { data = fallback, isLoading } = usePerformance(
    performancePayload,
    allData,
  )
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
  const imminentFallback = {} as PerformanceImminentResponse
  const { data: imminentPerformances = imminentFallback } =
    useImminentPerformance(imminentPerformanceData)

  if (isLoading) {
    return <div></div>
  }
  return (
    <>
      {isSearchOpen && (
        <SearchHeader open={isSearchOpen} setOpen={setIsSearchOpen} />
      )}
      <section className="mt-[52px]">
        <PerformanceBanner
          imminentPerformances={imminentPerformances as PerformanceImminent[]}
        />
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

/**
 *TODO: 추후 initialData로 가져오는 로직이 아닌 dehydrated로 가져오는 로직으로 변경
 */
export const getServerSideProps: GetServerSideProps = async () => {
  const allData = await getAllPerformance({
    year: CURRENT_YEAR,
    month: CURRENT_MONTH,
    day: CURRENT_DAY,
    location: '',
    genre: '',
    pageNumber: 0,
    pageSize: 15,
  })
  const { data: imminentPerformanceData } = await getImminentPerformances()
  return {
    props: {
      allData,
      imminentPerformanceData,
    },
  }
}

export default PerformancePage
