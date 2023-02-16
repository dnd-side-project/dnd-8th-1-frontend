import { MeetApplicant } from '@types'
import RegisterListItem from './RegisterListItem'
import noneItemLogo from '../../../../public/assets/images/noneItemLogo.png'
import Image from 'next/image'

interface RegisterListProps {
  registerItems: MeetApplicant[]
}

const RegisterList = ({ registerItems }: RegisterListProps) => {
  const isEmpty = !registerItems.length

  return isEmpty ? (
    <div className="flex w-[375px] items-center justify-center bg-gray-700">
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
          />
        )
      })}
    </div>
  )
}

export default RegisterList
