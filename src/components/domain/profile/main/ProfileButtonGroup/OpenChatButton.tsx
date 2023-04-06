import { Icon } from '@components'
import { theme } from '@constants'
import Link from 'next/link'

interface OpenChatButtonProps {
  openChatUrl: string
}

const OpenChatButton = ({ openChatUrl }: OpenChatButtonProps) => {
  return (
    <button
      className={
        'flex h-[50px] min-w-[165px] flex-grow items-center justify-center gap-[9.25px] rounded-[8px] bg-gray-100 px-[25px] py-[15px] text-body1 font-bold text-gray-900'
      }
    >
      <Link
        href={openChatUrl}
        target="_blank"
        className="flex items-center gap-[9.25px]"
      >
        <Icon icon="chat-bubble" color={theme.colors.gray[900]} size={20} />
        <span className="block w-full">오픈채팅 하기</span>
      </Link>
    </button>
  )
}

export default OpenChatButton
