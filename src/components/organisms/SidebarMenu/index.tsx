import SidebarContent from './SidebarContent'
import { useRef, useState } from 'react'
import { IconButton } from '@components'
import { useClickAway } from '@hooks'

const SideBarMenu = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  const sidebarRef = useRef(null)
  useClickAway(sidebarRef, () => setShowSidebar(false))

  return (
    <>
      <IconButton
        icon={'line-three'}
        areaLabel={'사이드바 메뉴 버튼'}
        size={18.4}
        handleOnClick={() => setShowSidebar(!showSidebar)}
        styleClass="z-[999]"
      />

      {showSidebar && (
        <div className="absolute top-0 left-0 h-[100vh] w-[375px] bg-gray-900 bg-opacity-60">
          <nav
            className={`absolute top-[52px] right-0 z-[999] h-[100vh] w-[192px] bg-gray-900`}
            ref={sidebarRef}
          >
            <SidebarContent />
          </nav>
        </div>
      )}
    </>
  )
}

export default SideBarMenu
