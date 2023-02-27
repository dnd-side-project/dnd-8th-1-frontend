import Head from 'next/head'
import {
  ProfileTopSection,
  ProfileDisabled,
  ProfileDescription,
  Spacer,
  ProfileButtonGroup,
  MyProfileMenu,
} from '@components'
import { GenreTypes, RecruitmentType, RegionTypes } from '@types'
import { Center } from '@chakra-ui/react'
import { isEmptyFiled } from '@utils'
import { Profile } from '@types'
// TODO: 장르랑 지역, 경력, 소개는 필수가 아님

const descriptionLong =
  '로렘 입숨은 출판이나 그래픽 디자인 \n\n분야에서 폰트, 타이포그래피, 레이아웃 같은 그래픽 요소나시각적 연출을 보여줄 때 사용하는 표준 채우기텍스트로, 최종 결과를 더.로렘 입숨은 출판이나 그래픽 디자인 \n\n분야에서 폰트, 타이포그래피, 레이아웃 같은 그래픽 요소나시각적 연출을 보여줄 때 사용하는 표준 채우기텍스트로, 최종 결과를 더'

const PROFILE_DUMMY = {
  id: 11,
  name: '아이키',
  imgUrl: 'https://picsum.photos/500',
  location: '부산' as RegionTypes,
  genre: ['커버댄스', '스트릿댄스'] as GenreTypes[],
  startDate: '2011-01-05',
  description: descriptionLong,
  openChatUrl: 'https://www.allsilver.dev/',
  portfolio: {
    youtubeUrl: 'https://www.allsilver.dev/',
    instagramUrl: 'https://www.allsilver.dev/',
    tiktokUrl: 'https://www.allsilver.dev/',
  },
  type: '댄스팀' as RecruitmentType,
}

// TODO: 백엔드와 협의 안됨
const MEMBER_DUMMY = {
  id: 1,
  name: '아이키',
  imgUrl: 'https://picsum.photos/500',
  email: '123@naver.com',
  isSignUp: true,
  role: '권한',
  profile: PROFILE_DUMMY,
  // 프로필 없는 경우
  // profile: null as unknown as Profile,
}

const ProfilePage = () => {
  const { profile, imgUrl, name, id } = MEMBER_DUMMY

  return (
    <>
      <Head>
        <title>프로필 - Danverse</title>
      </Head>
      <main>
        {profile && (
          <>
            <ProfileTopSection
              id={profile.id}
              type={profile.type as RecruitmentType}
              imgUrl={profile.imgUrl}
              name={profile.name}
              genres={profile.genre}
              location={profile.location}
              startDate={profile.startDate}
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
        {!profile && (
          <ProfileDisabled profileImage={imgUrl} name={name} id={id} />
        )}
        {/* 자기 자신의 프로필일 경우 */}
        {/* TODO: 전역 상태를 통하여 자기 아이디인지 판단한 후 렌더링 */}
        {
          <>
            <Spacer size={24} />
            <MyProfileMenu />
          </>
        }
      </main>
    </>
  )
}

export default ProfilePage
