import { MeetCreateForm } from '@components'
import { useCreateMeet } from '@queries'

const MeetCreatePage = () => {
  const { mutate: requestCreateMeet } = useCreateMeet()
  return (
    <MeetCreateForm
      handleOnSubmit={(formValues) => requestCreateMeet(formValues)}
    />
  )
}

export default MeetCreatePage
