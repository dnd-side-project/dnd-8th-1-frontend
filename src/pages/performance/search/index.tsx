import {
  SearchResultHeader,
  SearchResultList,
  SearchResultTab,
} from '@components'
import { PERFORMANCE_SEARCH } from 'dummy'
import { useState } from 'react'

const PerformanceSearchPage = () => {
  const { comming, ended } = PERFORMANCE_SEARCH
  const [isComming, setIsComming] = useState(true)
  return (
    <div className="relative min-h-screen w-full bg-[#131313] px-[16px]">
      <div className="absolute left-0">
        <SearchResultHeader />
      </div>
      <>
        <section className="mb-[26px] pt-[86px]">
          <SearchResultTab
            commingCount={comming.length}
            endedCount={ended.length}
            isComming={isComming}
            setIsComming={setIsComming}
          />
        </section>
        <section>
          {isComming ? (
            <SearchResultList searchResultList={comming} />
          ) : (
            <SearchResultList searchResultList={ended} />
          )}
        </section>
      </>
    </div>
  )
}

export default PerformanceSearchPage
