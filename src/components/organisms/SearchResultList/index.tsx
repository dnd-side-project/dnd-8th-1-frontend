import { SearchResult } from '@types'
import { StyledImage } from '@components'
import SearchResultListItem from './SearchResultListItem'
import emptyImage from '@assets/images/graphic_1.png'

interface SearchResultListProps {
  searchResultList: SearchResult[]
}

const SearchResultList = ({ searchResultList }: SearchResultListProps) => {
  const makeDate = (date: string) => {
    return `${date[0]}월 ${date.slice(2, 4)}일`
  }
  const entireDate = Array.from(
    new Set(
      searchResultList.map((item) => makeDate(item.startDate.slice(6, 10))),
    ),
  )

  const filterResults = (date: string) => {
    return searchResultList.filter((item) => {
      const searchStartDate = makeDate(item.startDate.slice(6, 10))
      return date === searchStartDate
    })
  }
  const searchResults = Array.from({ length: entireDate.length }, (_, i) => {
    return {
      [entireDate[i]]: filterResults(entireDate[i]),
    }
  })
  const isEmptyResults = searchResultList.length === 0

  return (
    <>
      {isEmptyResults ? (
        <div className="mt-[77.87px] mb-[118px] flex w-[100%] flex-col items-center justify-center">
          <StyledImage
            /**
             *TODO: props에 StaticImageData 타입 추가 필요
             */
            src={emptyImage as unknown as string}
            width={165}
            height={133}
            alt="없는 결과에 대한 이미지"
            styleClass="flex items-center justify-center ml-[18px]"
          />
          <p className="text-center text-body1 text-gray-500 ">
            검색된 공연이 없습니다.
          </p>
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
