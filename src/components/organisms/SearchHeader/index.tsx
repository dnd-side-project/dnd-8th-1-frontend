import { Dimmed, Icon, Input } from '@components'
import { useRouter } from 'next/router'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

interface SearchForm {
  search: string
}

interface SearchHeaderProps {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

const SearchHeader = ({ open, setOpen }: SearchHeaderProps) => {
  const router = useRouter()
  const { register, reset, handleSubmit } = useForm<SearchForm>()
  const handleGoSearchPage = (data: SearchForm) => {
    router.push(`/performance/search?team=${data.search}`)
  }
  const [isBanner, setIsBanner] = useState(true)
  useEffect(() => {
    const closeBanner = setTimeout(() => {
      setIsBanner(false)
    }, 2000)
    return () => {
      clearTimeout(closeBanner)
    }
  }, [])
  return (
    <>
      <header
        className={`fixed top-0 z-[9998] box-border flex w-[375px] justify-between bg-gray-900 px-[16px] py-[14px]`}
      >
        <form
          onSubmit={handleSubmit(handleGoSearchPage)}
          className="relative flex w-full items-center"
        >
          <div
            className="cursor-pointer"
            onClick={() => {
              setOpen(!open)
            }}
          >
            <Icon size={20} icon="arrow-left" />
          </div>
          <Input
            placeholder="댄서/팀 이름으로 공연 검색"
            styleClass="ml-[6px] w-[322px] h-[41px] rounded-[26px] bg-gray-700 h-10 px-3 border border-gray-700 focus:outline-none bg-white text-body1 placeholder:text-gray-500 text-gray-100"
            {...register('search')}
          />
          <div
            className="absolute right-[11.83px] cursor-pointer"
            onClick={() => {
              reset()
            }}
          >
            <Icon size={20} icon="x-circle" />
          </div>
        </form>
        {isBanner && (
          <div className="absolute bottom-[-30px] left-[42px] flex h-[38px] w-[251px] items-center rounded-tr-[16px] rounded-br-[16px] rounded-bl-[16px] bg-gray-100 py-[9px] px-[14px]">
            <p className="w-[274px] text-center text-caption font-bold text-gray-700">
              댄서/댄스팀 이름을 통한 공연 검색만 가능해요
            </p>
          </div>
        )}
      </header>
      {open && (
        <Dimmed
          handleOnClick={() => {
            setOpen(!open)
          }}
          styleClass="h-screen bg-[#000000] opacity-70"
        />
      )}
    </>
  )
}

export default SearchHeader
