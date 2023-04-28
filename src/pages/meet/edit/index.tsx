import { MeetCreateForm } from '@components'
import { useCreateMeet } from '@queries'
import { useCheckAuth } from '@hooks'
import Head from 'next/head'

const MeetCreatePage = () => {
  useCheckAuth()
  const { mutate: requestCreateMeet } = useCreateMeet()
  return (
    <>
      <Head>
        <title>콜라보 · 쉐어 글 작성 - Danverse</title>
      </Head>
      <MeetCreateForm
        handleOnSubmit={(formValues) => requestCreateMeet(formValues)}
      />
    </>
  )
}

export default MeetCreatePage
