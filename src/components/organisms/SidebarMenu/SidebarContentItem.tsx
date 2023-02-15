interface SidebarContentItemProps {
  content: string
  handleOnClick: () => void
  styleClass?: string
  isCurrentPath: boolean
}

const SidebarContentItem = ({
  content,
  handleOnClick,
  styleClass,
  isCurrentPath,
}: SidebarContentItemProps) => {
  return (
    <li
      onClick={handleOnClick}
      className={`mb-[36px] cursor-pointer  ${
        isCurrentPath ? 'text-green-light' : 'text-gray-300'
      } text-subtitle font-bold ${styleClass} `}
    >
      {content}
    </li>
  )
}

export default SidebarContentItem
