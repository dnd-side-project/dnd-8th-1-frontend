import { performanceAPI } from '@apis'
import { QUERY_KEY } from '@constants'
import { useQuery } from '@tanstack/react-query'
import { SearchResultResponse } from '@types'
import { AxiosResponse } from 'axios'

const getSearchResult = async (teamName: string) => {
  const { data }: AxiosResponse<SearchResultResponse> =
    await performanceAPI.search(teamName)
  return data
}

const useSearchResult = (teamName: string) => {
  return useQuery([QUERY_KEY.PERFORMANCE_SEARCH, teamName], () =>
    getSearchResult(teamName),
  )
}

export default useSearchResult
