import { SidebarMenu, StyledImage } from '@components'
import { usePathname } from 'next/navigation'
import Logo from '/public/assets/logo/logo_small.png'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  const pathname = usePathname()

  return (
    <div
      className={`fixed top-0 z-[999] box-border flex h-[52px] w-[375px] items-center bg-gray-900 py-[14px] px-[18.77px]`}
    >
      <Link href={'/'}>
        <Image src={Logo} width={23.89} height={23.89} alt="사이트 로고" />
      </Link>
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
