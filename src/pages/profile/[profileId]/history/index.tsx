import {
  Spacer,
  MyEventList,
  MyAppliedEventList,
  MyPerformanceList,
  MyReviewList,
  ActivityCategorySelector,
} from '@components'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import {
  AppliedEvent,
  HISTORY_MAIN_CATEGORIES,
  HISTORY_SUB_CATEGORIES,
  MyEvent,
  MyPerformance,
  MyReview,
} from '@types'
import { MY_MAIN_CATEGORIES } from '@constants'

import {
  useMyAppliedEvent,
  useMyEvents,
  useMyPerformance,
  useMyReviews,
} from '@queries'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { useCheckAuth } from '@hooks'

const ProfileHistoryPage = ({ memberId }: { memberId: number }) => {
  const router = useRouter()
  const { profileId, type } = router.query

  const [isChecking] = useCheckAuth()

  const { data: appliedEventsData } = useMyAppliedEvent(memberId)
  const { data: eventsData } = useMyEvents(memberId)
  const { data: performancesData } = useMyPerformance(memberId)
  const { data: reviewData } = useMyReviews(memberId)

  const currentProfileId = parseInt(profileId as string)

  const [category, setCategory] = useState<HISTORY_MAIN_CATEGORIES>(
    type ? (type as HISTORY_MAIN_CATEGORIES) : '만나기',
  )
  const [subCategory, setSubCategory] = useState<HISTORY_SUB_CATEGORIES>('등록')

  useEffect(() => {
    // 쿼리 파라미터에 따른 validation
    if (type) {
      if (!MY_MAIN_CATEGORIES.includes(type as string)) {
        router.push(`/profile/${currentProfileId}/history`)
      } else {
        setCategory(type as HISTORY_MAIN_CATEGORIES)
      }
    }
  }, [type])

  return (
    <>
      <Head>
        <title>활동내역 - Danverse</title>
      </Head>

      {isChecking ? (
        <></>
      ) : (
        <main>
          <Spacer size={31} />
          <h1 className="ml-[12px] text-title1 font-bold text-gray-100">
            활동 내역
          </h1>
          <Spacer size={24} />
          <ActivityCategorySelector
            handleOnChangeMainCategory={(category: HISTORY_MAIN_CATEGORIES) => {
              setCategory(category)
              router.push(
                `/profile/${currentProfileId}/history?type=${category}`,
              )
            }}
            handleOnChangeSubCategory={(category) => setSubCategory(category)}
            initialMainCategory={category}
          />

          {category === '만나기' && subCategory === '등록' && (
            <MyEventList myEvents={eventsData?.data as MyEvent[]} />
          )}

          {category === '만나기' && subCategory === '신청' && (
            <MyAppliedEventList
              myAppliedEvents={appliedEventsData?.data as AppliedEvent[]}
            />
          )}

          {category === '공연' && subCategory === '등록한 공연' && (
            <MyPerformanceList
              myPerformances={performancesData?.data as MyPerformance[]}
            />
          )}
          {category === '공연' && subCategory === '후기' && (
            <MyReviewList myReviews={reviewData?.data as MyReview[]} />
          )}
        </main>
      )}
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

export default ProfileHistoryPage
