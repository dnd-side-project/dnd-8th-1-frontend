import { ProfileCreateForm } from '@components'
import { useCreateProfile, useGetProfile, useModifyProfile } from '@queries'
import { GenreTypes, ProfileResponse } from '@types'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import Head from 'next/head'

interface ProfileEditPageProps {
  memberId: number
}

const ProfileEditPage = ({ memberId }: ProfileEditPageProps) => {
  const { mutate: requestCreateProfile } = useCreateProfile(memberId)
  const fallback = {} as ProfileResponse
  const { data = fallback, isLoading } = useGetProfile(memberId)
  const { mutate: requestModifyProfile } = useModifyProfile(memberId)
  const profileDetailData = data?.data
  if (isLoading) {
    return <div></div>
  }
  return (
    <>
      <Head>
        <title>
          프로필 {profileDetailData?.profile !== null ? '수정' : '등록'} -
          Danverse
        </title>
      </Head>
      <ProfileCreateForm
        previousValue={{
          careerStartDate:
            (profileDetailData?.profile?.careerStartDate as string) || null,
          description:
            (profileDetailData?.profile?.description as string) || null,
          genres: (profileDetailData?.profile?.genres as GenreTypes[]) || null,
          imgUrl: (profileDetailData?.profile?.imgUrl as string) || null,
          location: (profileDetailData?.profile?.location as string) || null,
          name: (profileDetailData?.profile?.name as string) || null,
          openChatUrl:
            (profileDetailData?.profile?.openChatUrl as string) || null,
          portfolio: {
            instagram:
              (profileDetailData?.profile?.portfolio?.instagram as string) ||
              null,
            tiktok:
              (profileDetailData?.profile?.portfolio?.tiktok as string) || null,
            youtube:
              (profileDetailData?.profile?.portfolio?.youtube as string) ||
              null,
          },
          type: (profileDetailData?.profile?.type as string) || null,
        }}
        handleOnSubmit={(formValues) => {
          if (profileDetailData.profile === null) {
            requestCreateProfile(formValues)
          } else {
            requestModifyProfile(formValues)
          }
        }}
      />
    </>
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
