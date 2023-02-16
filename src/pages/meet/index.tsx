import Head from 'next/head'
import { MeetResponse } from '@types'
import { MeetBanner, FilterButton, Pagination, CollaboList } from '@components'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { MEET_DUMMUMY } from '../../dummy'
import { Center } from '@chakra-ui/react'

// TODO: api 붙이기
const MeetPage = ({ data }: MeetResponse) => {
  const router = useRouter()
  const { page } = router.query

  const { content, pageNumber, totalPages } =
    MEET_DUMMUMY[page ? parseInt(page as string) - 1 : 0]
  const [currentPage, setCurrentPage] = useState(pageNumber)

  const [currentRegion, setCurrentRegion] = useState('')
  const [currentType, setCurrentType] = useState('')

  const [collaboItems, setCollaboItems] = useState(content)

  // TODO: 임시 페이지네이션 로직
  useEffect(() => {
    router.push(`?page=${currentPage + 1}`)
    setCollaboItems(MEET_DUMMUMY[currentPage].content)
  }, [currentPage])

  // TODO: 임시 필터 로직
  useEffect(() => {
    console.log(currentRegion)
    if (currentRegion === '') {
      if (currentType === '') {
        setCollaboItems([...content])
      } else {
        const filtered = content.filter((item) => item.type === currentType)
        setCollaboItems([...filtered])
      }
    } else {
      if (currentType === '') {
        const filtered = content.filter(
          (item) => item.location == currentRegion,
        )
        console.log(filtered)
        setCollaboItems([...filtered])
      } else {
        const filtered = content.filter(
          (item) => item.location == currentRegion && item.type === currentType,
        )
        setCollaboItems([...filtered])
      }
    }
  }, [currentRegion])

  useEffect(() => {
    if (currentType === '') {
      if (currentRegion === '') {
        setCollaboItems([...content])
      } else {
        const filtered = content.filter(
          (item) => item.location === currentRegion,
        )
        setCollaboItems([...filtered])
      }
    } else {
      if (currentRegion === '') {
        const filtered = content.filter((item) => item.type == currentType)
        setCollaboItems([...filtered])
      } else {
        const filtered = content.filter(
          (item) => item.location == currentRegion && item.type === currentType,
        )
        setCollaboItems([...filtered])
      }
    }
  }, [currentType])

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
              handleSelected={(filter) => setCurrentRegion(filter)}
            />
            <FilterButton
              type="meet"
              handleSelected={(filter) => setCurrentType(filter)}
            />
          </div>
          <button onClick={() => router.push('meet/edit')}>작성하기</button>
        </div>

        <section>
          <CollaboList collaboItems={collaboItems} />
        </section>

        <Center className="mb-[30px]">
          <Pagination
            currentPage={pageNumber + 1}
            totalPages={totalPages}
            handleChangePage={(page) => {
              setCurrentPage(page - 1)
            }}
          />
        </Center>
      </main>
    </>
  )
}

export default MeetPage
