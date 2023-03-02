import Head from 'next/head'
import {
  ProfileTopSection,
  ProfileDisabled,
  ProfileDescription,
  Spacer,
  ProfileButtonGroup,
  MyProfileMenu,
} from '@components'
import {
  GenreTypes,
  ProfileResponse,
  RecruitmentType,
  RegionTypes,
} from '@types'
import { Center } from '@chakra-ui/react'
import { isEmptyFiled } from '@utils'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { useGetProfile } from 'queries/profile/hooks'
import { useRecoilValue } from 'recoil'
import { userAtom } from 'states'
interface ProfileProps {
  memberId: number
}

const ProfilePage = ({ memberId }: ProfileProps) => {
  const fallback = {} as ProfileResponse
  const { data = fallback, isLoading } = useGetProfile(memberId)
  const { id: userId } = useRecoilValue(userAtom)
  const profileData = data?.data?.profile
  const profile = profileData
  const notProfileData = data?.data
  if (isLoading) {
    return <div></div>
  }
  return (
    <>
      <Head>
        <title>프로필 - Danverse</title>
      </Head>
      <main>
        {/** 일반 적인 경우 */}
        {profile && (
          <>
            <ProfileTopSection
              userId={userId as number}
              id={profile.id as number}
              type={profile.type as RecruitmentType}
              imgUrl={profile.imgUrl}
              name={profile.name}
              genres={profile.genres as GenreTypes[]}
              location={profile.location as RegionTypes}
              startDate={profile.careerStartDate}
            />

            <Center flexDirection="column" className="mt-[-63px]">
              {!isEmptyFiled(profile.description) && (
                <>
                  <Spacer size={24} />
                  <ProfileDescription description={profile.description} />
                </>
              )}
              <Spacer size={20} />
              <ProfileButtonGroup
                openChatUrl={profile.openChatUrl}
                portfolio={profile.portfolio}
              />
            </Center>
          </>
        )}

        {/** 프로필 등록을 하지 않았을 경우(프로필 필드는 null이지만 그 이외의 필드는 null이 아닌 경우로 분기 처리) */}
        {!profile && notProfileData && (
          <ProfileDisabled
            userId={userId as number}
            profileImage={notProfileData.imgUrl}
            name={notProfileData.name}
            id={memberId}
          />
        )}

        {/* 자기 자신의 프로필일 경우 */}
        {userId && userId === memberId && (
          <>
            <Spacer size={24} />
            <MyProfileMenu />
          </>
        )}
      </main>
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

export default ProfilePage
