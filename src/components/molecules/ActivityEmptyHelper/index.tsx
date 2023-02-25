import EmptyImage from '/public/assets/images/graphic_1.png'
import Image from 'next/image'
import { Center } from '@chakra-ui/react'

const ActivityEmptyHelper = () => {
  return (
    <Center className="mx-[104px] mt-[125.4px] mb-[285px] flex-col text-body1 text-gray-500 ">
      <Image src={EmptyImage} width={200} height={200} alt="내역이 비어있음." />
      내역이 없습니다.
    </Center>
  )
}

export default ActivityEmptyHelper
