import { Icon } from '@components'
import { useState } from 'react'
import { theme } from '@constants'
interface PaginationProps {
  currentPage: number
  totalPages: number
  handleChangePage: (page: number) => void
}

const SEEN_PAGE_NUMBER = 5 // 보여지는 페이지 갯수
const LAST_PAGE_INDEX = 4
const FIRST_PAGE_INDEX = 0

const Pagination = ({
  currentPage,
  totalPages,
  handleChangePage,
}: PaginationProps) => {
  const [pageNumber, setPageNumber] = useState(currentPage)

  const offset =
    pageNumber % 5 === 0
      ? Math.floor(pageNumber / SEEN_PAGE_NUMBER) - 1
      : Math.floor(pageNumber / SEEN_PAGE_NUMBER)

  const pageStartNumber = 5 * offset + 1
  const currentPageCount = totalPages - pageStartNumber + 1

  const pages = Array.from(
    {
      length: currentPageCount < 5 ? currentPageCount : 5,
    },
    (_, index) => index + pageStartNumber,
  )

  const hasPrevPage = pages[FIRST_PAGE_INDEX] - 1 >= 1
  const hasNextPage = pages[LAST_PAGE_INDEX] + 1 <= totalPages

  return (
    <div className="flex gap-[10px]">
      <div
        className={`flex h-[32px] w-[32px] ${
          hasPrevPage && 'cursor-pointer'
        } items-center justify-center rounded-full bg-gray-700 
           `}
        onClick={() => {
          if (hasPrevPage) {
            setPageNumber(pages[FIRST_PAGE_INDEX] - 1)
            handleChangePage(pages[FIRST_PAGE_INDEX] - 1)
          }
        }}
      >
        <Icon
          icon="arrow-left"
          size={17.5}
          color={hasPrevPage ? theme.colors.gray[300] : theme.colors.gray[600]}
        />
      </div>

      {pages.map((page) => (
        <div
          key={page}
          className={`flex h-[32px] w-[32px] items-center justify-center rounded-full bg-gray-700 font-bold ${
            pageNumber === page ? 'text-green-light' : ' text-gray-500'
          } cursor-pointer`}
          onClick={() => {
            setPageNumber(page)
            handleChangePage(page)
          }}
        >
          <span>{page}</span>
        </div>
      ))}

      <div
        className={`flex h-[32px] w-[32px] ${
          hasNextPage && 'cursor-pointer'
        } items-center justify-center rounded-full bg-gray-700 
        ${!hasNextPage && 'hidden'}
           `}
        onClick={() => {
          if (hasNextPage) {
            setPageNumber(pages[LAST_PAGE_INDEX] + 1)
            handleChangePage(pages[LAST_PAGE_INDEX] + 1)
          }
        }}
      >
        <Icon icon="arrow-right" size={17.5} color={theme.colors.gray[300]} />
      </div>
    </div>
  )
}

export default Pagination
