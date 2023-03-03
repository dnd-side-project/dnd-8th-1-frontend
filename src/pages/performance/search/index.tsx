import {
  SearchResultHeader,
  SearchResultList,
  SearchResultTab,
} from '@components'
import { getSearchResult, performanceKeys, useSearchResult } from '@queries'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { SearchResult, SearchResultResponse } from '@types'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import { useState } from 'react'

interface PerformanceSearchPageProps {
  teamName: string
}

const PerformanceSearchPage = ({ teamName }: PerformanceSearchPageProps) => {
  const fallback = {} as SearchResultResponse
  const { data = fallback } = useSearchResult(teamName)
  const searchData = data?.data
  const comming = searchData?.comming
  const ended = searchData?.ended
  const [isComming, setIsComming] = useState(true)
  return (
    <>
      <Head>
        <title>공연 검색 결과 - Danverse</title>
      </Head>
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
              <SearchResultList
                searchResultList={ended as SearchResult[] | []}
              />
            )}
          </section>
        </>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  query,
}: GetServerSidePropsContext) => {
  const queryClient = new QueryClient()
  const teamName = query?.team as string
  await queryClient.prefetchQuery([...performanceKeys.search, teamName], () =>
    getSearchResult(query?.team as string),
  )
  return {
    props: {
      teamName,
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default PerformanceSearchPage
