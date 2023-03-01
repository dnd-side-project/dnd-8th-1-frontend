import { SidebarMenu, Avatar } from '@components'
import { usePathname } from 'next/navigation'
import Logo from '/public/assets/logo/logo_small.png'
import Image from 'next/image'
import Link from 'next/link'
import { useRecoilValue } from 'recoil'
import { userAtom } from 'states'

const Header = () => {
  const pathname = usePathname()
  const userState = useRecoilValue(userAtom)
  const { hasProfile, id, imgUrl, profile } = userState

  return (
    <div
      className={`relative h-[52px] w-[375px] ${
        pathname?.includes('/signin') && 'hidden'
      }`}
    >
      <header
        className={`fixed top-0 z-[999] mb-[52px] box-border flex h-[52px] w-[375px] items-center justify-between bg-gray-900 py-[14px] px-[18.77px] `}
      >
        <div className="flex ">
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
        </div>

        <div className="flex items-center gap-[14px]">
          {!!id && (
            <Link href={`profile/${id}`}>
              <Avatar
                profileImage={
                  hasProfile ? (profile?.imgUrl as string) : (imgUrl as string)
                }
                size={24}
                styleClass="border-[0.5px] border-[#2D2D2D]"
              />
            </Link>
          )}

          {!id && (
            <Link href={'/signin'}>
              <button className="rounded-[10px] bg-green-light px-[10px] py-[5px] font-bold text-gray-900">
                로그인
              </button>
            </Link>
          )}

          <SidebarMenu />
        </div>
      </header>
    </div>
  )
}

export default Header
