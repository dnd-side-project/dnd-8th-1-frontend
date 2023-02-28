import SidebarContent from './SidebarContent'
import { useRef, useState } from 'react'
import { IconButton } from '@components'
import { useClickAway, useDelayUnmount } from '@hooks'

const SideBarMenu = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  const shouldRenderSidebar = useDelayUnmount(showSidebar, 200)

  const iconButtonRef = useRef<HTMLDivElement>(null)
  const sidebarRef = useRef(null)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  useClickAway(sidebarRef, (e: any) => {
    // useClickAway와 IconButton의 동시 실행 방지
    const { current: triggerWrapper } = iconButtonRef
    triggerWrapper &&
      !triggerWrapper.contains(e.target) &&
      setShowSidebar(false)
  })
  return (
    <>
      <div
        ref={iconButtonRef}
        className="absolute right-[18.68px] z-[999] flex items-center"
      >
        <IconButton
          icon={'line-three'}
          areaLabel={'사이드바 메뉴 버튼'}
          size={18.4}
          handleOnClick={() => setShowSidebar(!showSidebar)}
        />
      </div>

      {shouldRenderSidebar && (
        <div
          className={`absolute top-0 left-0 h-[100vh] w-[100%] ${
            showSidebar ? 'animate-fadeIn' : 'animate-fadeOut'
          } overflow-hidden bg-gray-900 bg-opacity-60`}
        >
          <nav
            className={`absolute top-[52px] right-0 z-[999] h-[100vh] w-[192px] ${
              showSidebar ? 'animate-slideIn' : 'animate-slideOut'
            } bg-gray-900`}
            ref={sidebarRef}
          >
            <SidebarContent handleOnClick={() => setShowSidebar(false)} />
          </nav>
        </div>
      )}
    </>
  )
}

export default SideBarMenu
