import { AdditionalInfoPopup, IconButton, Input } from '@components'
import { Dispatch, SetStateAction } from 'react'
import { useForm, useWatch } from 'react-hook-form'

interface PortfolioPopupProps {
  previousData?: PortfolioForm
  setIsOpenChatOpen: Dispatch<SetStateAction<boolean>>
  handleOnSubmit: (data: PortfolioForm) => void
}

interface PortfolioForm {
  youtubeLink: string
  instaLink: string
  tiktokLink: string
}

const PortfolioPopup = ({
  previousData,
  setIsOpenChatOpen,
  handleOnSubmit,
}: PortfolioPopupProps) => {
  const { register, handleSubmit, reset, control } = useForm<PortfolioForm>({
    defaultValues: {
      youtubeLink: previousData?.youtubeLink ? previousData?.youtubeLink : '',
      instaLink: previousData?.instaLink ? previousData?.instaLink : '',
      tiktokLink: previousData?.tiktokLink ? previousData?.tiktokLink : '',
    },
  })

  const { youtubeLink, instaLink, tiktokLink } = useWatch({ control })

  const isEmpty = (link: string) => {
    return link.length === 0
  }

  return (
    <>
      <AdditionalInfoPopup
        setPopupOpen={setIsOpenChatOpen}
        headerTitle="작업물"
        title="댄스 작업물 소개하기"
        subTitle="멋진 춤을 사람들에게 소개해 주세요. 유튜브, 인스타, 틱톡을 연결할 수 있어요."
      >
        <form
          onSubmit={handleSubmit((data: PortfolioForm) => {
            setIsOpenChatOpen(false)
            handleOnSubmit(data)
          })}
          className="mt-[41px] flex flex-col"
        >
          {/** 유튜브 */}
          <label className="mb-[7px] text-body1 font-bold text-green-light">
            유튜브
          </label>
          <div className="relative">
            <Input
              placeholder="유튜브 URL 주소"
              styleClass={`w-[330px] bg-gray-900 focus:border-green-light 'border-gray-300' text-sm sm:py-2 pb-[9px] border-b focus:outline-none text-gray-100 placeholder:text-gray-600`}
              {...register('youtubeLink')}
            />
            {!isEmpty(youtubeLink as string) && (
              <IconButton
                styleClass="absolute right-[14px] bottom-[14px]"
                icon="x-circle"
                size={16}
                areaLabel="입력 값을 초기화 시키는 버튼"
                handleOnClick={() => {
                  reset((formValues) => ({ ...formValues, youtubeLink: '' }))
                }}
              />
            )}
          </div>
          {/** 인스타 */}
          <label className="mt-[37px] mb-[7px] text-body1 font-bold text-green-light">
            인스타그램
          </label>
          <div className="relative">
            <Input
              placeholder="인스타그램 URL 주소"
              styleClass={`w-[330px] bg-gray-900 focus:border-green-light 'border-gray-300' text-sm sm:py-2 pb-[9px] border-b focus:outline-none text-gray-100 placeholder:text-gray-600`}
              {...register('instaLink')}
            />
            {!isEmpty(instaLink as string) && (
              <IconButton
                styleClass="absolute right-[14px] bottom-[14px]"
                icon="x-circle"
                size={16}
                areaLabel="입력 값을 초기화 시키는 버튼"
                handleOnClick={() => {
                  reset((formValues) => ({ ...formValues, instaLink: '' }))
                }}
              />
            )}
          </div>
          {/** 틱톡 */}
          <label className="mt-[37px] mb-[7px] text-body1 font-bold text-green-light">
            틱톡
          </label>
          <div className="relative">
            <Input
              placeholder="틱톡 URL 주소"
              styleClass={`w-[330px] bg-gray-900 focus:border-green-light 'border-gray-300' text-sm sm:py-2 pb-[9px] border-b focus:outline-none text-gray-100 placeholder:text-gray-600`}
              {...register('tiktokLink')}
            />
            {!isEmpty(tiktokLink as string) && (
              <IconButton
                styleClass="absolute right-[14px] bottom-[14px]"
                icon="x-circle"
                size={16}
                areaLabel="입력 값을 초기화 시키는 버튼"
                handleOnClick={() => {
                  reset((formValues) => ({ ...formValues, tiktokLink: '' }))
                }}
              />
            )}
          </div>
          {/** 버튼 */}
          <div className="fixed bottom-[16px]">
            <button className="h-[50px] w-[343px] rounded-[8px] bg-green-light text-subtitle font-bold text-gray-900 disabled:bg-gray-600 disabled:text-gray-400">
              등록하기
            </button>
          </div>
        </form>
      </AdditionalInfoPopup>
    </>
  )
}

export default PortfolioPopup
