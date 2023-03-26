import { Center } from '@chakra-ui/react'
import { Textarea } from '@components'
import { useState } from 'react'

interface PerformanceReviewTextArea {
  handleOnSubmit: (reviewContent: string) => void
}

// TODO: 비 로그인 사용자일 시
// 입력 필드 - 비활성화 됨
// 입력 필드 클릭시 로그인 팝업

const PerformanceReviewTextArea = ({
  handleOnSubmit,
}: PerformanceReviewTextArea) => {
  const [value, setValue] = useState('')

  return (
    <div className="relative mx-[16px] mb-[29px] h-[112px] w-[343px] rounded-[7px] border-[1px] border-gray-600 bg-gray-900 py-[13px] pt-[10px]">
      <Center className="flex-col">
        <Textarea
          placeholder={`최고의 댄스 공연이였습니다.`} // TODO: 비 로그인 유저일 시 '후기를 작성하려면 로그인 해주세요.'
          styleClass={
            // TODO: 비 로그인 유저일 시 스타일 변경
            'bg-gray-900 rounded-[2px] resize-none text-body2 placeholder-text-body2 placeholder-text-gray-500 text-body2 text-gray-100 w-[318px] h-[64px] focus:outline-none focus:ring focus:ring-green-light focus:ring-[1px]'
          }
          maxLength={300}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          // TODO: 비 로그인 유저일 시 disabled true
          disabled={false}
          // TODO: 비 로그인 유저일 시 팝업 여는 로직
        />
      </Center>
      <div className="absolute left-[10px] bottom-[8.03px] text-caption text-[#515151]">
        <span className="text-gray-400">{value.length}</span> / <span>300</span>
      </div>

      {/* TODO: 비 로그인 유저일 시 렌더링하지 않는다. */}
      <button
        className={`absolute right-[19px] bottom-[7.89px] text-body2 text-gray-500`}
        onClick={() => {
          handleOnSubmit(value)
          setValue('')
        }}
        disabled={value === '' ? true : false}
      >
        등록
      </button>
    </div>
  )
}

export default PerformanceReviewTextArea
