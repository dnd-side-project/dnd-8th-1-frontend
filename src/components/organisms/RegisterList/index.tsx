import { MeetApplicant } from '@types'
import RegisterListItem from './RegisterListItem'
import noneItemLogo from '/public/assets/images/graphic_2.png'
import Image from 'next/image'

interface RegisterListProps {
  registerItems: MeetApplicant[]
  handleOnClick: (id: number) => void
}

const RegisterList = ({ registerItems, handleOnClick }: RegisterListProps) => {
  const isEmpty = !registerItems?.length

  return isEmpty ? (
    <div className="mt-[63.24px] flex w-[375px] items-center justify-center bg-gray-900">
      <div className="flex flex-col items-center justify-center">
        <Image
          src={noneItemLogo}
          width={142.2}
          height={107.28}
          alt="신청자 없음"
        />
        <p className="mt-[10px] h-[40px] font-[600] text-gray-400">
          신청자가 아직 없어요.
        </p>
      </div>
    </div>
  ) : (
    <div className="w-[100%] bg-gray-900 px-[16px] pt-[16px] text-body1">
      {registerItems.map((registerItem) => {
        return (
          <RegisterListItem
            key={registerItem.profile.id}
            registerItem={registerItem}
            handleOnClick={handleOnClick}
          />
        )
      })}
    </div>
  )
}

export default RegisterList
