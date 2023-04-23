import { Center } from '@chakra-ui/react'
import {
  Calandar,
  FilterButton,
  FloatingButton,
  ModalWithSingleButton,
  Pagination,
  PerformanceBanner,
  PerformanceList,
  ProfileRegisterContent,
  Spacer,
  PerformanceEntireList,
} from '@components'
import { CURRENT_MONTH, CURRENT_YEAR } from '@constants'
import { useCalendar, useDisclosure } from '@hooks'
import {
  getAllPerformance,
  getImminentPerformances,
  performanceKeys,
  PerformanceParams,
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
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { userAtom } from 'states'

const PerformancePage = () => {
  const {
    monthYear,
    month,
    handleSetMonth,
    handleIsSunday,
    setCurrentDay,
    currentDay,
    calandar,
    isTotal,
    setIsTotal,
  } = useCalendar()
  const router = useRouter()
  const [performanceParams, setPerformanceParams] = useState<PerformanceParams>(
    {
      year: CURRENT_YEAR,
      month: CURRENT_MONTH,
      day: '',
      location: '',
      genre: '',
      pageNumber: 0,
      pageSize: 15,
    },
  )
  const {
    month: ParamsMonth,
    year,
    day,
    location,
    genre,
    pageNumber,
    pageSize,
  } = performanceParams
  const fallback = {} as PerformanceResponse
  const { data = fallback } = usePerformance(performanceParams)
  const { data: performanceData } = data
  const calandarProps = {
    month,
    handleSetMonth,
    handleIsSunday,
    setCurrentDay,
    currentDay,
    calandar,
    setPerformanceParams,
    performanceParams,
  }
  const currentPage = performanceParams.pageNumber + 1

  useEffect(() => {
    setPerformanceParams({
      ...performanceParams,
      pageNumber: 0,
    })
  }, [ParamsMonth, year, day])
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
          ParamsMonth,
          day && day + 1,
          location,
          genre,
          pageNumber,
          pageSize,
        ],
        () => getAllPerformance(performanceParams),
      )
    }
  }, [day])

  const { hasProfile, id } = useRecoilValue(userAtom)
  const [showProfileRegisterModal, setShowProfileRegisterModal] =
    useDisclosure()
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
              setPerformanceParams({
                ...performanceParams,
                pageNumber: 0,
                location: region as RegionTypes,
              })
            }
            type="region"
          />
          <div className="ml-[8px]">
            <FilterButton
              handleSelected={(genre) =>
                setPerformanceParams({
                  ...performanceParams,
                  pageNumber: 0,
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
                  setPerformanceParams({
                    ...performanceParams,
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
                if (!hasProfile) {
                  setShowProfileRegisterModal(true)
                } else {
                  router.push('/performance/edit')
                }
              }}
            />
          </div>
        </>
        {/** 프로필 등록 모달 */}
        {showProfileRegisterModal && (
          <ModalWithSingleButton
            handleOnClick={() => router.push(`/profile/${id}/edit`)}
            submitMessage="프로필 등록하기"
            showModal={showProfileRegisterModal}
            setShowModal={setShowProfileRegisterModal}
            hasCloseButton={true}
          >
            <ProfileRegisterContent />
          </ModalWithSingleButton>
        )}
      </section>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const performanceParams: PerformanceParams = {
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
      () => getAllPerformance(performanceParams),
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
