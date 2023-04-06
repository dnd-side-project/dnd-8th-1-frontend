import { PerformanceCreateForm } from '@components'
import { useDetailPerformance, useModifyPerformance } from '@queries'
import { GenreTypes, PerformanceDetailResponse } from '@types'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import Head from 'next/head'

interface PerformanceModifyPageProps {
  performanceId: string
}

const PerformanceModifyPage = ({
  performanceId,
}: PerformanceModifyPageProps) => {
  const fallback = {} as PerformanceDetailResponse
  const { data = fallback, isLoading } = useDetailPerformance(
    parseInt(performanceId),
  )
  const detailData = data?.data
  const { mutate: requestModifyPerformance } = useModifyPerformance(
    parseInt(performanceId),
  )
  /**
   *TODO: 임시 로딩 처리
   */
  if (isLoading) {
    return <div></div>
  }
  return (
    <>
      <Head>
        <title>공연 수정 - Danverse</title>
      </Head>
      <PerformanceCreateForm
        previousValue={{
          title: detailData?.title,
          imgUrl: detailData?.imgUrl,
          startDate: detailData.startDate,
          startTime: detailData.startTime,
          location: detailData.location,
          genres: detailData.genres as GenreTypes[],
          description: detailData.description,
          address: detailData.address,
        }}
        handleOnSubmit={(formValues) =>
          requestModifyPerformance({
            ...formValues,
            id: parseInt(performanceId),
          })
        }
      />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext,
) => {
  return {
    props: {
      performanceId: ctx?.params?.performanceId,
    },
  }
}

export default PerformanceModifyPage
