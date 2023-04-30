import { Icon, IconButton, Input, SearchHeaderHeadless } from '@components'

const SearchResultHeader = () => {
  return (
    <SearchHeaderHeadless
      headerStyle="fixed top-0 z-[9998] mx-[auto] box-border flex w-[375px] justify-between bg-gray-900 px-[16px] py-[14px]"
      formStyle="relative flex w-full items-center"
    >
      {({ router, register, reset }) => (
        <>
          <button
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                return
              } else {
                router && router.back()
              }
            }}
          >
            <Icon size={20} icon="arrow-left" />
          </button>

          <Input
            placeholder="댄서/팀 이름으로 공연 검색"
            styleClass="ml-[6px] w-[322px] h-[39px] rounded-[26px] bg-gray-700 h-10 px-3 border border-gray-700 focus:outline-none text-body1 placeholder:text-gray-500 text-gray-100"
            {...register('search')}
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
        </>
      )}
    </SearchHeaderHeadless>
  )
}

export default SearchResultHeader
