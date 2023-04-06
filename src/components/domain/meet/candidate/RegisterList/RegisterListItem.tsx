import { MeetApplicant } from '@types'
import { Avatar, Icon } from '@components'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface RegisterListItemProps {
  registerItem: MeetApplicant
  handleOnClick: (id: number) => void
}
const RegisterListItem = ({
  registerItem,
  handleOnClick,
}: RegisterListItemProps) => {
  const { profile, matched } = registerItem
  const { id, imgUrl, name, description, openChatUrl, location } = profile

  const router = useRouter()
  return (
    <li className="mb-[16px] h-[166px] w-[343px] rounded-[12px] border-[1px] border-gray-700 bg-[#121212] p-[16px]">
      <div className="flex gap-[16px]">
        <div
          className="cursor-pointer"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            router.push(`/profile/${id}`)
          }}
        >
          <Avatar profileImage={imgUrl} size={70} />
        </div>
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
        <button
          className={`text-body1 font-bold
          ${matched ? 'text-green-light' : 'text-gray-100'} 
          ${matched ? 'cursor-default' : 'cursor-pointer'} 
          flex h-[48px] items-center gap-[8.83px] rounded-[8px] bg-[#262626] p-[14px]`}
          onClick={() => !matched && handleOnClick(id)}
        >
          <Icon
            icon={matched ? 'check-circle-active' : 'check-circle-inactive'}
            size={18.33}
          />
          <span>{matched ? '매칭 완료' : '매칭 하기'}</span>
        </button>
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
