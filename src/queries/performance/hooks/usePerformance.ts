import { performanceAPI } from '@apis'
import { useQuery } from '@tanstack/react-query'
import { GenreTypes, PerformanceResponse, RegionTypes } from '@types'
import { AxiosResponse } from 'axios'
import { performanceKeys } from '@queries'

export interface PerformanceParams {
  year?: number | ''
  month?: number | ''
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
}: PerformanceParams) => {
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

export const usePerformance = ({
  year,
  month,
  day,
  location,
  genre,
  pageNumber,
  pageSize,
}: PerformanceParams) => {
  return useQuery(
    [
      ...performanceKeys.all,
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
    },
  )
}
