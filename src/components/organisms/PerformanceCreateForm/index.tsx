import {
  PerformanceEditRequest,
  // PerformanceEditRequest,
} from '@types'
import {
  Input,
  Textarea,
  RegionSelect,
  ImageUpload,
  GenreSelect,
} from '@components'
import { useForm, useWatch } from 'react-hook-form'
import { useRef, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { uploadImageUrl } from '@queries'
import dayjs from 'dayjs'
import { useClickAway } from '@hooks'
import FormDateTimePicker from '../../molecules/FormDatePicker/FormDateTimePicker'

interface PerformanceCreateFormProps {
  previousValue?: PerformanceEditRequest // 값이 이미 존재하는 경우 (게시글 수정의 경우)
  handleOnSubmit: (formValues: PerformanceEditRequest) => void
}

const PerformanceCreateForm = ({
  previousValue,
  handleOnSubmit,
}: PerformanceCreateFormProps) => {
  const [image, setImage] = useState<File>()
  const { register, control, handleSubmit, setValue } =
    useForm<PerformanceEditRequest>({
      mode: 'onSubmit',
      defaultValues: {
        title: previousValue ? previousValue.title : '',
        imgUrl: previousValue ? previousValue.imgUrl : '',
        startDate: previousValue ? previousValue.startDate : '',
        startTime: previousValue ? previousValue.startTime : '',
        location: previousValue ? previousValue.location : '',
        genres: previousValue ? previousValue.genres : [],
        description: previousValue ? previousValue.description : '',
        address: previousValue ? previousValue.address : '',
      },
      shouldUnregister: false,
    })
  const { mutate: requestImgUrl } = useMutation(
    (payload: FormData) => uploadImageUrl(payload),
    {
      // TODO: useUploadImageUrl과 함께보기
      /**
       *TODO: 시간 날 때 data 타입 형식 정하기 (autocomplete 를 위함)
       */
      onSuccess: ({ data: { imgUrl } }) => {
        setValue('imgUrl', imgUrl)
      },
    },
  )
  const fieldValues = useWatch<PerformanceEditRequest>({ control })

  const isAllFull = (fieldValues: PerformanceEditRequest) => {
    const {
      title,
      location,
      description,
      imgUrl,
      startDate,
      startTime,
      genres,
      address,
    } = fieldValues

    return (
      title !== '' &&
      location !== '' &&
      (image || previousValue?.imgUrl || imgUrl !== '') &&
      description !== '' &&
      startTime !== '' &&
      startDate !== '' &&
      genres.length !== 0 &&
      address !== ''
    )
  }

  const labelStyle = 'text-subtitle font-bold text-gray-100'
  const formSectionStyle = 'flex flex-col gap-[6px]'
  const inputStyle =
    'placeholder:text-body2 w-[343px] h-[52px] px-[11px] py-[14px] text-body2 rounded-[8px] bg-gray-700 border-[1px] border-gray-600 focus:outline-none focus:border-green-light'
  const [isFocus, setIsFocus] = useState(false)
  const textAreaRef = useRef<HTMLDivElement>(null)
  useClickAway(textAreaRef, () => {
    setIsFocus(false)
  })

  return (
    <>
      <h1 className="mt-[10px] ml-[16px] text-title2 font-bold leading-none text-gray-100">
        공연 등록
      </h1>

      <form
        className="mt-[40px] flex flex-col gap-[34px] p-[16px]"
        onSubmit={handleSubmit((formValues) => {
          handleOnSubmit({
            ...formValues,
          })
        })}
      >
        {/* 공연 제목 */}
        <div className={formSectionStyle}>
          <label className={labelStyle}>공연 제목</label>
          <Input
            styleClass={inputStyle}
            placeholder="제목을 입력해주세요"
            {...register('title')}
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

        {/* 장소 */}
        <div className={formSectionStyle}>
          <label className={labelStyle}>장소</label>
          <p className="text-body2 text-gray-400">
            공연이 진행될 장소를 정확하게 기입해주세요.
          </p>
          <Input
            styleClass={inputStyle}
            placeholder="장소를 입력해주세요."
            {...register('address')}
          />
        </div>

        {/* 시간 */}
        {/**
         *TODO: 다은님이 컴포넌트 만들어주시는 대로 교체 될 예정
         */}
        <div className={formSectionStyle}>
          <label className={labelStyle}>시간</label>
          <p className="text-body2 text-gray-400">
            공연이 시작되는 시간을 알려주세요.
          </p>
          <FormDateTimePicker
            initialStartDate={previousValue?.startTime}
            handleStartDate={(date) => {
              setValue(
                'startDate',
                date ? dayjs(date).format().slice(0, 10) : '',
              )
              setValue(
                'startTime',
                date ? dayjs(date).format().slice(0, 19) : '',
              )
            }}
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

        {/* 공연 포스터 */}
        <div className={formSectionStyle}>
          <label className={labelStyle}>공연 포스터</label>
          <p className="mb-[6px] text-body2 text-gray-400">
            공연을 홍보할 이미지를 선택해주세요. (팀 사진, 팀 로고 등)
          </p>
          <ImageUpload
            isPerformance
            initialImage={previousValue?.imgUrl}
            handleSetImage={(image) => {
              setImage(image)
              const formData = new FormData()
              formData.append('img', image)
              requestImgUrl(formData as FormData)
            }}
          />
        </div>

        {/* 상세 설명 */}
        <div className={formSectionStyle}>
          <label className={labelStyle}>상세설명</label>
          <div
            ref={textAreaRef}
            className={`relative h-[166px] w-[343px] rounded-[8px] border bg-gray-700 px-[12px] pt-[12px] pb-[32px] ${
              isFocus ? 'border-green-light' : 'border-gray-600'
            }`}
          >
            <Textarea
              onFocus={() => setIsFocus(true)}
              maxLength={300}
              styleClass="placeholder:text-body2 overflow-hidden w-full h-full resize-none bg-gray-700 text-body2 focus:outline-none"
              placeholder="공연의 내용, 순서, 관람 포인트를 소개하면 좋아요."
              {...register('description')}
            />
            <div className="absolute bottom-[6px] left-[12px] z-[999] text-[12px] font-[400] leading-[24px]">
              <span className="text-gray-400">
                {fieldValues?.description?.length}
              </span>{' '}
              <span className="text-[#515151]">/ 300</span>
            </div>
          </div>
        </div>

        {/* 등록 버튼 */}
        {!isAllFull(fieldValues as PerformanceEditRequest) ? (
          <button
            disabled
            className="flex items-center justify-center rounded-[8px] py-[12px] px-[155.5px] disabled:bg-gray-600 disabled:text-subtitle disabled:font-bold disabled:text-gray-400"
          >
            완료
          </button>
        ) : (
          <button className="flex items-center justify-center rounded-[8px] bg-green-light py-[12px] px-[155.5px] text-subtitle font-bold text-gray-900">
            완료
          </button>
        )}
      </form>
    </>
  )
}

export default PerformanceCreateForm
