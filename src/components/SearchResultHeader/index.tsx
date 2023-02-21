import { IconButton, Input } from '@components'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

interface SearchResultForm {
  searchResult: string
}

const SearchResultHeader = () => {
  const { register, reset, handleSubmit } = useForm<SearchResultForm>()
  const router = useRouter()
  return (
    <header
      className={`fixed top-0 z-[9998] box-border flex w-[375px] justify-between bg-gray-900 px-[16px] py-[14px]`}
    >
      <form
        onSubmit={handleSubmit((data: SearchResultForm) => {
          /**
           *TODO: API 로직 연동
           */
          console.log(data)
        })}
        className="relative flex w-full items-center"
      >
        <IconButton
          handleOnClick={() => router.back()}
          areaLabel="뒤로가기 버튼"
          size={20}
          icon="arrow-left"
        />
        <Input
          placeholder="댄서/팀 이름으로 공연 검색"
          styleClass="ml-[6px] w-[322px] h-[41px] rounded-[26px] bg-gray-700 h-10 px-3 border border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 bg-white text-gray-600 text-body1 placeholder:text-gray-500 text-gray-100"
          {...register('searchResult')}
        />
        <IconButton
          areaLabel="검색어를 지우는 용도의 버튼"
          handleOnClick={() => {
            reset()
          }}
          styleClass="absolute right-[11.83px] cursor-pointer"
          icon="x-circle"
          size={20}
        />
      </form>
    </header>
  )
}

export default SearchResultHeader
