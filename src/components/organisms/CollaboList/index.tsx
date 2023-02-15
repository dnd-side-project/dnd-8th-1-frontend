import { Center } from '@chakra-ui/react'
import { Meet } from '@types'
import CollaboListItem from './CollaboListItem'

interface CollaboListProps {
  collaboItems: Meet[]
}

const CollaboList = ({ collaboItems }: CollaboListProps) => {
  const isEmpty = !collaboItems.length

  return isEmpty ? (
    <div className="mt-[77.87px] mb-[118px] flex w-[100%] flex-col items-center justify-center">
      {/* TODO: 디자인 팀에 이미지 받기
      레이아웃을 위한 임시 박스 */}
      <div className="h-[133.45px] w-[162.12px] bg-green-light"></div>
      <p className=" mt-[18.69px] text-center text-body1 text-gray-500 ">
        조건에 맞는 결과가 없습니다
      </p>
    </div>
  ) : (
    <div className="w-[100%] bg-gray-900 px-[16px] pt-[29px] pb-[49px]">
      {collaboItems.map((collaboItem) => {
        return (
          <CollaboListItem key={collaboItem.id} collaboListItem={collaboItem} />
        )
      })}
    </div>
  )
}

export default CollaboList
