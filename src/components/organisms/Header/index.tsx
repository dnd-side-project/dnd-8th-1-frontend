import { SidebarMenu } from '@components'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname()

  return (
    <div
      className={`relative top-0 z-[999] box-border block flex h-[52px] w-[375px]  bg-gray-900 px-[16px] py-[14px]`}
    >
      <div className="z-[999] ml-[18.77px] font-bold text-green">Danverse</div>
      {pathname === '/meet' && (
        <h1 className="ml-[9.93px] cursor-default text-subtitle font-bold text-gray-100">
          콜라보 · 쉐어
        </h1>
      )}
      <SidebarMenu />
    </div>
  )
}

export default Header
