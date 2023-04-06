import { MeetCreateForm } from '@components'
import { useCreateMeet } from '@queries'
import { useCheckAuth } from '@hooks'

const MeetCreatePage = () => {
  useCheckAuth()
  const { mutate: requestCreateMeet } = useCreateMeet()
  return (
    <MeetCreateForm
      handleOnSubmit={(formValues) => requestCreateMeet(formValues)}
    />
  )
}

export default MeetCreatePage
