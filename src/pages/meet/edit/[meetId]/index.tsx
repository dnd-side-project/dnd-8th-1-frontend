/* eslint-disable @typescript-eslint/no-explicit-any */
import { MeetCreateForm } from '@components'
import { MeetDetail, MeetDetailResponse } from '@types'
import { useMeetDetail, useModifyMeet } from '@queries'
import { GetServerSideProps } from 'next'

const MeetCreatePage = ({ params }: any) => {
  const fallback = {} as MeetDetailResponse
  const { data = fallback, isLoading } = useMeetDetail(params?.meetId)
  const detailData = data?.data as MeetDetail
  const { mutate: requestModifyMeet } = useModifyMeet(detailData?.id)

  if (isLoading) {
    return <div></div>
  }
  return (
    <MeetCreateForm
      previousValue={{
        id: detailData?.id,
        title: detailData?.title,
        location: detailData?.location,
        type: detailData?.type,
        imgUrl: detailData?.imgUrl,
        recruitType: detailData?.recruitType,
        description: detailData?.description,
        recruitCount: detailData?.recruitCount,
        deadline: detailData?.deadline,
      }}
      handleOnSubmit={(formValues) => {
        const payload = {
          ...formValues,
          id: detailData?.id,
        }
        requestModifyMeet(payload)
      }}
    />
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  params,
}: any) => {
  return {
    props: {
      params,
    },
  }
}

export default MeetCreatePage
