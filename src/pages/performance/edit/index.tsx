import { PerformanceCreateForm } from '@components'
import { useCreatePerformance } from '@queries'
import Head from 'next/head'

const PerformanceCreatePage = () => {
  const { mutate: requestCreatePerformance } = useCreatePerformance()
  return (
    <>
      <Head>
        <title>공연 등록 - Danverse</title>
      </Head>
      <PerformanceCreateForm
        handleOnSubmit={(formValues) => {
          requestCreatePerformance(formValues)
        }}
      />
    </>
  )
}

export default PerformanceCreatePage
