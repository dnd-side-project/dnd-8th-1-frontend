import { SearchResult } from '@types'
import SearchResultListItem from './SearchResultListItem'
import emptyImage from '/public/assets/images/graphic_1.png'
import Image from 'next/image'
import { PLACEHOLDER_IMG } from '@constants'
import dayjs from 'dayjs'
import 'dayjs/locale/ko'
dayjs.locale('ko')

interface SearchResultListProps {
  searchResultList: SearchResult[]
}

const SearchResultList = ({ searchResultList }: SearchResultListProps) => {
  const makeDate = (date: string) => {
    const day = dayjs(date)
    return day.format('YYYY년 M월 D일')
  }

  const entireDate = Array.from(
    new Set(searchResultList?.map((item) => item.startDate)),
  )
    .sort((a, b) => {
      return dayjs(b).valueOf() - dayjs(a).valueOf()
    })
    .map((item) => makeDate(item))

  const filterResults = (date: string) => {
    return searchResultList.filter((item) => {
      const searchStartDate = makeDate(item.startDate)
      return date === searchStartDate
    })
  }

  const searchResults = Array.from({ length: entireDate.length }, (_, i) => {
    return {
      [entireDate[i]]: filterResults(entireDate[i]),
    }
  })

  const isEmptyResults = searchResultList?.length === 0

  return (
    <>
      {isEmptyResults ? (
        <div className="mt-[77.87px] mb-[118px] flex w-[100%] flex-col items-center justify-center">
          {/**
           *TODO: StyledImage 사용 시 렌더링 사이즈가 375px로 잡혀서 Image 컴포넌트 사용하는 것으로 변경 됨
           */}
          <div className="relative w-[fit] pl-[20px]">
            <Image
              src={emptyImage}
              alt="emptyImage"
              width={200}
              height={200}
              placeholder="empty"
              blurDataURL={PLACEHOLDER_IMG}
            />
            <p className="absolute left-[34px] bottom-0 text-center text-body1 text-gray-500 ">
              검색된 공연이 없습니다.
            </p>
          </div>
        </div>
      ) : (
        searchResults.map((dates, i) => (
          <section key={i}>
            <span className="mb-4 block text-body2 text-gray-300">
              {Object.keys(dates)}
            </span>
            {Object.values(dates).map((results) =>
              results.map((result) => (
                <SearchResultListItem key={result.id} searchResult={result} />
              )),
            )}
            <div className="my-[16px] h-[1px] w-[343px] bg-gray-700" />
          </section>
        ))
      )}
    </>
  )
}

export default SearchResultList
