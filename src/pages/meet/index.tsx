import Head from 'next/head'
import { MeetBanner, FilterButton, Pagination, CollaboList } from '@components'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { Center } from '@chakra-ui/react'
import { useMeet } from '@queries'
import { MeetResponse } from '@types'

// TODO: api 붙이기
const MeetPage = () => {
  const fallback = {} as MeetResponse
  const [currentQueryString, setCurrentQueryString] = useState({
    page: 0,
    size: 15,
    location: '',
    type: '',
  })
  const currentPage = currentQueryString.page + 1
  const { data = fallback } = useMeet(currentQueryString)
  const { data: meetData } = data
  const router = useRouter()

  return (
    <>
      <Head>
        <title>콜라보 · 쉐어 - Danverse</title>
      </Head>

      <MeetBanner />
      <main>
        <div className="mt-[43px] flex items-center justify-between px-[16px]">
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
          <button onClick={() => router.push('meet/edit')}>작성하기</button>
        </div>

        <section>
          <CollaboList collaboItems={meetData?.content} />
        </section>

        <Center className="mb-[30px]">
          <Pagination
            currentPage={currentPage}
            totalPages={meetData?.totalPages}
            handleChangePage={(page) => {
              setCurrentQueryString({ ...currentQueryString, page: page - 1 })
            }}
          />
        </Center>
      </main>
    </>
  )
}

export default MeetPage
