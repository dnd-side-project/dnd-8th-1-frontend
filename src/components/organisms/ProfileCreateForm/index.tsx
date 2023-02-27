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

interface ProfileCreateFormProps {
  previousValue?: ProfileEditRequest // 값이 이미 존재하는 경우 (게시글 수정의 경우)
  handleOnSubmit: (formValues: ProfileEditRequest) => void
}

const ProfileCreateForm = ({
  previousValue,
  handleOnSubmit,
}: ProfileCreateFormProps) => {
  const [image, setImage] = useState<File>()
  const { register, control, handleSubmit, setValue } =
    useForm<ProfileEditRequest>({
      mode: 'onSubmit',
      defaultValues: {
        careerStartDate: previousValue ? previousValue.careerStartDate : '',
        description: previousValue ? previousValue.description : '',
        genres: previousValue ? previousValue.genres : [],
        imgUrl: previousValue ? previousValue.imgUrl : '',
        location: previousValue ? previousValue.location : '',
        name: previousValue ? previousValue.name : '',
        openChatUrl: previousValue ? previousValue.openChatUrl : '',
        portfolioUrl: {
          instagram: previousValue ? previousValue.portfolioUrl.instagram : '',
          tiktok: previousValue ? previousValue.portfolioUrl.tiktok : '',
          youtube: previousValue ? previousValue.portfolioUrl.youtube : '',
        },
        type: previousValue ? previousValue.type : '댄서',
      },
      shouldUnregister: false,
    })

  const fieldValues = useWatch<ProfileEditRequest>({ control })

  const isComplete = (fieldValues: ProfileEditRequest) => {
    const { imgUrl, name, openChatUrl, type } = fieldValues
    return (
      type !== '' &&
      (image || previousValue?.imgUrl || imgUrl !== '') &&
      name !== '' &&
      openChatUrl !== ''
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
    fieldValues?.portfolioUrl?.instagram?.length !== 0 ||
    fieldValues?.portfolioUrl?.youtube?.length !== 0 ||
    fieldValues?.portfolioUrl?.tiktok?.length !== 0

  const isEmptyUrl = (link: string) => {
    return link.length === 0
  }
  return (
    <>
      {(!isOpenChatOpen || !isPortfolioOpen) && (
        <form
          className="mt-[40px] flex flex-col gap-[34px]"
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
                defaultType={fieldValues?.type as RecruitmentType}
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
                initialImage={previousValue?.imgUrl}
                handleSetImage={(image) => {
                  setImage(image)
                  const formData = new FormData()
                  formData.append('img', image)
                  /**
                   *TODO: formData 처리에 대한 추가적인 로직 필요
                   */
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
                    : []
                }
              />
            </div>

            {/* 지역 */}
            <div className={formSectionStyle}>
              <label className={labelStyle}>지역</label>
              <RegionSelect
                selectedRegion={previousValue?.location}
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
                  setValue('careerStartDate', date as unknown as string)
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
                    {fieldValues?.description?.length}
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
                    {isEmptyUrl(fieldValues.openChatUrl as string)
                      ? '미등록'
                      : '등록'}
                  </p>
                </div>
                {!isEmptyUrl(fieldValues.openChatUrl as string) ? (
                  <button
                    onClick={handleToggleOpenChat}
                    className="h-[30px] w-[56px] rounded-[4px] border-[0.5px] border-green-light text-body2 font-bold text-green-light"
                  >
                    변경
                  </button>
                ) : (
                  <button
                    onClick={handleToggleOpenChat}
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
                  {!isEmptyPortfolio && (
                    <span className="mt-[5px] text-body2 text-gray-500">
                      미등록
                    </span>
                  )}
                  {!isEmptyUrl(fieldValues.portfolioUrl?.youtube as string) && (
                    <p className="mt-[5px] text-body2 text-gray-500">유튜브</p>
                  )}
                  {!isEmptyUrl(
                    fieldValues.portfolioUrl?.instagram as string,
                  ) && (
                    <p className="mt-[5px] text-body2 text-gray-500">인스타</p>
                  )}
                  {!isEmptyUrl(fieldValues.portfolioUrl?.tiktok as string) && (
                    <p className="mt-[5px] text-body2 text-gray-500">틱톡</p>
                  )}
                </div>
                {isEmptyPortfolio ? (
                  <button
                    onClick={handleTogglePortfolio}
                    className="h-[30px] w-[56px] rounded-[4px] border-[0.5px] border-green-light text-body2 font-bold text-green-light"
                  >
                    변경
                  </button>
                ) : (
                  <button
                    onClick={handleTogglePortfolio}
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
                  완료
                </button>
              ) : (
                <button className="ml-[12px] flex h-[50px] w-[234px] items-center justify-center rounded-[10px] bg-green-light text-subtitle font-bold text-gray-900">
                  완료
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
              : fieldValues.openChatUrl
          }
        />
      )}
      {/** 포트 폴리오 팝업 */}
      {isPortfolioOpen && (
        <PortfolioPopup
          handleOnSubmit={(portfolioLink) => {
            setValue('portfolioUrl.instagram', portfolioLink?.instaLink)
            setValue('portfolioUrl.youtube', portfolioLink?.youtubeLink)
            setValue('portfolioUrl.tiktok', portfolioLink?.tiktokLink)
          }}
          setIsPortfolioOpen={setIsPortfolioOpen}
          previousData={{
            youtubeLink: fieldValues?.portfolioUrl?.youtube as string,
            instaLink: fieldValues?.portfolioUrl?.instagram as string,
            tiktokLink: fieldValues?.portfolioUrl?.tiktok as string,
          }}
        />
      )}
    </>
  )
}

export default ProfileCreateForm
