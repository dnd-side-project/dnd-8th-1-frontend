import { Meet } from '@types'
import CollaboListItem from './CollaboListItem'
import nonItemLogo from '../../../../public/assets/images/noneItemLogo.png'
import Image from 'next/image'
interface CollaboListProps {
  collaboItems: Meet[]
}

const CollaboList = ({ collaboItems }: CollaboListProps) => {
  const isEmpty = !collaboItems?.length

  return isEmpty ? (
    <div className="mt-[77.87px] mb-[118px] flex w-[100%] flex-col items-center justify-center">
      <Image
        alt="공연 정보 없음 이미지"
        src={nonItemLogo}
        width={162.12}
        height={133.45}
        placeholder="blur"
      />

      <p className=" mt-[18.69px] cursor-default text-center text-body1 text-gray-500">
        조건에 맞는 결과가 없습니다
      </p>
    </div>
  ) : (
    <div className="w-[100%] bg-gray-900 px-[16px] pt-[29px]">
      {collaboItems.map((collaboItem) => {
        return (
          <CollaboListItem key={collaboItem.id} collaboListItem={collaboItem} />
        )
      })}
    </div>
  )
}

export default CollaboList
