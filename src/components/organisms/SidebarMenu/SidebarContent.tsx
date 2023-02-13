import { useRouter, usePathname } from 'next/navigation'
import SidebarContentItem from './SidebarContentItem'

const SidebarContent = () => {
  const router = useRouter()
  const pathName = usePathname() as string

  const contentItems = [
    {
      title: '홈',
      path: '/',
    },
    {
      title: '만나기',
      path: '/meet',
    },
    {
      title: '공연 정보',
      path: '/performance',
    },
  ]

  return (
    <ul className="py-[18px] px-[20px]">
      {contentItems.map(({ title, path }) => {
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
      <SidebarContentItem
        handleOnClick={() => router.push('/myprofile')}
        content={'로그인'}
        isCurrentPath={false}
      />
    </ul>
  )
}

export default SidebarContent
