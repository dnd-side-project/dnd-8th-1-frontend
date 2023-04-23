import Head from 'next/head'
import {
  MeetBanner,
  FilterButton,
  Pagination,
  CollaboList,
  FloatingButton,
  Spacer,
  ProfileRegisterContent,
  ModalWithSingleButton,
} from '@components'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Center } from '@chakra-ui/react'
import { getMeet, meetKeys, useMeet } from '@queries'
import { MeetResponse } from '@types'
import { dehydrate, QueryClient, useQueryClient } from '@tanstack/react-query'
import { useRecoilValue } from 'recoil'
import { userAtom } from 'states'
import { useDisclosure } from '@hooks'

const MeetPage = () => {
  const fallback = {} as MeetResponse
  const [currentQueryString, setCurrentQueryString] = useState({
    page: 0,
    size: 15,
    location: '',
    type: '',
  })
  const currentPage = currentQueryString.page + 1
  const { data = fallback, isLoading } = useMeet(currentQueryString)
  const { data: meetData } = data
  const router = useRouter()
  const queryClient = useQueryClient()
  const { page, size, location, type } = currentQueryString

  useEffect(() => {
    if (currentQueryString.page < data?.data?.totalPages) {
      queryClient.prefetchQuery(
        [...meetKeys.all, page + 1, size, location, type],
        () => getMeet(currentQueryString),
      )
    }
  }, [currentQueryString.page])

  const { hasProfile, id } = useRecoilValue(userAtom)
  const [showProfileRegisterModal, setShowProfileRegisterModal] =
    useDisclosure()
  /**
   *TODO: 임시 loading 로직
   */
  if (isLoading) {
    return <div></div>
  }
  return (
    <>
      <Head>
        <title>콜라보 · 쉐어 - Danverse</title>
      </Head>

      <MeetBanner />
      <main>
        <div className="flex items-center justify-between px-[16px]">
          <div className="flex gap-[8px]">
            <FilterButton
              type="region"
              handleSelected={(filter) =>
                setCurrentQueryString({
                  ...currentQueryString,
                  page: 0,
                  location: filter,
                })
              }
            />
            <FilterButton
              type="meet"
              handleSelected={(filter) =>
                setCurrentQueryString({
                  ...currentQueryString,
                  page: 0,
                  type: filter,
                })
              }
            />
          </div>
          <div className="mr-[56px]">
            <FloatingButton
              handleOnClick={() => {
                if (!hasProfile) {
                  setShowProfileRegisterModal(true)
                } else {
                  router.push('/meet/edit')
                }
              }}
            />
          </div>
        </div>

        <section>
          <CollaboList collaboItems={meetData?.content} />
        </section>

        {meetData.content.length !== 0 ? (
          <Center className="mb-[30px]">
            <Pagination
              currentPage={currentPage}
              totalPages={meetData?.totalPages}
              handleChangePage={(page) => {
                setCurrentQueryString({ ...currentQueryString, page: page - 1 })
              }}
            />
          </Center>
        ) : (
          <Spacer size={30} />
        )}

        {/** 프로필 등록 모달 */}
        {showProfileRegisterModal && (
          <ModalWithSingleButton
            handleOnClick={() => router.push(`/profile/${id}/edit`)}
            submitMessage="프로필 등록하기"
            showModal={showProfileRegisterModal}
            setShowModal={setShowProfileRegisterModal}
            hasCloseButton={true}
          >
            <ProfileRegisterContent />
          </ModalWithSingleButton>
        )}
      </main>
    </>
  )
}

export const getServerSideProps = async () => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery([...meetKeys.all, 0, 15, '', ''], () =>
    getMeet({
      page: 0,
      size: 15,
      location: '',
      type: '',
    }),
  )
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default MeetPage
