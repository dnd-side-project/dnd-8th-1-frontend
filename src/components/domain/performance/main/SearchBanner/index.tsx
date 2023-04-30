interface SearchBannerProps {
  isBanner: boolean
}

const SearchBanner = ({ isBanner }: SearchBannerProps) => {
  return (
    <>
      {isBanner && (
        <div className="absolute top-[62px] left-[60px] z-[9999] flex h-[38px] w-[251px] items-center rounded-tr-[16px] rounded-br-[16px] rounded-bl-[16px] bg-gray-100 py-[9px] px-[14px]">
          <p className="w-[274px] text-center text-caption font-bold text-gray-700">
            댄서/댄스팀 이름을 통한 공연 검색만 가능해요
          </p>
        </div>
      )}
    </>
  )
}

export default SearchBanner
