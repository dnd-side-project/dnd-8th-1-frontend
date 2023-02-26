import { AdditionalInfoPopup, IconButton, Input } from '@components'
import { VALIDATION_OPEN_CHAT } from '@constants'
import Link from 'next/link'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

interface OpenchatPopupProps {
  previousData?: string
  setIsOpenChatOpen: Dispatch<SetStateAction<boolean>>
  handleOnSubmit: (data: string) => void
}

interface OpenChatForm {
  openChatLink: string
}

const OpenchatPopup = ({
  previousData,
  setIsOpenChatOpen,
  handleOnSubmit,
}: OpenchatPopupProps) => {
  const [isValid, setIsValid] = useState(false)
  const { register, handleSubmit, reset, watch } = useForm<OpenChatForm>({
    defaultValues: {
      openChatLink: previousData ? previousData : '',
    },
  })

  const isEmpty = watch('openChatLink').length === 0

  useEffect(() => {
    if (
      watch('openChatLink').match(VALIDATION_OPEN_CHAT) &&
      watch('openChatLink').length === 33
    ) {
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  }, [watch('openChatLink')])
  console.log(watch('openChatLink'))
  return (
    <>
      <AdditionalInfoPopup
        isOpenChat
        setPopupOpen={setIsOpenChatOpen}
        headerTitle="오픈 채팅"
        title="카카오톡 오픈 채팅"
        subTitle="소통 수단으로 사용되는 카카오톡 오픈채팅 링크를 입력해 주세요."
      >
        <form
          onSubmit={handleSubmit((data: OpenChatForm) => {
            setIsOpenChatOpen(false)
            handleOnSubmit(data?.openChatLink)
          })}
          className="mt-[41px] flex flex-col"
        >
          <label className="mb-[7px] text-caption text-gray-300">
            오픈 채팅 링크
          </label>
          <div className="relative">
            <Input
              styleClass={`w-[330px] bg-gray-900 ${
                isEmpty
                  ? 'border-gray-300'
                  : isValid || previousData
                  ? 'border-green-light'
                  : 'border-[#EB5526]'
              } text-sm sm:py-2 pb-[9px] border-b focus:outline-none text-gray-100 placeholder:text-gray-600`}
              {...register('openChatLink')}
            />
            {!isEmpty && (
              <IconButton
                styleClass="absolute right-[14px] bottom-[14px]"
                icon="x-circle"
                size={16}
                areaLabel="입력 값을 초기화 시키는 버튼"
                handleOnClick={() => {
                  reset({ openChatLink: '' })
                }}
              />
            )}
          </div>
          {isEmpty && (
            <Link
              className="mt-[18px] flex h-[32px] w-[157px] items-center justify-center rounded-[4px] bg-gray-700 text-caption text-gray-300"
              href={
                'https://cs.kakao.com/helps?category=105&locale=ko&service=8'
              }
            >
              혹시 오픈채팅을 모르시나요?
            </Link>
          )}
          {!isValid && !isEmpty && !previousData && (
            <span className="mt-[6px] text-caption text-[#EB5526]">
              잘못된 링크 형식입니다.
            </span>
          )}
          <div className="fixed bottom-[16px]">
            <button
              disabled={!isValid}
              className="h-[50px] w-[343px] rounded-[8px] bg-green-light text-subtitle font-bold text-gray-900 disabled:bg-gray-600 disabled:text-gray-400"
            >
              등록하기
            </button>
          </div>
        </form>
      </AdditionalInfoPopup>
    </>
  )
}

export default OpenchatPopup
