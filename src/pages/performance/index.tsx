import { Center } from '@chakra-ui/react'
import {
  Calandar,
  FilterButton,
  FloatingButton,
  Pagination,
  PerformanceBanner,
  PerformanceList,
  SearchHeader,
  Spacer,
} from '@components'
import { CURRENT_MONTH, CURRENT_YEAR } from '@constants'
import { useCalendar } from '@hooks'
import {
  getAllPerformance,
  getImminentPerformances,
  performanceKeys,
  PerformancePayload,
  useImminentPerformance,
  usePerformance,
} from '@queries'
import { dehydrate, QueryClient, useQueryClient } from '@tanstack/react-query'
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

const PerformancePage = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
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
  const router = useRouter()
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
  const { data = fallback } = usePerformance(performancePayload)
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
  const { data: imminentPerformancesData = imminentFallback } =
    useImminentPerformance()

  const imminentPerformances = imminentPerformancesData.data

  const queryClient = useQueryClient()
  useEffect(() => {
    if (day && day >= monthYear.lastDate) {
      return
    } else {
      queryClient.prefetchQuery(
        [
          ...performanceKeys.all,
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
  return (
    <>
      <Head>
        <title>공연 정보 - Danverse</title>
      </Head>
      <section>
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
          <div className="ml-[304px]">
            <FloatingButton
              handleOnClick={() => {
                router.push('/performance/edit')
              }}
            />
          </div>
        </>
      </section>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const performancePayload: PerformancePayload = {
    year: CURRENT_YEAR,
    month: CURRENT_MONTH,
    day: '',
    location: '',
    genre: '',
    pageNumber: 0,
    pageSize: 15,
  }
  const queryClient = new QueryClient()
  await Promise.all([
    queryClient.prefetchQuery(
      [...performanceKeys.all, CURRENT_YEAR, CURRENT_MONTH, '', '', '', 0, 15],
      () => getAllPerformance(performancePayload),
    ),
    queryClient.prefetchQuery(
      performanceKeys.imminentPerformance,
      getImminentPerformances,
    ),
  ])
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default PerformancePage
