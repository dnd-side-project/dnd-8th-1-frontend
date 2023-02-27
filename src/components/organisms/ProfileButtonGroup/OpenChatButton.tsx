import { Icon } from '@components'
import { theme, ProfileButtonStyle } from '@constants'
import Link from 'next/link'

interface OpenChatButtonProps {
  openChatUrl: string
}

const OpenChatButton = ({ openChatUrl }: OpenChatButtonProps) => {
  return (
    <button className={ProfileButtonStyle}>
      <Link
        href={openChatUrl}
        target="_blank"
        className="flex items-center gap-[9.25px]"
      >
        <Icon icon="chat-bubble" color={theme.colors.gray[900]} size={20} />
        <span>오픈채팅 하기</span>
      </Link>
    </button>
  )
}

export default OpenChatButton
