import { MeetCreateForm } from '@components'
import { MeetDetail, MeetDetailResponse } from '@types'
import { useMeetDetail, useModifyMeet } from '@queries'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'

interface MeetCreatePageProps {
  eventId: number
}

const MeetCreatePage = ({ eventId }: MeetCreatePageProps) => {
  const fallback = {} as MeetDetailResponse
  const { data = fallback, isLoading } = useMeetDetail(eventId)
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
}: GetServerSidePropsContext) => {
  return {
    props: {
      eventId: params?.meetId as string,
    },
  }
}

export default MeetCreatePage
