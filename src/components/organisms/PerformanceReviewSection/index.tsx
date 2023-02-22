import { isDeadLine } from '@utils'
import { Comment } from '@types'
import Graphic from '/public/assets/images/graphic_2.png'
import Image from 'next/image'
import { Center } from '@chakra-ui/react'
import { PerformanceReviewList, PerformanceReviewTextArea } from '@components'
interface PerformanceReviewSectionProps {
  startDate: string
  reviews: Comment[]
  handleOnDelete: (reviewId: number) => void
  handleOnSubmit: (reviewContent: string) => void
}

const PerformanceReviewSection = ({
  startDate,
  reviews,
  handleOnDelete,
  handleOnSubmit,
}: PerformanceReviewSectionProps) => {
  return (
    <section>
      <h3 className="ml-[16px] text-headline font-bold text-green-light">
        후기
      </h3>
      {!isDeadLine(startDate) ? (
        <Center className=" mt-[8px] flex-col gap-[20.78px]">
          <Image src={Graphic} alt={'후기 작성 불가 알림'} width={75.19} />
          <p className=" text-center text-body1 text-gray-400">
            후기는 공연 종료 후에 <br /> 작성할 수 있어요!
          </p>
        </Center>
      ) : (
        <>
          <p className="mb-[12px] ml-[16px] mt-[7px] text-body1">
            즐거운 공연 관람 후 <br /> 응원과 따뜻한 피드백을 남겨보세요.
          </p>
          <PerformanceReviewTextArea handleOnSubmit={handleOnSubmit} />
          <PerformanceReviewList
            reviews={reviews}
            handleOnDelete={(reviewId) => {
              handleOnDelete(reviewId)
            }}
          />
        </>
      )}
    </section>
  )
}

export default PerformanceReviewSection
