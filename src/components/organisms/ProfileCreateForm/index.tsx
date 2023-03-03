import { ProfileEditRequest, RecruitmentType } from '@types'
import {
  Input,
  Textarea,
  RegionSelect,
  GenreSelect,
  ProfileCategorySelect,
  ProfileImgUpload,
  ProfileDatePicker,
  OpenchatPopup,
  PortfolioPopup,
} from '@components'
import { useForm, useWatch } from 'react-hook-form'
import { useRef, useState } from 'react'
import { useClickAway, useDisclosure } from '@hooks'
import { useRouter } from 'next/router'
import { useUploadImage } from '@queries'
import dayjs from 'dayjs'
import { useRecoilValue } from 'recoil'
import { userAtom } from 'states'

interface ProfileCreateFormProps {
  previousValue?: ProfileEditRequest // 값이 이미 존재하는 경우 (게시글 수정의 경우)
  handleOnSubmit: (formValues: ProfileEditRequest) => void
}

const ProfileCreateForm = ({
  previousValue,
  handleOnSubmit,
}: ProfileCreateFormProps) => {
  const [image, setImage] = useState<File>()
  const { imgUrl, name } = useRecoilValue(userAtom)
  const { register, control, handleSubmit, setValue } =
    useForm<ProfileEditRequest>({
      mode: 'onSubmit',
      defaultValues: {
        careerStartDate:
          previousValue?.careerStartDate !== null
            ? previousValue?.careerStartDate
            : null,
        description:
          previousValue?.description !== null
            ? previousValue?.description
            : null,
        genres: previousValue?.genres !== null ? previousValue?.genres : null,
        imgUrl: previousValue?.imgUrl !== null ? previousValue?.imgUrl : imgUrl,
        location:
          previousValue?.location !== null ? previousValue?.location : null,
        name: previousValue?.name !== null ? previousValue?.name : name,
        openChatUrl:
          previousValue?.openChatUrl !== null
            ? previousValue?.openChatUrl
            : null,
        portfolio: {
          instagram:
            previousValue?.portfolio.instagram !== null
              ? previousValue?.portfolio?.instagram
              : null,
          tiktok:
            previousValue?.portfolio.tiktok !== null
              ? previousValue?.portfolio?.tiktok
              : null,
          youtube:
            previousValue?.portfolio.youtube !== null
              ? previousValue?.portfolio?.youtube
              : null,
        },
        type:
          (previousValue as ProfileEditRequest).type === null
            ? '댄서'
            : previousValue?.type,
      },
      shouldUnregister: false,
    })
  const { mutate: requestUploadImage } = useUploadImage(setValue)
  const fieldValues = useWatch<ProfileEditRequest>({ control })
  const isComplete = (fieldValues: ProfileEditRequest) => {
    const { imgUrl, name, openChatUrl, type } = fieldValues
    return (
      type !== null &&
      (image || previousValue?.imgUrl || imgUrl !== null) &&
      name !== '' &&
      openChatUrl !== null
    )
  }
  const essentialStyle = 'ml-[5px] text-body2 text-green-light'
  const labelStyle = 'text-subtitle font-bold text-gray-100'
  const formSectionStyle = 'flex flex-col gap-[6px]'
  const inputStyle =
    'placeholder:text-body2 w-[343px] h-[52px] px-[11px] py-[14px] text-body2 rounded-[8px] bg-gray-700 border-[1px] border-gray-600 focus:outline-none focus:border-green-light'

  const [isFocus, setIsFocus] = useState(false)
  const textAreaRef = useRef<HTMLDivElement>(null)
  useClickAway(textAreaRef, () => {
    setIsFocus(false)
  })

  const [isOpenChatOpen, setIsOpenChatOpen, handleToggleOpenChat] =
    useDisclosure()
  const [isPortfolioOpen, setIsPortfolioOpen, handleTogglePortfolio] =
    useDisclosure()

  const router = useRouter()

  const isEmptyPortfolio =
    fieldValues?.portfolio?.instagram ||
    fieldValues?.portfolio?.youtube ||
    fieldValues?.portfolio?.tiktok

  const isEmptyUrl = (link: string | null) => {
    return link
  }

  return (
    <>
      {/** 소개 텍스트 */}
      {(!isOpenChatOpen || !isPortfolioOpen) && (
        <div className="mt-[31px] px-[16px]">
          <h1 className="text-title1 font-bold text-gray-100">
            프로필{' '}
            {previousValue?.type !== null ? (
              <span>수정하기</span>
            ) : (
              <span>등록하기</span>
            )}
          </h1>
          <h3 className="mt-[14px] text-body1 text-gray-400">
            댄서 또는 댄스팀에 대한 정보를{' '}
            {previousValue?.type !== null ? (
              <span>수정합니다.</span>
            ) : (
              <span>등록합니다.</span>
            )}{' '}
          </h3>
        </div>
      )}
      {(!isOpenChatOpen || !isPortfolioOpen) && (
        <form
          className="flex flex-col gap-[34px]"
          onSubmit={handleSubmit((formValues) => {
            handleOnSubmit({
              ...formValues,
            })
          })}
        >
          <div className="mt-[40px] flex flex-col gap-[34px] px-[16px]">
            {/* 프로필 유형 */}
            <div className="flex justify-between">
              <div className="flex items-center">
                <label className={labelStyle}>프로필 유형</label>
                <span className={essentialStyle}>필수</span>
              </div>
              <ProfileCategorySelect
                defaultType={
                  fieldValues?.type === null
                    ? '댄서'
                    : (fieldValues?.type as RecruitmentType)
                }
                handleOnChange={(category) => {
                  setValue('type', category)
                }}
              />
            </div>

            {/* 이미지 */}
            <div className={formSectionStyle}>
              <div className="mb-[4px] flex items-center">
                <label className={labelStyle}>이미지</label>
                <span className={essentialStyle}>필수</span>
              </div>
              <ProfileImgUpload
                initialImage={fieldValues.imgUrl as string}
                handleSetImage={(image) => {
                  setImage(image)
                  const formData = new FormData()
                  formData.append('img', image)
                  /**
                   *TODO: 추후 업로드 로직 변경 필요
                   */
                  requestUploadImage(formData)
                }}
              />
            </div>

            {/* 활동 이름 */}
            <div className={formSectionStyle}>
              <div className="mb-[4px] flex items-center">
                <label className={labelStyle}>활동 이름</label>
                <span className={essentialStyle}>필수</span>
              </div>
              <Input
                styleClass={inputStyle}
                placeholder="입력해 주세요"
                {...register('name')}
              />
            </div>

            {/* 장르 */}
            <div className={formSectionStyle}>
              <label className={labelStyle}>장르</label>
              <GenreSelect
                handleGenreSelect={(genres) => {
                  setValue('genres', genres)
                }}
                selectedGenres={
                  previousValue
                    ? previousValue?.genres
                    : fieldValues
                    ? fieldValues.genres
                    : null
                }
              />
            </div>

            {/* 지역 */}
            <div className={formSectionStyle}>
              <label className={labelStyle}>지역</label>
              <RegionSelect
                selectedRegion={previousValue?.location as string}
                handleRegionSelect={(location) => {
                  setValue('location', location)
                }}
              />
            </div>

            {/* 경력 */}
            <div className={formSectionStyle}>
              <label className={labelStyle}>경력</label>
              <ProfileDatePicker
                initialStartDate={fieldValues.careerStartDate as string}
                handleStartDate={(date) => {
                  setValue('careerStartDate', dayjs(date).format('YYYY-MM-DD'))
                }}
              />
            </div>

            {/* 소개 */}
            <div className={formSectionStyle}>
              <label className={labelStyle}>소개</label>
              <div
                ref={textAreaRef}
                className={`relative h-[166px] w-[343px] rounded-[8px] border bg-gray-700 px-[12px] pt-[12px] pb-[32px] ${
                  isFocus ? 'border-green-light' : 'border-gray-600'
                }`}
              >
                <Textarea
                  onFocus={() => setIsFocus(true)}
                  maxLength={300}
                  styleClass="placeholder:text-body2 overflow-hidden w-full h-full resize-none bg-gray-700 placeholder:text-gray-500 text-body2 focus:outline-none"
                  placeholder="댄스 활동 내역, 댄서/팀의 매력 요소를 소개하면 좋아요."
                  {...register('description')}
                />
                <div className="absolute bottom-[6px] left-[12px] text-[12px] font-[400] leading-[24px]">
                  <span className="text-gray-400">
                    {fieldValues?.description === null
                      ? 0
                      : fieldValues?.description?.length}
                  </span>{' '}
                  <span className="text-[#515151]">/ 300</span>
                </div>
              </div>
            </div>
          </div>
          {/** divider */}
          <div className="h-[1px] w-[100%] bg-gray-700" />

          <div className="mb-[89px] px-[16px]">
            {/** 오픈 채팅 */}
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center">
                    <label className={labelStyle}>오픈채팅</label>
                    <span className={essentialStyle}>필수</span>
                  </div>
                  <p className="mt-[5px] text-body2 text-gray-500">
                    {!isEmptyUrl(fieldValues.openChatUrl as string)
                      ? '미등록'
                      : '등록'}
                  </p>
                </div>
                {isEmptyUrl(fieldValues.openChatUrl as string) ? (
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      handleToggleOpenChat()
                    }}
                    className="h-[30px] w-[56px] rounded-[4px] border-[0.5px] border-green-light text-body2 font-bold text-green-light"
                  >
                    변경
                  </button>
                ) : (
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      handleToggleOpenChat()
                    }}
                    className="h-[30px] w-[56px] rounded-[4px] border-[0.5px] border-green-light bg-green-light text-body2 font-bold text-gray-900"
                  >
                    등록
                  </button>
                )}
              </div>

              {/** 작업물 */}
              <div className="mt-[41px] flex items-center justify-between">
                <div>
                  <div>
                    <label className={labelStyle}>작업물</label>
                  </div>
                  {!isEmptyPortfolio ? (
                    <span className="mt-[6px] block text-body2 text-gray-500">
                      미등록
                    </span>
                  ) : (
                    <span className="mt-[6px] block text-body2 text-gray-500">
                      등록
                    </span>
                  )}
                </div>
                {isEmptyPortfolio ? (
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      handleTogglePortfolio()
                    }}
                    className="h-[30px] w-[56px] rounded-[4px] border-[0.5px] border-green-light text-body2 font-bold text-green-light"
                  >
                    변경
                  </button>
                ) : (
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      handleTogglePortfolio()
                    }}
                    className="h-[30px] w-[56px] rounded-[4px] border-[0.5px] border-green-light bg-green-light text-body2 font-bold text-gray-900"
                  >
                    등록
                  </button>
                )}
              </div>
            </div>

            {/* 등록 / 취소 버튼 */}
            <div className="mt-[62px] flex">
              <button
                onClick={() => router.back()}
                className="h-[50px] w-[97px] rounded-[10px] bg-[#F4F4F4] text-subtitle font-bold text-gray-900"
              >
                취소
              </button>
              {!isComplete(fieldValues as ProfileEditRequest) ? (
                <button
                  disabled
                  className="ml-[12px] flex h-[50px] w-[234px] items-center justify-center rounded-[10px] disabled:bg-gray-600 disabled:text-subtitle disabled:font-bold disabled:text-gray-400"
                >
                  저장하기
                </button>
              ) : (
                <button className="ml-[12px] flex h-[50px] w-[234px] items-center justify-center rounded-[10px] bg-green-light text-subtitle font-bold text-gray-900">
                  저장하기
                </button>
              )}
            </div>
          </div>
        </form>
      )}
      {/** 오픈 채팅 팝업 */}
      {isOpenChatOpen && (
        <OpenchatPopup
          handleOnSubmit={(openchatUrl) => {
            setValue('openChatUrl', openchatUrl)
          }}
          setIsOpenChatOpen={setIsOpenChatOpen}
          previousData={
            previousValue?.openChatUrl
              ? (previousValue?.openChatUrl as string)
              : (fieldValues?.openChatUrl as string | null)
          }
        />
      )}
      {/** 포트 폴리오 팝업 */}
      {isPortfolioOpen && (
        <PortfolioPopup
          handleOnSubmit={(portfolioLink) => {
            setValue('portfolio.instagram', portfolioLink?.instaLink)
            setValue('portfolio.youtube', portfolioLink?.youtubeLink)
            setValue('portfolio.tiktok', portfolioLink?.tiktokLink)
          }}
          setIsPortfolioOpen={setIsPortfolioOpen}
          previousData={{
            youtubeLink: fieldValues?.portfolio?.youtube as string,
            instaLink: fieldValues?.portfolio?.instagram as string,
            tiktokLink: fieldValues?.portfolio?.tiktok as string,
          }}
        />
      )}
    </>
  )
}

export default ProfileCreateForm
