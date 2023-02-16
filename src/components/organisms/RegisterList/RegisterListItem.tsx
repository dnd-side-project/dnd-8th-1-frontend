import { MeetApplicant } from '@types'
import { Avatar, Icon } from '@components'
import Link from 'next/link'

interface RegisterListItemProps {
  registerItem: MeetApplicant
}
const RegisterListItem = ({ registerItem }: RegisterListItemProps) => {
  const { profile, isMatched, location } = registerItem
  const { imgUrl, name, description, openChatUrl } = profile

  return (
    <li className="mb-[16px] h-[166px] w-[343px] rounded-[12px] border-[1px] border-gray-700 bg-[#121212] p-[16px]">
      <div className="flex gap-[16px]">
        <Avatar profileImage={imgUrl} size={70} />

        <div className="mb-[16px] flex w-[225px] flex-col justify-center gap-[8px]">
          <span className="block text-[12px] leading-none text-green-light">
            {location}
          </span>
          <span className="text-headline font-bold leading-none text-gray-100">
            {name}
          </span>
          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-body2 text-gray-300">
            {description}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-[8px]">
        <div
          className={`text-body1 font-bold ${
            isMatched ? 'text-green-light' : 'text-gray-100'
          } 
         
          flex h-[48px] items-center gap-[8.83px] rounded-[8px] bg-[#262626] p-[14px]`}
        >
          <Icon
            icon={isMatched ? 'check-circle-active' : 'check-circle-inactive'}
            size={18.33}
          />
          <span>{isMatched ? '매칭 완료' : '매칭 하기'}</span>
        </div>
        <Link href={openChatUrl} target="_blank">
          <button
            className={`flex h-[48px] items-center
          gap-[8.83px] rounded-[8px] bg-[#262626] py-[14px] px-[35px] text-body1 font-bold text-gray-100`}
          >
            <Icon icon="chat-bubble" size={17.39} />
            <span>오픈채팅 하기</span>
          </button>
        </Link>
      </div>
    </li>
  )
}

export default RegisterListItem
