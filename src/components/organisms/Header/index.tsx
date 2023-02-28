import { IconButton, SearchHeader, SidebarMenu } from '@components'
import { usePathname } from 'next/navigation'
import Logo from '/public/assets/logo/logo_small.png'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Header = () => {
  const pathname = usePathname()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  return (
    <div
      className={`relative h-[52px] w-[375px] ${
        pathname?.includes('/signin') && 'hidden'
      }`}
    >
      <header
        className={`fixed top-0 z-[999] mb-[52px] box-border flex h-[52px] w-[375px] items-center bg-gray-900 py-[14px] px-[18.77px]`}
      >
        <Link href={'/'}>
          <Image src={Logo} width={23.89} height={23.89} alt="사이트 로고" />
        </Link>
        {pathname === '/meet' && (
          <h1 className="ml-[9.93px] cursor-default text-subtitle font-bold text-gray-100">
            콜라보 · 쉐어
          </h1>
        )}
        {pathname?.includes('/performance') && (
          <h1 className="ml-[9.93px] cursor-default text-subtitle font-bold text-gray-100">
            공연
          </h1>
        )}
        {pathname === '/' && (
          <h1 className="ml-[9.93px] cursor-default text-subtitle font-bold text-gray-100">
            댄버스
          </h1>
        )}
        {isSearchOpen && (
          <div className="mx-[-84px]">
            <SearchHeader open={isSearchOpen} setOpen={setIsSearchOpen} />
          </div>
        )}
        {pathname === '/performance' && (
          <IconButton
            styleClass="pt-[1px] absolute right-[50.77px]"
            handleOnClick={() => setIsSearchOpen(true)}
            icon={'search'}
            size={14}
            areaLabel="검색 헤더 여는 버튼"
          />
        )}
        <SidebarMenu />
      </header>
    </div>
  )
}

export default Header
