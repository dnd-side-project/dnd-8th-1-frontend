import { performanceAPI } from '@apis'
import { useQuery } from '@tanstack/react-query'
import { SearchResultResponse } from '@types'
import { AxiosResponse } from 'axios'
import { performanceKeys } from '@queries'

export const getSearchResult = async (teamName: string) => {
  const { data }: AxiosResponse<SearchResultResponse> =
    await performanceAPI.search(teamName)
  return data
}

const useSearchResult = (teamName: string) => {
  return useQuery([...performanceKeys.search, teamName], () =>
    getSearchResult(teamName),
  )
}

export default useSearchResult
