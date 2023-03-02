import { ProfileCreateForm } from '@components'
import { useCreateProfile } from '@queries'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'

interface ProfileEditPageProps {
  memberId: number
}

const ProfileEditPage = ({ memberId }: ProfileEditPageProps) => {
  const { mutate: requestCreateProfile } = useCreateProfile(memberId)
  return (
    <ProfileCreateForm
      handleOnSubmit={(formValues) => {
        requestCreateProfile(formValues)
      }}
    />
  )
}

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext,
) => {
  return {
    props: {
      memberId: parseInt(ctx?.params?.profileId as string),
    },
  }
}

export default ProfileEditPage
