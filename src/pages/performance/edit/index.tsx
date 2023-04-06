import { PerformanceCreateForm } from '@components'
import { useCheckAuth } from '@hooks'
import { useCreatePerformance } from '@queries'

const PerformanceCreatePage = () => {
  useCheckAuth()
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
