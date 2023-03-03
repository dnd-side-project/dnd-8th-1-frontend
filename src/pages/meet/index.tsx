import Head from 'next/head'
import {
  MeetBanner,
  FilterButton,
  Pagination,
  CollaboList,
  FloatingButton,
  Spacer,
} from '@components'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Center } from '@chakra-ui/react'
import { getMeet, meetKeys, useMeet } from '@queries'
import { MeetResponse } from '@types'
import { dehydrate, QueryClient, useQueryClient } from '@tanstack/react-query'

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
                  location: filter,
                })
              }
            />
            <FilterButton
              type="meet"
              handleSelected={(filter) =>
                setCurrentQueryString({ ...currentQueryString, type: filter })
              }
            />
          </div>
          <div className="mr-[56px]">
            <FloatingButton
              handleOnClick={() => {
                router.push('/meet/edit')
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
      </main>
    </>
  )
}

export const getServerSideProps = async () => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery([...meetKeys.all, 0, 15, '', ''], () =>
    getMeet({
      page: -1,
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
