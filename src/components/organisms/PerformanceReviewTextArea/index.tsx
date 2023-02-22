import { Center } from '@chakra-ui/react'
import { Textarea } from '@components'
import { useState } from 'react'

interface PerformanceReviewTextArea {
  handleOnSubmit: (reviewContent: string) => void
}

const PerformanceReviewTextArea = ({
  handleOnSubmit,
}: PerformanceReviewTextArea) => {
  const [value, setValue] = useState('')

  return (
    <div className="relative mx-[16px] mb-[29px] h-[112px] w-[343px] rounded-[7px] border-[1px] border-gray-600 bg-gray-900 py-[13px] pt-[10px]">
      <Center className="flex-col">
        <Textarea
          placeholder="최고의 댄스 공연이였습니다."
          styleClass="bg-gray-900 rounded-[2px] resize-none text-body2 placeholder-text-body2 placeholder-text-gray-500 text-body2 text-gray-100 w-[318px] h-[64px] focus:outline-none focus:ring focus:ring-green-light focus:ring-[1px]"
          maxLength={300}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </Center>
      <div className="absolute left-[10px] bottom-[8.03px] text-caption text-[#515151]">
        <span className="text-gray-400">{value.length}</span> / <span>300</span>
      </div>

      <button
        className="absolute right-[19px] bottom-[7.89px] text-body2 text-gray-500"
        onClick={() => {
          handleOnSubmit(value)
          setValue('')
        }}
      >
        등록
      </button>
    </div>
  )
}

export default PerformanceReviewTextArea
