import { MeetCreateForm } from '@components'

const MeetCreatePage = () => {
  return (
    <MeetCreateForm handleOnSubmit={(formValues) => console.log(formValues)} />
  )
}

export default MeetCreatePage
