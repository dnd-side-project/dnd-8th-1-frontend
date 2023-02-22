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
import PerformanceEntireList from 'components/organisms/PerformanceEntireList'
import { PERFORMANCE_DAY, PERFORMANCE_IMMINENT, PERFORMANCE_MONTH } from 'dummy'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const PerformancePage = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isEntire, setIsEntire] = useState(false)
  const {
    month,
    handleSetMonth,
    isSunday,
    setCurrentDay,
    currentDay,
    getDay,
    calandar,
  } = useCalendar()
  const calandarProps = {
    month,
    handleSetMonth,
    isSunday,
    setCurrentDay,
    currentDay,
    getDay,
    calandar,
  }
  const [dayItems, setDayItems] = useState(PERFORMANCE_DAY[0].content)
  const [entireItems, setEntireItems] = useState(PERFORMANCE_MONTH[0].content)
  const router = useRouter()
  const { page } = router.query
  const { pageNumber } = isEntire
    ? PERFORMANCE_MONTH[page ? parseInt(page as string) - 1 : 0]
    : PERFORMANCE_DAY[page ? parseInt(page as string) - 1 : 0]
  const totalPages = isEntire ? PERFORMANCE_MONTH.length : dayItems.length
  const [currentPage, setCurrentPage] = useState(pageNumber)

  // TODO: 임시 페이지네이션 로직
  useEffect(() => {
    router.push(`?page=${currentPage + 1}`)
    setEntireItems(PERFORMANCE_MONTH[currentPage].content)
  }, [currentPage])
  useEffect(() => {
    router.push(`?page=${currentPage + 1}`)
    setDayItems(PERFORMANCE_DAY[currentPage].content)
  }, [currentPage])
  useEffect(() => {
    setCurrentPage(0)
    router.push(`?page=${1}`)
  }, [isEntire, currentDay])
  console.log(currentPage)

  //TODO : 필터 로직 처리 하기
  const [currentRegion, setCurrentRegion] = useState('')
  const [currentGenre, setCurrentGenre] = useState('')

  return (
    <>
      {isSearchOpen && (
        <SearchHeader open={isSearchOpen} setOpen={setIsSearchOpen} />
      )}
      <PerformanceBanner imminentPerformances={PERFORMANCE_IMMINENT as any} />
      <Calandar
        {...calandarProps}
        isEntire={isEntire}
        setIsEntire={setIsEntire}
        setIsSearchOpen={setIsSearchOpen}
      />
      <div className="flex w-full px-[16px] py-[22px]">
        <FilterButton
          handleSelected={(region) => setCurrentRegion(region)}
          type="region"
        />
        <div className="ml-[8px]">
          <FilterButton
            handleSelected={(genre) => setCurrentGenre(genre)}
            type="genre"
          />
        </div>
      </div>
      <>
        {isEntire ? (
          <div className="flex flex-col items-center justify-center px-[16px]">
            <PerformanceEntireList performances={entireItems as any} />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center px-[16px]">
            <PerformanceList performances={dayItems} />
          </div>
        )}
        <Center className={isEntire ? 'mt-[15px] mb-[30px]' : 'my-[30px]'}>
          <Pagination
            currentPage={currentPage + 1}
            totalPages={totalPages}
            handleChangePage={(page) => {
              setCurrentPage(page - 1)
            }}
          />
        </Center>
      </>
    </>
  )
}

export default PerformancePage
