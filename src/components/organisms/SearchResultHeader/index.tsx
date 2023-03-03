import { Icon, IconButton, Input } from '@components'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

interface SearchResultForm {
  searchResult: string
}

const SearchResultHeader = () => {
  const { register, reset, handleSubmit } = useForm<SearchResultForm>()
  const router = useRouter()
  const onSubmit = (data: SearchResultForm) => {
    router.push(`/performance/search?team=${data.searchResult}`)
    reset()
  }

  return (
    <header
      className={`fixed top-0 z-[9998] mx-[auto] box-border flex w-[375px] justify-between bg-gray-900 px-[16px] py-[14px]`}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative flex w-full items-center"
      >
        <button
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              return
            } else {
              router.back()
            }
          }}
        >
          <Icon size={20} icon="arrow-left" />
        </button>

        <Input
          placeholder="댄서/팀 이름으로 공연 검색"
          styleClass="ml-[6px] w-[322px] h-[39px] rounded-[26px] bg-gray-700 h-10 px-3 border border-gray-700 focus:outline-none text-body1 placeholder:text-gray-500 text-gray-100"
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
