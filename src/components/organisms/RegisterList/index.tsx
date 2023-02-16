import { MeetApplicant } from '@types'
import RegisterListItem from './RegisterListItem'

interface RegisterListProps {
  registerItems: MeetApplicant[]
}

const RegisterList = ({ registerItems }: RegisterListProps) => {
  const isEmpty = !registerItems.length

  return isEmpty ? (
    <div>
      <p>신청자가 아직 없어요.</p>
    </div>
  ) : (
    <div className="w-[100%] bg-gray-900 px-[16px] pt-[16px]">
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
