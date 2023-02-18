import { Box, Text } from '@chakra-ui/react'
import { BottomSheet, Checkbox, Input } from '@components'
import { Dispatch, SetStateAction } from 'react'
import { useForm, useWatch } from 'react-hook-form'

interface CandidateBottomSheetProps {
  showBottomSheet: boolean
  setShowBottomSheet: Dispatch<SetStateAction<boolean>>
  openchatUrl: string
}

const CandidateBottomSheet = ({
  showBottomSheet,
  setShowBottomSheet,
  openchatUrl,
}: CandidateBottomSheetProps) => {
  const { register, setValue, control, handleSubmit } = useForm<{
    candidate: string
    toggleText: boolean
  }>({
    defaultValues: {
      candidate: openchatUrl,
      toggleText: false,
    },
  })
  const handleCompleted = (data: {
    candidate: string
    toggleText: boolean
  }) => {
    /**
     * TODO : data를 통한 API 호출 로직(mutate) 추가
     */
    console.log(data)

    // 전체 데이터 날리기
    setValue('toggleText', false)
    setShowBottomSheet(false)
  }

  const toggleTextState = useWatch({ control, name: 'toggleText' })
  const isDisabled = toggleTextState === false

  return (
    <BottomSheet
      hasCloseButton={true}
      showBottomSheet={showBottomSheet}
      setShowBottomSheet={setShowBottomSheet}
    >
      <form
        onSubmit={handleSubmit(handleCompleted)}
        className="h-[475px] bg-gray-700 px-[16px] pb-[20px] text-[80px] font-extrabold text-gray-700"
      >
        <div className="relative h-[52px] w-[343px]">
          <p className="text-subtitle font-bold text-gray-100">
            연락 수단으로 사용되는
          </p>
          <p className="border-gray-500 text-subtitle font-bold text-gray-100">
            카카오톡 오픈 채팅 링크를 확인해주세요
          </p>
        </div>
        <Input
          disabled
          styleClass="w-[343px] h-[52px] rounded-[8px] border border-gray-500 text-body1 text-gray-300 bg-gray-600 text-center font-normal absolute mt-[24px]"
          {...register('candidate')}
        />
        <p className="absolute mt-[85px] text-caption font-normal text-gray-400">
          카카오톡 오픈채팅 링크 수정은 프로필에서 가능해요.
        </p>
        <Box
          display="flex"
          alignItems="center"
          className="absolute bottom-[101.83px]"
        >
          <Checkbox {...register('toggleText')} />
          <Text className="ml-[10.83px] text-body2 font-normal text-gray-100">
            콜라보 게시자에게 내 오픈채팅 링크를 제공할게요.
          </Text>
        </Box>
        <button
          className="absolute bottom-[32px] h-[50px] w-[343px] rounded-[8px] bg-green-light text-subtitle font-bold text-gray-900 disabled:bg-gray-600"
          disabled={isDisabled}
        >
          신청 완료하기
        </button>
      </form>
    </BottomSheet>
  )
}

export default CandidateBottomSheet
