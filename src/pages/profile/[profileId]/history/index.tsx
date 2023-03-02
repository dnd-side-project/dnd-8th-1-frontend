import {
  Spacer,
  ActivityCategorySelector,
  MyEventList,
  MyAppliedEventList,
  MyPerformanceList,
  MyReviewList,
} from '@components'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { HISTORY_MAIN_CATEGORIES, HISTORY_SUB_CATEGORIES } from '@types'
import { MY_MAIN_CATEGORIES } from '@constants'

// TODO: API 통신 구현 후 더미데이터 삭제
import {
  MY_EVENT_DUMMY,
  MY_APPLIED_DUMMY,
  MY_PERFORMANCE_DUMMY,
  MY_REVIEW_DUMMY,
} from 'dummy'

const ProfileHistoryPage = () => {
  const router = useRouter()
  const { profileId, type } = router.query

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
      <main>
        <Spacer size={31} />
        <h1 className="ml-[12px] text-title1 font-bold text-gray-100">
          활동 내역
        </h1>
        <Spacer size={24} />
        <ActivityCategorySelector
          handleOnChangeMainCategory={(category: HISTORY_MAIN_CATEGORIES) => {
            setCategory(category)
            router.push(`/profile/${currentProfileId}/history?type=${category}`)
          }}
          handleOnChangeSubCategory={(category) => setSubCategory(category)}
          initialMainCategory={category}
        />

        {category === '만나기' && subCategory === '등록' && (
          <MyEventList myEvents={MY_EVENT_DUMMY} />
        )}

        {category === '만나기' && subCategory === '신청' && (
          <MyAppliedEventList myAppliedEvents={MY_APPLIED_DUMMY} />
        )}
        {category === '공연' && subCategory === '등록한 공연' && (
          <MyPerformanceList myPerformances={MY_PERFORMANCE_DUMMY} />
        )}
        {category === '공연' && subCategory === '후기' && (
          <MyReviewList myReviews={MY_REVIEW_DUMMY} />
        )}
      </main>
    </>
  )
}

export default ProfileHistoryPage
