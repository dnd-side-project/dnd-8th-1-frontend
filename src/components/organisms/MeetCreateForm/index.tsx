import { MeetEditRequest, RecruitmentType } from '@types'
import {
  FormCategorySelect,
  Input,
  Textarea,
  RegionSelect,
  ImageUpload,
  CountPeople,
  FormDatePicker,
} from '@components'
import { useForm, useWatch } from 'react-hook-form'
import {
  MEET_TYPE,
  RECRUITMENT_TYPE,
  theme,
  FORM_INPUT_STYLE,
} from '@constants'
import { useState } from 'react'

interface MeetCreateFormProps {
  previousValue?: MeetEditRequest // 값이 이미 존재하는 경우 (게시글 수정의 경우)
  handleOnSubmit: (formValues: MeetEditRequest) => void
}

const MeetCreateForm = ({
  previousValue,
  handleOnSubmit,
}: MeetCreateFormProps) => {
  const [image, setImage] = useState<File>()

  const { register, control, handleSubmit, setValue } =
    useForm<MeetEditRequest>({
      mode: 'onSubmit',
      defaultValues: {
        title: previousValue ? previousValue.title : '',
        location: previousValue ? previousValue.location : '',
        type: previousValue ? previousValue.type : '콜라보',
        imgUrl: previousValue ? previousValue.imgUrl : '',
        recruitCount: previousValue ? previousValue.recruitCount : 1,
        recruitType: previousValue ? previousValue.recruitType : '댄서',
        description: previousValue ? previousValue.description : '',
        deadline: previousValue ? previousValue.deadline : '',
      },
      shouldUnregister: false,
    })

  // TODO: 로직 관련 상의 하기
  const fieldValues = useWatch<MeetEditRequest>({ control })

  const isAllFull = (fieldValues: MeetEditRequest) => {
    const { title, location, description, deadline, imgUrl } = fieldValues

    return (
      title !== '' &&
      location !== '' &&
      (image || previousValue?.imgUrl || imgUrl !== '') &&
      description !== '' &&
      deadline !== ''
    )
  }

  // 스타일 관련 변수
  const { colors } = theme

  const tabWrapperStyle = 'w-[340px] rounded-[8px]'
  const tabItemStyle = `bg-[${colors.gray[700]}] text-[${colors.gray[500]}] text-[16px] font-bold`
  const activeStyle = {
    backgroundColor: colors.green.light,
    color: colors.gray[700],
    fontSize: 16,
    fontWeight: 700,
  }
  const labelStyle = 'text-subtitle font-bold text-gray-100'
  const formSectionStyle = 'flex flex-col gap-[14px]'

  return (
    <>
      <h1 className="mt-[10px] ml-[16px] text-title2 font-bold leading-none text-gray-100">
        게시글 등록
      </h1>

      <form
        className="mt-[40px] flex flex-col gap-[34px] p-[16px]"
        onSubmit={handleSubmit((formValues) => {
          // TODO: 이미지를 url로 받아오는 api를 호출한다.
          // 우선은 더미 이미지 활용
          const dummyImg = 'https://picsum.photos/200/300'
          handleOnSubmit({
            ...formValues,
            imgUrl: dummyImg,
          })
        })}
      >
        {/* 활동 유형 */}
        <div className={formSectionStyle}>
          <label className={labelStyle}>활동 유형</label>
          <FormCategorySelect
            active={previousValue?.type}
            categories={MEET_TYPE}
            tabWrapperStyle={tabWrapperStyle}
            tabItemStyle={tabItemStyle}
            activeStyle={activeStyle}
            handleOnChange={(type) => setValue('type', type)}
          />
        </div>

        {/* 제목 */}
        <div className={formSectionStyle}>
          <label className={labelStyle}>제목</label>
          <Input
            styleClass={FORM_INPUT_STYLE}
            placeholder="어떤 활동을 함께할까요?"
            {...register('title')}
          />
        </div>

        {/* 모집 유형 */}
        <div className={formSectionStyle}>
          <label className={labelStyle}>모집 유형</label>
          <FormCategorySelect
            active={previousValue?.recruitType}
            categories={RECRUITMENT_TYPE}
            tabWrapperStyle={tabWrapperStyle}
            tabItemStyle={tabItemStyle}
            activeStyle={activeStyle}
            handleOnChange={(recruitType) =>
              setValue('recruitType', recruitType as RecruitmentType)
            }
          />

          {/* 모집 인원 */}
          <CountPeople
            initialCount={previousValue?.recruitCount}
            currentType={fieldValues.recruitType as RecruitmentType}
            handleCountPeople={(recruitCount) =>
              setValue('recruitCount', recruitCount)
            }
          />
        </div>

        {/* 마감일 */}
        <div className={formSectionStyle}>
          <label className={labelStyle}>마감일</label>

          <FormDatePicker
            initialStartDate={previousValue?.deadline}
            handleStartDate={(date) =>
              setValue('deadline', date ? date.toDateString() : '')
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

        {/* 상세 설명 */}
        <div className={formSectionStyle}>
          <label className={labelStyle}>상세설명</label>
          <Textarea
            styleClass="bg-gray-700 border-gray-600 rounded-[8px] text-body2 placeholder-text-body2 px-[12px] py-[13px] w-[343px] h-[166px] focus:outline-none focus:ring focus:ring-green-light focus:ring-[1px]"
            placeholder="함께 하는 활동의 종류와 장르에 대해 자세히 적어주세요."
            {...register('description')}
          />
        </div>

        {/* 이미지 */}
        <div className={formSectionStyle}>
          <label className={labelStyle}>이미지 추가</label>
          <p className="text-body-400 text-gray-400">
            팀의 이미지 혹은 콜라보/쉐어 활동을 나타낼 수 있는 이미지를 업로드
            해주세요!
          </p>
          <ImageUpload
            initialImage={previousValue?.imgUrl}
            handleSetImage={(image) => {
              setImage(image)
            }}
          />
        </div>

        {/* 등록 버튼 */}
        {!isAllFull(fieldValues as MeetEditRequest) ? (
          <div className="flex items-center justify-center rounded-[8px] bg-gray-600 py-[12px] px-[155.5px] text-subtitle font-bold text-gray-400">
            완료
          </div>
        ) : (
          <button className="flex items-center justify-center rounded-[8px] bg-green-light py-[12px] px-[155.5px] text-subtitle font-bold text-gray-900">
            완료
          </button>
        )}
      </form>
    </>
  )
}

export default MeetCreateForm
