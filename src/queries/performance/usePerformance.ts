import { performanceAPI } from '@apis'
import { QUERY_KEY } from '@constants'
import { useQuery } from '@tanstack/react-query'
import { GenreTypes, PerformanceResponse, RegionTypes } from '@types'
import { AxiosResponse } from 'axios'

export interface PerformancePayload {
  year?: number
  month?: number
  day?: number | ''
  location?: RegionTypes | ''
  genre?: GenreTypes | ''
  pageNumber: number
  pageSize: number
}

export const getAllPerformance = async ({
  year,
  month,
  day,
  location,
  genre,
  pageNumber,
  pageSize,
}: PerformancePayload) => {
  const { data }: AxiosResponse<PerformanceResponse> =
    await performanceAPI.getAll(
      year,
      month,
      day,
      location,
      genre,
      pageNumber,
      pageSize,
    )
  return data
}

const usePerformance = (
  {
    year,
    month,
    day,
    location,
    genre,
    pageNumber,
    pageSize,
  }: PerformancePayload,
  allData: PerformanceResponse,
) => {
  return useQuery(
    [
      QUERY_KEY.PERFORMANCE,
      year,
      month,
      day,
      location,
      genre,
      pageNumber,
      pageSize,
    ],
    () =>
      getAllPerformance({
        year,
        month,
        day,
        location,
        genre,
        pageNumber,
        pageSize,
      }),
    {
      keepPreviousData: true,
      initialData: allData,
    },
  )
}

export default usePerformance
