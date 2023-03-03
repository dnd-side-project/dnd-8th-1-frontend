import {
  MainBanner,
  MainMeetSection,
  MainPerformanceSection,
  MainProfileSection,
  Spacer,
  WelcomeModalContent,
} from '@components'
import { useDisclosure } from '@hooks'
import {
  getAllPerformance,
  getLatestReviews,
  getMeet,
  getProfile,
  mainKeys,
  meetKeys,
  performanceKeys,
  PerformancePayload,
  useLatestReviews,
  useMeet,
  usePerformance,
  useProfile,
} from '@queries'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import {
  MainComment,
  Meet,
  Performance,
  PerformanceResponse,
  Profile,
} from '@types'
import { GetServerSideProps } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useRecoilValue } from 'recoil'
import { userAtom } from 'states'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const ModalWithSingleButton = dynamic(
  () => import('../components/templates/ModalWithSingleButton'),
  {
    ssr: false,
  },
)

const performanceParams: PerformancePayload = {
  year: '',
  month: '',
  day: '',
  location: '',
  genre: '',
  pageNumber: 0,
  pageSize: 6,
}
const meetParams = {
  location: '',
  type: '',
  page: 0,
  size: 6,
}

export default function Home() {
  const fallback = {} as PerformanceResponse
  const { data: allPerformanceData = fallback } =
    usePerformance(performanceParams)
  const { data: allMeetData } = useMeet(meetParams)
  const { data: allCommentData } = useLatestReviews()
  const { data: allProfileData } = useProfile()
  const meetData = allMeetData?.data?.content
  const performanceData = allPerformanceData?.data?.content.slice(0, 6)
  const commentData = allCommentData?.data
  const profileData = allProfileData?.data

  const { id, signUp } = useRecoilValue(userAtom)
  const router = useRouter()

  const [showDisclosure, setShowDisclosure] = useDisclosure()

  useEffect(() => {
    const showWelcomeModal = !!id && signUp
    setShowDisclosure(showWelcomeModal)
  }, [])

  return (
    <>
      <Head>
        <title>Home - Danverse</title>
      </Head>
      <main>
        <Spacer size={34} />
        <MainBanner />
        <Spacer size={60} />
        <MainMeetSection meetLists={meetData as Meet[]} />
        <div className="mb-[38px] mt-[10px] h-[10px] w-full bg-[#161616]" />
        <MainPerformanceSection
          performanceList={performanceData as Performance[]}
          commentList={commentData as MainComment[]}
        />
        <div className="mb-[38px] mt-[10px] h-[10px] w-full bg-[#161616]" />
        <MainProfileSection
          profileItems={
            profileData as Pick<Profile, 'id' | 'imgUrl' | 'type' | 'name'>[]
          }
        />
        <div className="mb-[38px] mt-[38px] h-[10px] w-full bg-[#161616]" />

        <ModalWithSingleButton
          showModal={showDisclosure}
          setShowModal={setShowDisclosure}
          handleOnClick={() => {
            router.push(`/profile/${id}/edit`)
          }}
          submitMessage="프로필 등록하기"
          hasCloseButton={true}
        >
          <WelcomeModalContent />
        </ModalWithSingleButton>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient()
  await Promise.all([
    queryClient.prefetchQuery(
      [...performanceKeys.all, '', '', '', '', '', 0, 6],
      () =>
        getAllPerformance({
          pageNumber: 0,
          pageSize: 6,
        }),
    ),
    queryClient.prefetchQuery([...meetKeys.all, 0, 6, '', ''], () =>
      getMeet({
        location: '',
        type: '',
        page: 0,
        size: 6,
      }),
    ),
    queryClient.prefetchQuery(mainKeys.comment, getLatestReviews),
    queryClient.prefetchQuery(mainKeys.profile, getProfile),
  ])
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
