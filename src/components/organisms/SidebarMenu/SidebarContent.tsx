import { useRouter, usePathname } from 'next/navigation'
import SidebarContentItem from './SidebarContentItem'

const CONTENTS_ITEMS = [
  {
    title: '홈',
    path: '/',
  },
  {
    title: '콜라보 · 쉐어',
    path: '/meet',
  },
  {
    title: '공연 정보',
    path: '/performance',
  },
]

const SidebarContent = () => {
  const router = useRouter()
  const pathName = usePathname() as string

  // TODO: 전역 로그인 상태 로직

  return (
    <ul className="py-[18px] px-[20px]">
      {CONTENTS_ITEMS.map(({ title, path }) => {
        const isCurrentPath =
          title === '홈' ? pathName === path : pathName.includes(path)

        return (
          <SidebarContentItem
            key={title}
            handleOnClick={() => router.push(path)}
            content={title}
            isCurrentPath={isCurrentPath}
          />
        )
      })}

      {/* TODO: 로그인 시 프로필 버튼 미 로그인시 로그인 버튼 */}
      {/* TODO: 전역 로그인 상태를 이용한 분기처리 필요 */}

      {/* <SidebarContentItem
        handleOnClick={() => router.push('/myprofile')}
        content="내 프로필"
        isCurrentPath={pathName.includes('/myprofile')}
      /> */}
    </ul>
  )
}

export default SidebarContent
