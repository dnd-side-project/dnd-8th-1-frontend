/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  SearchResultHeader,
  SearchResultList,
  SearchResultTab,
} from '@components'
import { useSearchResult } from '@queries'
import { SearchResult, SearchResultResponse } from '@types'
import { GetServerSideProps } from 'next'
import { useState } from 'react'

const PerformanceSearchPage = ({ query }: any) => {
  const teamName = query?.team
  const fallback = {} as SearchResultResponse
  const { data = fallback } = useSearchResult(teamName)
  const searchData = data?.data
  const comming = searchData?.comming
  const ended = searchData?.ended
  const [isComming, setIsComming] = useState(true)
  return (
    <div className="relative min-h-screen w-full bg-[#131313] px-[16px]">
      <div className="absolute left-0">
        <SearchResultHeader />
      </div>
      <>
        <section className="mb-[26px] pt-[86px]">
          <SearchResultTab
            commingCount={comming?.length as number}
            endedCount={ended?.length as number}
            isComming={isComming}
            setIsComming={setIsComming}
          />
        </section>
        <section>
          {isComming ? (
            <SearchResultList
              searchResultList={comming as SearchResult[] | []}
            />
          ) : (
            <SearchResultList searchResultList={ended as SearchResult[] | []} />
          )}
        </section>
      </>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  query,
}: any) => {
  return {
    props: {
      query,
    },
  }
}

export default PerformanceSearchPage
