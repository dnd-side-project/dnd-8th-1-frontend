import { PerformanceCreateForm } from '@components'
import { useCreatePerformance } from '@queries'

const PerformanceCreatePage = () => {
  const { mutate: requestCreatePerformance } = useCreatePerformance()
  return (
    <>
      <PerformanceCreateForm
        handleOnSubmit={(formValues) => {
          requestCreatePerformance(formValues)
        }}
      />
    </>
  )
}

export default PerformanceCreatePage
