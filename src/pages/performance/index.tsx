import { Center } from '@chakra-ui/react'
import {
  Calandar,
  FilterButton,
  FloatingButton,
  Pagination,
  PerformanceBanner,
  PerformanceList,
  Spacer,
} from '@components'
import { CURRENT_MONTH, CURRENT_YEAR, QUERY_KEY } from '@constants'
import { useCalendar } from '@hooks'
import {
  getAllPerformance,
  getImminentPerformances,
  PerformancePayload,
  useImminentPerformance,
  usePerformance,
} from '@queries'
import { useQueryClient } from '@tanstack/react-query'
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
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

interface PerformanceProps {
  allData: PerformanceResponse
  imminentPerformanceData: PerformanceImminentResponse
}

const PerformancePage = ({
  allData,
  imminentPerformanceData,
}: PerformanceProps) => {
  const [isTotal, setIsTotal] = useState(true)
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
      day: '',
      location: '',
      genre: '',
      pageNumber: 0,
      pageSize: 15,
    })
  const {
    month: payloadMonth,
    year,
    day,
    location,
    genre,
    pageNumber,
    pageSize,
  } = performancePayload
  const fallback = {} as PerformanceResponse
  const { data = fallback } = usePerformance(performancePayload, allData)
  const { data: performanceData } = data
  performanceData?.content
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

  const queryClient = useQueryClient()
  useEffect(() => {
    if (day && day >= monthYear.lastDate) {
      return
    } else {
      queryClient.prefetchQuery(
        [
          QUERY_KEY.PERFORMANCE.TOTAL_PERFORMANCE,
          year,
          payloadMonth,
          day && day + 1,
          location,
          genre,
          pageNumber,
          pageSize,
        ],
        () => getAllPerformance(performancePayload),
      )
    }
  }, [day])

  const router = useRouter()
  return (
    <>
      <Head>
        <title>공연 정보 - Danverse</title>
      </Head>
      <section className="mt-[-2px]">
        <PerformanceBanner
          imminentPerformances={imminentPerformances as PerformanceImminent[]}
        />
        <Calandar
          {...calandarProps}
          isTotal={isTotal}
          setIsTotal={setIsTotal}
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
          {isTotal ? (
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
          <div className="ml-[310px]">
            <FloatingButton
              handleOnClick={() => router.push('/performance/edit')}
            />
          </div>
          {performanceData?.content.length !== 0 ? (
            <Center className={isTotal ? 'mt-[15px] mb-[30px]' : 'my-[30px]'}>
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
          ) : (
            <Spacer size={60} />
          )}
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
    day: '',
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
